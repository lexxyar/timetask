/// <reference path="./IVacationDataRow.ts" />
/// <reference path="./../../middleware/moment/IMoment.ts" />
/// <reference path="./../../middleware/moment/Moment.ts" />

class VacationDataRow {
    private _id: string;
    private _user: string;
    private _start: IMoment;
    private _duration: number;

    public constructor(obj: IVacationDataRow) {
        this._id = obj.id;
        this._user = obj.user;
        this._start = new Moment(obj.start);
        this._duration = obj.duration;
    }

    public getId(): string {
        return this._id;
    }
    public getUser(): string {
        return this._user;
    }
    public getStart(): IMoment {
        return this._start;
    }
    public getDuration(): number {
        return this._duration;
    }
}