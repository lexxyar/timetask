"use strict";
/// <reference path="types.ts" />
var CalendarSettings = /** @class */ (function () {
    function CalendarSettings() {
        this.dataUrl = '';
        this.requestMethod = 'GET';
        this.containerId = '';
        this.rangeType = CalendarRangeType.CurrentDate;
        // public rangeType: CalendarRangeType = 0;
        this.timeRange = TimeRange.Month;
        this.customDateStart = new Moment();
        this.customDateEnd = new Moment();
        this.leftShiftDays = 0;
        this.rightShiftDays = 0;
        this.autoWidthGroup = false;
        this.holidaysDate = [];
        this.extraworkdaysDate = [];
    }
    CalendarSettings.getInstance = function () {
        if (this._instance == null) {
            this._instance = new this();
        }
        return this._instance;
    };
    CalendarSettings._instance = null;
    return CalendarSettings;
}());
