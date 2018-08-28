/// <reference path="IParallel.ts" />


/**
 * Класс контроллера параллельных задач
 */
class ParallelTask {
    private _tasks: Array<IParallel> = [];
    private _runned: Array<IParallel> = [];
    private _finished: Array<IParallel> = [];
    private _timer: any = null;
    private _lut: Array<string> = [];
    // private _status: Map<string> = {};
    // private _keys: Array<string> = [];
    private _interval: number = 200;

    public constructor(private _onReadyFn: Function) {
        this._lut = [];
        for (let i = 0; i < 256; i++) {
            this._lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
        }
    }
    public setInterval(interval: number): ParallelTask {
        this._interval = interval;
        return this;
    }
    public addTask(task: IParallel): ParallelTask {
        if (task.getId() == '') {
            task.setId(this.guid());
        }
        this._tasks.push(task);
        // this._status[task.getId()] = 'a';
        // this._keys.push(task.getId());
        return this;
    }
    private guid() {
        let d0 = Math.random() * 0xffffffff | 0;
        let d1 = Math.random() * 0xffffffff | 0;
        let d2 = Math.random() * 0xffffffff | 0;
        let d3 = Math.random() * 0xffffffff | 0;
        return this._lut[d0 & 0xff]
            + this._lut[d0 >> 8 & 0xff]
            + this._lut[d0 >> 16 & 0xff]
            + this._lut[d0 >> 24 & 0xff]
            + '-'
            + this._lut[d1 & 0xff]
            + this._lut[d1 >> 8 & 0xff]
            + '-'
            + this._lut[d1 >> 16 & 0x0f | 0x40]
            + this._lut[d1 >> 24 & 0xff]
            + '-'
            + this._lut[d2 & 0x3f | 0x80]
            + this._lut[d2 >> 8 & 0xff]
            + '-'
            + this._lut[d2 >> 16 & 0xff] + this._lut[d2 >> 24 & 0xff]
            + this._lut[d3 & 0xff]
            + this._lut[d3 >> 8 & 0xff]
            + this._lut[d3 >> 16 & 0xff]
            + this._lut[d3 >> 24 & 0xff];
    }
    public run() {
        // console.log('Running...');
        while (this._tasks.length > 0) {
            let task = this._tasks.shift() as IParallel;
            if (!task.isRunned()) {
                task.run();
                this._runned.push(task);
                // this._status[task.getId()] = 'r';
            }
        }
        let that = this;
        this._timer = setInterval(() => { that.checkFinish(); }, this._interval);
    }

    private checkFinish() {
        let _runned: Array<IParallel> = [];
        while (this._runned.length > 0) {
            let task = this._runned.shift() as IParallel;
            if (task.isReady()) {
                this._finished.push(task);
                // this._status[task.getId()] = 'f';
            } else {
                _runned.push(task);
            }
        }
        while (_runned.length > 0) {
            let task = _runned.shift() as IParallel;
            this._runned.push(task);
        }

        if (this._runned.length === 0) {
            clearInterval(this._timer);
            this._onReadyFn.call(this);
        }

        // let log: string = '';
        // for (let i = 0; i < this._keys.length; i++) {
        //     log += '    ' + this._status[this._keys[i]];
        // }
        // console.log(log);
    }
}