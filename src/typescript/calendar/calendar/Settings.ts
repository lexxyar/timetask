/// <reference path="./../misc/types.ts" />


class Settings {
    public taskDataUrl: string = '';
    public vacationDataUrl: string = '';
    public requestMethod: string = 'GET';
    public containerId: string = '';
    public rangeType: CalendarRangeType = CalendarRangeType.CurrentDate;
    // public rangeType: CalendarRangeType = 0;
    public timeRange: TimeRange = TimeRange.Month;
    public customDateStart: IMoment = new Moment();
    public customDateEnd: IMoment = new Moment();
    public leftShiftDays:number = 0;
    public rightShiftDays:number = 0;
    public autoWidthGroup:boolean = false;
    public holidaysDate:Array<string> = [];
    public extraworkdaysDate:Array<string> = [];


    private static _instance: Settings | null = null;
    public static getInstance():Settings {
        if (this._instance == null) {
            this._instance = new this();
        }
        return this._instance;
    }
    public constructor() {

    }
}