/// <reference path="Task.ts" />
/// <reference path="./../calendar/CalendarRow.ts" />
/// <reference path="./../data/TaskDataRow.ts" />
/// <reference path="./../../middleware/parallel/IParallel.ts" />

class TaskCollection implements IParallel {
    private _ready: boolean;
    private _runned: boolean;
    private _error: boolean;
    private _errMsg: string;
    private _response: any;
    private _onReadyFn: AsyncFetcherCallbackFn | null = null;
    private _dataTasks: Array<Task> = [];
    private _cRows: Array<CalendarRow> = [];

    public constructor(private _url: string, private _id: string = '') {
        this._ready = false;
        this._runned = false;
        this._error = false;
        this._errMsg = '';
    }

    public run(): void {
        this._runned = true;
        this.fetchData();
    }
    public isReady(): boolean {
        return this._ready;
    }
    public isRunned(): boolean {
        return this._runned;
    }
    public getId(): string {
        return this._id;
    }
    public setId(id: string) {
        this._id = id;
    }
    public getResult(): any {
        return this._response;
    }
    public onReady(callbackFn: AsyncFetcherCallbackFn | null): IParallel {
        if (callbackFn !== null) {
            this._onReadyFn = callbackFn;
        }
        return this;
    }

    private fetchData() {
        let sett = Settings.getInstance();
        let that = this;
        let xhr = new XMLHttpRequest();
        xhr.open(sett.requestMethod, this._url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resp = xhr.responseText;
                    let respJson = JSON.parse(resp);
                    that._response = respJson;
                    that._runned = false;
                    that._ready = true;
                    that.loadArray(respJson);
                    if (that._onReadyFn) {
                        that._onReadyFn.call(this, respJson);
                    }
                } else {
                    that._runned = false;
                    that._ready = true;
                    that._error = true;
                    that._errMsg = 'Send request error';
                }
            } else {
                // console.log("xhr processing going on");
            }
        }
        // console.log("request sent succesfully");
    }

    public loadArray(jsonOArray: ITaskDataRow[]) {
        this._dataTasks = [];
        if (jsonOArray.length > 0) {
            for (let j = 0; j < jsonOArray.length; j++) {
                let dataRow: TaskDataRow = new TaskDataRow(jsonOArray[j]);
                let cTask = new Task(dataRow);
                if (!cTask.isCrossPeriod(Calendar.getStartPeriod(), Calendar.getEndPeriod())) {
                    continue;
                }
                this._dataTasks.push(cTask);
            }
        }
        this.sort();
        this.group();
    }

    private sort() {
        let that = this;
        this._dataTasks.sort((a, b) => {
            let aKey = that.makeKey(a);
            let bKey = that.makeKey(b);
            if (aKey < bKey) {
                return -1;
            }
            if (aKey > bKey) {
                return 1;
            }
            return 0;
        });
    }

    public getSize(): number {
        return this._cRows.length;
    }

    public getByIndex(idx: number): CalendarRow | null {
        if ((idx || idx >= 0) && this._cRows.length > 0 && idx < this._cRows.length) {
            return this._cRows[idx];
        }
        return null
    }

    private group() {

        // Create assoc array
        let _map = new KeyValuePairCollection();
        for (let j = 0; j < this._dataTasks.length; j++) {
            let cTask = this._dataTasks[j];
            let key = this.makeKey(cTask);
            if (_map.has(key)) {
                let mapped = _map.get(key) as KeyValuePairCollection;
                mapped.set(mapped.getSize() + 1, cTask);
            } else {
                let newCollection = new KeyValuePairCollection();
                newCollection.set(0, cTask);
                _map.set(key, newCollection);
            }
        }

        // Sort by date inside each group
        for (let i = 0; i < _map.getKeys().length; i++) {
            let value = _map.get(_map.getKeys()[i]);
            value.sort(
                (a: KeyValuePair, b: KeyValuePair) => {
                    let aDate: IMoment = a.getValue().getDataRow().getStart();
                    let bDate: IMoment = b.getValue().getDataRow().getStart();

                    if (aDate.isLT(bDate, 'y-m-d')) {
                        return -1;
                    } else if (aDate.isGT(bDate, 'y-m-d')) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            );
        }

        this._cRows = [];

        // Grouping all tasks by rows 
        for (let k = 0; k < _map.getKeys().length; k++) {
            let kvpc: Array<KeyValuePair> = _map.get(_map.getKeys()[k]).toArray();
            let acTasks: Array<Task> = (_map.get(_map.getKeys()[k]) as KeyValuePairCollection).getValues() as Array<Task>;
            let tmpTasks: Array<Task> = [];
            let i = 0;
            while (true) {
                i++;
                let cRow = new CalendarRow();
                while (acTasks.length > 0) {
                    let item = acTasks.shift();
                    if (!item || typeof (item) == 'undefined') {
                        continue;
                    }

                    let added: boolean = cRow.add(item);
                    if (!added) {
                        tmpTasks.push(item);
                    } else {
                        if (cRow.getTasksCount() > 1) {
                            let prevCT: Task = cRow.getByIndex(cRow.getTasksCount() - 2) as Task; // -2 because we have previous element and current element which one we just added
                            prevCT.setNextRowTaskId(item.getId());
                            item.setPrevRowTaskId(prevCT.getId());
                        }
                    }
                }
                this._cRows.push(cRow);
                if (tmpTasks.length == 0) {
                    break;
                } else {
                    acTasks = tmpTasks;
                    tmpTasks = [];
                }
                if (i == 20) {
                    console.log('i=', i, 'Breaked/ Maximum rows limit detected.');
                    break;
                }
            }
        }

        // console.log(this._cRows);
    }

    private makeKey(dataTask: Task): string {
        return dataTask.getDataRow().getUser() + '_' + dataTask.getDataRow().getType();
    }
}