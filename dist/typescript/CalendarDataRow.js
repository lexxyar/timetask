"use strict";
/**
 * Class of calendar data row description
 */
var CalendarDataRow = /** @class */ (function () {
    /**
     * Class constructor
     *
     * @param {IDataRow} obj Input row with data, which compare with IDataRow interface
     */
    function CalendarDataRow(obj) {
        this._id = obj.id;
        this._user = obj.user;
        this._type = obj.type;
        // Make Moment from date
        this._start = new Moment(obj.start);
        this._duration = obj.duration;
        this._label = obj.label;
        this._dayoff = obj.dayoff;
        this._dayoffdate = null;
        // If we have day offs
        if (this._dayoff) {
            // Lets check on day off date declaration
            if (obj.dayoffdate) {
                // Make Moment from date
                this._dayoffdate = new Moment(obj.dayoffdate);
            }
        }
    }
    /**
     * Return row ID
     * @returns {TDataId}
     */
    CalendarDataRow.prototype.getId = function () {
        return this._id;
    };
    /**
     * Return user name
     * @returns {string}
     */
    CalendarDataRow.prototype.getUser = function () {
        return this._user;
    };
    /**
     * Return task type
     * @returns {string}
     */
    CalendarDataRow.prototype.getType = function () {
        return this._type;
    };
    /**
     * Return task start date
     * @returns {IMoment}
     */
    CalendarDataRow.prototype.getStart = function () {
        return this._start;
    };
    /**
     * Return task duration
     * @returns {number}
     */
    CalendarDataRow.prototype.getDuration = function () {
        return this._duration;
    };
    /**
     * Return task label
     * @returns {string}
     */
    CalendarDataRow.prototype.getLabel = function () {
        return this._label;
    };
    /**
     * Return day off count
     * @returns {number}
     */
    CalendarDataRow.prototype.getDayoff = function () {
        return this._dayoff;
    };
    /**
     * Return day off date
     * @returns {IMoment}
     */
    CalendarDataRow.prototype.getDayoffdate = function () {
        return this._dayoffdate;
    };
    return CalendarDataRow;
}());
