"use strict";
var CalendarTask = /** @class */ (function () {
    function CalendarTask(_dataRow) {
        this._dataRow = _dataRow;
        this._dates = [];
        this._lasfFoundedDateIndex = -1;
        this._nextRowTaskId = 0;
        this._prevRowTaskId = 0;
        CalendarTask.taskNum++;
        this.fillDates();
    }
    CalendarTask.prototype.getNextRowTaskId = function () {
        return this._nextRowTaskId;
    };
    CalendarTask.prototype.setNextRowTaskId = function (id) {
        this._nextRowTaskId = id;
    };
    CalendarTask.prototype.getPrevRowTaskId = function () {
        return this._prevRowTaskId;
    };
    CalendarTask.prototype.setPrevRowTaskId = function (id) {
        this._prevRowTaskId = id;
    };
    CalendarTask.prototype.getDataRow = function () {
        return this._dataRow;
    };
    CalendarTask.prototype.getId = function () {
        return this._dataRow.getId();
    };
    CalendarTask.prototype.fillDates = function () {
        this._dates = [];
        var dayoffCnt = this._dataRow.getDayoff();
        var duration = this._dataRow.getDuration();
        for (var i = 0; i < duration; i++) {
            var nextDate = this._dataRow.getStart().clone();
            nextDate.add(i, 'days');
            var calDate = new CalendarTaskDate(nextDate);
            if (calDate.getMoment().isDayoff()) {
                if (dayoffCnt > 0) {
                    if (this._dataRow.getDayoffdate()) {
                        var doff = this._dataRow.getDayoffdate();
                        if (doff) {
                            if (doff.isSame(calDate.getMoment(), 'YYYYMMDD')) {
                                dayoffCnt--;
                                this._dates.push(calDate);
                            }
                            else {
                                duration++;
                            }
                        }
                    }
                    else {
                        dayoffCnt--;
                        this._dates.push(calDate);
                    }
                }
                else {
                    duration++;
                }
            }
            else {
                this._dates.push(calDate);
            }
        }
        for (var i = 0; i < this._dates.length; i++) {
            var calDate = this._dates[i];
            calDate.isFirst = false;
            calDate.hasPrev = false;
            calDate.hasNext = false;
            calDate.isLast = false;
            if (i == 0) {
                calDate.isFirst = true;
            }
            if (i == this._dates.length - 1) {
                calDate.isLast = true;
            }
            if (i > 0 && i < this._dates.length - 1) {
                calDate.hasPrev = true;
                calDate.hasNext = true;
            }
            if (i === 0 && i !== this._dates.length - 1) {
                calDate.hasNext = true;
            }
            if (i !== 0 && i === this._dates.length - 1) {
                calDate.hasPrev = true;
            }
        }
        // console.log(this._dates);
        // TODO: use day off as array
        ////-----------------------------------------------------------------------------
        // if (this._dayoff > 0) {
        //     for (let i = 0; i < this._dayoff; i++) {
        //         let doff = moment(this._dayoffdate);
        //         this._dates.push(doff);
        //     }
        // }
    };
    CalendarTask.prototype.isFirst = function () {
        return this._dates.length == 0;
    };
    CalendarTask.prototype.isApplyedToDate = function (date) {
        return this.getCTDate(date) !== null;
    };
    CalendarTask.prototype.getCTDate = function (date) {
        for (var i = 0; i < this._dates.length; i++) {
            var cdt = this._dates[i];
            if (cdt.getMoment().isSame(date, 'y-m-d')) {
                this._lasfFoundedDateIndex = i;
                return cdt;
            }
        }
        this._lasfFoundedDateIndex = -1;
        return null;
    };
    CalendarTask.prototype.getLastDateIndex = function () {
        return this._lasfFoundedDateIndex;
    };
    CalendarTask.prototype.isCrossPeriod = function (periodStart, periodEnd) {
        for (var i = 0; i < this._dates.length; i++) {
            var currentDate = this._dates[i];
            if (currentDate.getMoment().isBetween(periodStart, periodEnd)) {
                return true;
            }
        }
        return false;
    };
    CalendarTask.prototype.getStartDate = function () {
        return this._dates[0].getMoment();
    };
    CalendarTask.prototype.getEndDate = function () {
        return this._dates[this._dates.length - 1].getMoment();
    };
    CalendarTask.taskNum = 0;
    return CalendarTask;
}());
