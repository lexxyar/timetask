/// <reference path="./../middleware/parallel/IParallel.ts" />

class VacationCollection implements IParallel {
    private _ready: boolean;
    private _runned: boolean;
    private _error: boolean;
    private _errMsg: string;
    private _response: any;
    private _onReadyFn: AsyncFetcherCallbackFn | null = null;
    // private _dataTasks: Array<Task> = [];
    // private _cRows: Array<CalendarRow> = [];

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

}