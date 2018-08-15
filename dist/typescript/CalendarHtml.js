"use strict";
/**
 * Helper class for generate HTML objects
 */
var CalendarHtml = /** @class */ (function () {
    function CalendarHtml() {
    }
    /**
     * Create text node
     * @param {string} label
     * @returns {Text}
     */
    CalendarHtml.createText = function (label) {
        return document.createTextNode(label);
    };
    /**
     * Create DIV tag with CSS classes:
     * - row
     * - [row-header]
     *
     * @param {boolean} bHeader
     * @returns {HTMLElement}
     */
    CalendarHtml.createRow = function (bHeader) {
        var div = document.createElement('div');
        div.classList.add('row');
        if (bHeader) {
            div.classList.add('row-header');
        }
        return div;
    };
    /**
     * Create DIV tag for calendar day cell with CSS classes using moment
     * Add CSS classes:
     * - col
     * - day
     * - [day-off]
     * - [now]
     *
     * Fill datasets:
     * - date
     *
     * @param {IMoment} mmt
     * @returns {HTMLElement}
     */
    CalendarHtml.createDay = function (mmt) {
        var day = document.createElement('div');
        day.classList.add('col');
        day.classList.add('day');
        day.dataset.date = mmt.format('y-m-d');
        // if (mmt.isDayoff()) {
        //     // console.log(mmt.format('d'));
        //     day.classList.add('day-off');
        // }
        if (CalendarHtml.isDayoff(mmt)) {
            // console.log(mmt.format('d'));
            day.classList.add('day-off');
        }
        // FIXME: Use mmt instad new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate())
        if ((new Moment())
            .isSame(new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate()), 'YYYYMMDD')) {
            day.classList.add('now');
        }
        return day;
    };
    CalendarHtml.isDayoff = function (mmt) {
        var res = mmt.isDayoff();
        var spec = false;
        var sett = CalendarSettings.getInstance();
        if (sett.holidaysDate.length > 0) {
            for (var i = 0; i < sett.holidaysDate.length; i++) {
                var date = new Moment(sett.holidaysDate[i]);
                spec = false;
                spec = date.isSame(mmt, 'y-m-d');
                // console.log(mmt.format('y-m-d'), date.format('y-m-d'), spec);
                if (spec) {
                    // console.log(mmt.format('y-m-d'));
                    break;
                }
            }
        }
        var hol = spec ? spec : res;
        var extra = false;
        if (sett.extraworkdaysDate.length > 0) {
            for (var i = 0; i < sett.extraworkdaysDate.length; i++) {
                var date = new Moment(sett.extraworkdaysDate[i]);
                extra = false;
                extra = date.isSame(mmt, 'y-m-d');
                if (extra) {
                    break;
                }
            }
        }
        var total = extra ? !extra : hol;
        // console.log('Date:', mmt.format('d.m'), 'Day off:', res, 'Holiday:', spec, 'Extra:', extra, 'Total', total);
        return total;
    };
    /**
     * Create HTML DIV element with CSS classes:
     * - col
     * - day
     * @returns {HTMLElement}
     */
    CalendarHtml.createCell = function () {
        var div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('day');
        return div;
    };
    /**
     * Create SPAN tag with text node for task label
     * @param {string} label
     * @returns {HTMLElement}
     */
    CalendarHtml.createTaskText = function (label) {
        var span = document.createElement('span');
        var text = CalendarHtml.createText(label);
        span.appendChild(text);
        return span;
    };
    /**
     * Create DIV tag with CSS classes for cell with user name and task type values
     * Add CSS classes:
     * - col
     * - group
     *
     * @param {string} label
     * @returns {HTMLElement}
     */
    CalendarHtml.createRowGroup = function (label) {
        if (label === void 0) { label = ''; }
        var div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('group');
        if (label) {
            var text = document.createTextNode(label);
            div.appendChild(text);
        }
        return div;
    };
    return CalendarHtml;
}());
