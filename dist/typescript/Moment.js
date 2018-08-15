"use strict";
// TODO: Create default mask constant
// TODO: Create named list with popular masks
/**
 * Moment
 */
var Moment = /** @class */ (function () {
    /**
     * Class constructor
     *
     * @param {string | Date | number | IMoment} sDate
     * @param {number} month
     * @param {number} date
     * @param {number} hours
     * @param {number} minutes
     * @param {number} seconds
     */
    function Moment(sDate, month, date, hours, minutes, seconds) {
        if (sDate === void 0) { sDate = ''; }
        this.sDate = sDate;
        /**
         * Date storage
         * @type {Date}
         * @private
         */
        this._oDate = new Date();
        if (this.sDate == '' || this.sDate == 'undefined' || this.sDate == null || this.sDate == 'function') {
            this._oDate = new Date(Date.now());
        }
        else {
            var pType = typeof (sDate);
            // console.log(sDate, pType);
            if (pType == 'string') {
                this._oDate = new Date(Date.parse(String(this.sDate)));
            }
            else if (pType == 'object') {
                if (typeof (this.sDate) == 'function') {
                    this._oDate = this.sDate.toDate();
                    this.sDate = this.format('YYYY-MM-DD HH:ii:SS');
                }
                else {
                    this._oDate = this.sDate;
                    this.sDate = this.format('YYYY-MM-DD HH:ii:SS');
                }
            }
            else if (pType == 'number') {
                switch ('undefined') {
                    case typeof (month):
                        month = 0;
                    case typeof (date):
                        date = 1;
                    case typeof (hours):
                        hours = 0;
                    case typeof (minutes):
                        minutes = 0;
                    case typeof (seconds):
                        seconds = 0;
                }
                this._oDate = new Date(Number(sDate), Number(month), date, hours, minutes, seconds, 1);
                this.sDate = this.format('YYYY-MM-DD HH:ii:SS');
            }
        }
    }
    /**
     * Return year
     * @returns {number}
     */
    Moment.prototype.getYear = function () {
        return this._oDate.getFullYear();
    };
    /**
     * Return number of month starting at 0
     * @returns {number}
     */
    Moment.prototype.getMonth = function () {
        return this._oDate.getMonth();
    };
    /**
     * Return date
     * @returns {number}
     */
    Moment.prototype.getDate = function () {
        return this._oDate.getDate();
    };
    /**
     * Return number of day of week
     * @returns {number}
     */
    Moment.prototype.getDay = function () {
        return this._oDate.getDay();
    };
    /**
     * Return TRUE if current day is day off
     * @returns {boolean}
     */
    Moment.prototype.isDayoff = function () {
        return this.getDay() == 0 || this.getDay() == 6;
    };
    /**
     * Make a clone
     * @returns {IMoment}
     */
    Moment.prototype.clone = function () {
        return new Moment(this.sDate);
    };
    /**
     * Set milliseconds
     * @returns {number}
     */
    Moment.prototype.setMilliseconds = function () {
        return this._oDate.getMilliseconds();
    };
    /**
     * Substruct count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - quarter
     * - years
     * - hours
     * - minutes
     * - seconds
     * - miliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    Moment.prototype.subtract = function (count, measure) {
        if (measure === void 0) { measure = 'days'; }
        return this.add(-count, measure);
    };
    /**
     * Add count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - quarters
     * - years
     * - hours
     * - minutes
     * - seconds
     * - miliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    Moment.prototype.add = function (count, measure) {
        if (measure === void 0) { measure = 'days'; }
        if (!count)
            return this;
        switch (measure) {
            case 'days':
                this._oDate.setDate(this._oDate.getDate() + count);
                break;
            case 'weeks':
                this._oDate.setDate(this._oDate.getDate() + (count * 7));
                break;
            case 'months':
                this._oDate.setMonth(this._oDate.getMonth() + count);
                break;
            case 'quarters':
                this._oDate.setMonth(this._oDate.getMonth() + (count * 3));
                break;
            case 'years':
                this._oDate.setFullYear(this._oDate.getFullYear() + count);
                break;
            case 'hours':
                this._oDate.setHours(this._oDate.getHours() + count);
                break;
            case 'minutes':
                this._oDate.setMinutes(this._oDate.getMinutes() + count);
                break;
            case 'seconds':
                this._oDate.setSeconds(this._oDate.getSeconds() + count);
                break;
            case 'milliseconds':
                this._oDate.setMilliseconds(this._oDate.getMilliseconds() + count);
                break;
        }
        this.sDate = this.format('y-m-d h:i:s');
        return this;
    };
    /**
     * Convert number to string of defined length with leading/trailing symbols
     *
     * @param {number} num
     * @param {number} length
     * @param {string} fill
     * @param {boolean} trailing
     * @returns {string}
     */
    Moment.prototype.pad = function (num, length, fill, trailing) {
        if (length === void 0) { length = 2; }
        if (fill === void 0) { fill = '0'; }
        if (trailing === void 0) { trailing = false; }
        var sNum = String(num);
        var sym = fill[0];
        for (var i = 0; i < length - sNum.length; i++) {
            if (trailing) {
                sNum += sym;
            }
            else {
                sNum = sym + sNum;
            }
        }
        return sNum;
    };
    /**
     * Convert date to string using mask
     * @param {string} mask
     * @returns {string}
     */
    Moment.prototype.format = function (mask) {
        // TODO: extend format RegExp
        // console.log(this._oDate);
        return mask.replace(/y{1,4}/gi, this._oDate.getFullYear().toString())
            .replace(/m{1,2}/gi, this.pad(this._oDate.getMonth() + 1))
            .replace(/d{1,2}/gi, this.pad(this._oDate.getDate()))
            .replace(/h{1,2}/gi, this.pad(this._oDate.getHours()))
            .replace(/i{1,2}/gi, this.pad(this._oDate.getMinutes()))
            .replace(/s{1,2}/gi, this.pad(this._oDate.getSeconds()));
    };
    /**
     * Return TRUE if moment is equal by mask
     * By default mask is 'YYYY-MM-DD HH:ii:SS'
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    Moment.prototype.isSame = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        var current = this.format(mask);
        var compare = date.format(mask);
        return current == compare;
    };
    /**
     * Return TRUE if current moment is Great or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    Moment.prototype.isGE = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '>=');
    };
    /**
     * Return TRUE if current moment is Less or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    Moment.prototype.isLE = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '<=');
    };
    /**
     * Return TRUE if current moment is Greater than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    Moment.prototype.isGT = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '>');
    };
    /**
     * Return TRUE if current moment is Lower than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    Moment.prototype.isLT = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '<');
    };
    // FIXME: make union with isSame method
    /**
     * Return TRUE if current moment is Equal to input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    Moment.prototype.isEQ = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '=');
    };
    /**
     * Compare current date with input date using sign
     * Available signs are:
     * - [>]
     * - [<]
     * - [>=]
     * - [<=]
     * - [=] as default
     *
     * @param {IMoment} date
     * @param {string} mask
     * @param {string} sign
     * @returns {boolean}
     */
    Moment.prototype.compare = function (date, mask, sign) {
        if (sign === void 0) { sign = '='; }
        var current = this.format(mask);
        var compare = date.format(mask);
        var currentDate = new Date(Date.parse(current));
        var compareDate = new Date(Date.parse(compare));
        if (sign == '>') {
            return currentDate > compareDate;
        }
        if (sign == '<') {
            return currentDate < compareDate;
        }
        if (sign == '>=') {
            return currentDate >= compareDate;
        }
        if (sign == '<=') {
            return currentDate <= compareDate;
        }
        return currentDate == compareDate;
    };
    /**
     * Return moment which equal to start of period
     * Available units are:
     * - month
     * - workmonth (first working day of month)
     * - quarter
     * - year
     *
     * @param {string} measure
     * @returns {IMoment}
     */
    Moment.prototype.startOf = function (measure) {
        var res = new Moment();
        switch (measure) {
            case 'month':
                res = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                break;
            // FIXME: move out of this method
            // TODO: make extra measurement
            case 'workmonth':
                var mmt = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                res = mmt.clone();
                while (res.isDayoff()) {
                    res.add(1, 'days');
                    if (res.isGT(mmt, 'ym')) {
                        break;
                    }
                }
                break;
            case 'quarter':
                var startMonth = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                var currMonth = startMonth.getMonth();
                var addMonth = currMonth % 3;
                res = startMonth.subtract(addMonth, 'months');
                break;
            case 'year':
                res = new Moment(this._oDate.getFullYear(), 0, 1);
                break;
        }
        return res;
    };
    // TODO: make extra measurement
    /**
     * Return moment which equal to end of period
     * Available measure are:
     * - day    - not supported
     * - week   - not supported
     * - month
     * - quarter
     * - year
     *
     * @param {string} measure
     * @returns {IMoment}
     */
    Moment.prototype.endOf = function (measure) {
        var res = new Moment();
        switch (measure) {
            case 'month':
                res = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth() + 1, 0));
                break;
            case 'quarter':
                var startMonth = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                var currMonth = startMonth.getMonth();
                var addMonth = currMonth % 3;
                var dat = startMonth.add(addMonth, 'months');
                res = new Moment(new Date(dat.getYear(), dat.getMonth() + 1, 0));
                break;
            case 'year':
                res = new Moment(this._oDate.getFullYear(), 11, 31);
                break;
        }
        return res;
    };
    // FIXME: add date format mask
    /**
     * Return TRUE if moment between two dates
     *
     * @param {IMoment} from
     * @param {IMoment} to
     * @returns {boolean}
     */
    Moment.prototype.isBetween = function (from, to) {
        return (this._oDate <= to.toDate() && this._oDate >= from.toDate());
    };
    /**
     * Return Date object
     * @returns {Date}
     */
    Moment.prototype.toDate = function () {
        return this._oDate;
    };
    // TODO: make extra measurement
    /**
     * Return difference between current moment and given moment in units of measure
     * Units of measure are:
     * - [days] by default
     *
     * @param {IMoment} date
     * @param {string} measure
     * @returns {number}
     */
    Moment.prototype.diff = function (date, measure) {
        if (measure === void 0) { measure = 'days'; }
        var timeValues = {
            ms2s: 1000,
            s2i: 60,
            i2h: 60,
            h2d: 24
        };
        var begda = this.clone();
        var endda = date.clone();
        if (measure == 'days') {
            begda = new Moment(this.format('y-m-d'));
            endda = new Moment(date.format('y-m-d'));
        }
        var timeDiff = Math.abs(endda.toDate().getTime() - begda.toDate().getTime());
        var devider = 1;
        switch (measure) {
            case 'days':
                devider = timeValues.ms2s * timeValues.s2i * timeValues.i2h * timeValues.h2d;
                break;
        }
        return Math.ceil(timeDiff / devider);
    };
    /**
     * Return TRUE if it is last day of month
     * @returns {boolean}
     */
    Moment.prototype.isLastDayOfMonth = function () {
        var date = this.clone().endOf('month');
        return this.isSame(date, 'y-m-d');
    };
    /**
     * Return TRUE if it is first day of month
     * @returns {boolean}
     */
    Moment.prototype.isFirstDayOfMonth = function () {
        var date = this.clone().startOf('month');
        return this.isSame(date, 'y-m-d');
    };
    /**
     * Return TRUE if it is first day of month which is not day off
     * @returns {boolean}
     */
    Moment.prototype.isFirstWorkDayOfMonth = function () {
        var date = this.clone().startOf('workmonth');
        return this.isSame(date, 'y-m-d');
    };
    return Moment;
}());
