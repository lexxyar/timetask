"use strict";
/**
 * Calendar class
 *
 * Main class, which render calendar UI. This is entery point of calendar application
 */
var Calendar = /** @class */ (function () {
    /**
     * Class constructor
     */
    function Calendar(settings) {
        /**
         * Collection of tasks
         * @type {any}
         * @private
         */
        this._taskCollection = null;
        /**
         * HTML page font size
         * @type {number}
         * @private
         */
        this._htmlFontSize = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('font-size'));
        /**
         * HTML page font family
         * @type {string}
         * @private
         */
        this._htmlFontFamily = window.getComputedStyle(document.querySelector('body')).getPropertyValue('font-family');
        /**
         * First date of month
         * @type {number}
         * @private
         */
        this._monthStart = new Moment().startOf('month').getDate();
        /**
         * Last date of month
         * @type {number}
         * @private
         */
        this._monthEnd = new Moment().endOf('month').getDate();
        /**
         * Current month number (from 0)
         * @type {number}
         * @private
         */
        this._currentMonth = new Moment().getMonth();
        /**
         * Current year
         * @type {number}
         * @private
         */
        this._currentYear = new Moment().getYear();
        this._renderStartTime = new Moment();
        this._renderEndTime = new Moment();
        this._maxUserName = 0;
        this._maxTaskType = 0;
        this._events = new KeyValuePairCollection();
        this._events.set('taskclick', null);
        this._events.set('taskremove', null);
        // Find container for calendar
        this._div = document.querySelector(settings.containerId);
        // document.addEventListener("DOMContentLoaded", ()=>{
        //     this.loadUrl();
        // });
        this.loadUrl();
    }
    /**
     * Return start date for calendar
     * @returns {IMoment}
     */
    Calendar.getStartPeriod = function () {
        var sett = CalendarSettings.getInstance();
        var ret = new Moment();
        if (sett.rangeType == CalendarRangeType.CurrentDate) {
            if (sett.timeRange == TimeRange.TimeLine) {
            }
            else {
                ret = new Moment().startOf(String(sett.timeRange));
            }
        }
        else if (sett.rangeType == CalendarRangeType.Custom) {
            ret = sett.customDateStart;
        }
        if (sett.leftShiftDays > 0) {
            ret.subtract(sett.leftShiftDays, 'days');
        }
        return ret;
    };
    /**
     * Return end date for calendar
     * @returns {IMoment}
     */
    Calendar.getEndPeriod = function () {
        var sett = CalendarSettings.getInstance();
        var ret = new Moment();
        if (sett.rangeType == CalendarRangeType.CurrentDate) {
            if (sett.timeRange == TimeRange.TimeLine) {
            }
            else {
                ret = new Moment().endOf(String(sett.timeRange));
            }
        }
        else if (sett.rangeType == CalendarRangeType.Custom) {
            ret = sett.customDateEnd;
        }
        if (sett.rightShiftDays > 0) {
            ret.add(sett.rightShiftDays, 'days');
        }
        return ret;
    };
    Calendar.prototype.on = function (eventName, callbackFn) {
        this._events.set(eventName, callbackFn);
    };
    /**
     * Loading data to calendar
     * @param data
     * @returns {Calendar}
     * @deprecated
     */
    Calendar.prototype.setData = function (data) {
        this._taskCollection = new CalendarTaskCollection();
        this._taskCollection.loadArray(data);
        return this;
    };
    Calendar.prototype.loadUrl = function () {
        var _this = this;
        this._taskCollection = new CalendarTaskCollection();
        this._taskCollection.loadUrl(function () { return _this.render(); });
    };
    /**
     * Rerender calendar
     */
    Calendar.prototype.refresh = function () {
        this.render();
    };
    Calendar.prototype.calculateGroupLabelMaxWidth = function () {
        var usersName = new KeyValuePairCollection();
        var tasksType = new KeyValuePairCollection();
        usersName.set('User', this.getTextLengthInPixels('User'));
        tasksType.set('Task type', this.getTextLengthInPixels('Task type'));
        if (this._taskCollection == null) {
            return;
        }
        for (var j = 0; j < this._taskCollection.getSize(); j++) {
            var cRow = this._taskCollection.getByIndex(j);
            if (!cRow) {
                continue;
            }
            usersName.set(cRow.getUser(), Math.ceil(this.getTextLengthInPixels(cRow.getUser())));
            tasksType.set(cRow.getType(), Math.ceil(this.getTextLengthInPixels(cRow.getType())));
        }
        usersName.sort(function (a, b) {
            var aVal = a.getValue();
            var bVal = b.getValue();
            if (aVal < bVal) {
                return -1;
            }
            else if (aVal > bVal) {
                return 1;
            }
            else {
                return 0;
            }
        });
        tasksType.sort(function (a, b) {
            var aVal = a.getValue();
            var bVal = b.getValue();
            if (aVal < bVal) {
                return -1;
            }
            else if (aVal > bVal) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this._maxUserName = usersName.getValues().pop();
        this._maxTaskType = tasksType.getValues().pop();
    };
    Calendar.prototype.removeTask = function (id) {
        var tasks = document.querySelectorAll('div.task[data-task-id="' + String(id) + '"');
        for (var i = 0; i < tasks.length; i++) {
            var div = tasks[i];
            var cssClasses = div.classList.toString().split(/\s+/);
            for (var j = 0; j < cssClasses.length; j++) {
                if (cssClasses[j].toLowerCase() == 'col' || cssClasses[j].toLowerCase() == 'day' || cssClasses[j].toLowerCase() == 'now') {
                    continue;
                }
                div.classList.remove(cssClasses[j]);
            }
            var attrs = [];
            for (var j = 0; j < div.attributes.length; j++) {
                var attr = div.attributes[j];
                if (/^data-/.test(attr.nodeName)) {
                    attrs.push(attr.nodeName);
                }
            }
            for (var j = 0; j < attrs.length; j++) {
                div.removeAttribute(attrs[j]);
            }
            div.innerHTML = "";
        }
        var callbackFn = this._events.get('taskremove');
        if (callbackFn) {
            callbackFn(id);
        }
    };
    /**
     * Rendering calendar UI
     */
    Calendar.prototype.render = function () {
        // console.log(this._htmlFontSize + 'px ' + this._htmlFontFamily);
        this._renderStartTime = new Moment();
        // Make header
        var row;
        // Get start of calendars period
        var startMmt = Calendar.getStartPeriod();
        // Get end of calendars period
        var endMmt = Calendar.getEndPeriod();
        // Calculate count of days in period
        var diffDays = endMmt.diff(startMmt) + 1;
        var label;
        var sett = CalendarSettings.getInstance();
        if (sett.autoWidthGroup) {
            this.calculateGroupLabelMaxWidth();
        }
        // Create wrapper for calendar
        var cWrapper = document.createElement('div');
        cWrapper.classList.add('task-calendar');
        // Create month names
        row = CalendarHtml.createRow(true);
        row.classList.add('month-header');
        label = CalendarHtml.createRowGroup();
        label.classList.add('group-user');
        row.appendChild(label);
        label = CalendarHtml.createRowGroup();
        label.classList.add('group-type');
        row.appendChild(label);
        this.generateDateRange(row, startMmt, diffDays, true);
        cWrapper.appendChild(row);
        // Create date header
        row = CalendarHtml.createRow(true);
        row.classList.add('date-header');
        label = CalendarHtml.createRowGroup('User');
        row.appendChild(label);
        label = CalendarHtml.createRowGroup('Task type');
        row.appendChild(label);
        // Create period dates
        this.generateDateRange(row, startMmt, diffDays);
        cWrapper.appendChild(row);
        // Check if data loaded
        if (!this._taskCollection) {
            console.log('Data not loaded. Use method "setData" before render');
            // throw new Exep
            return;
        }
        // Check, if we have data
        if (this._taskCollection.getSize() > 0) {
            // Create variable for trace user name changing
            var prevUser = '';
            // Loop at data and create rows for UI
            for (var j = 0; j < this._taskCollection.getSize(); j++) {
                var cRow = this._taskCollection.getByIndex(j);
                if (!cRow) {
                    continue;
                }
                // Create row tag
                var row_1 = CalendarHtml.createRow();
                // Add CSS class if user name has change
                if (prevUser && prevUser !== cRow.getUser()) {
                    row_1.classList.add('row-block-start');
                }
                prevUser = cRow.getUser();
                // Create cell with user name
                var label_1 = CalendarHtml.createRowGroup(cRow.getUser());
                if (sett.autoWidthGroup) {
                    label_1.classList.add('value-width-auto');
                    label_1.classList.add('value-width-' + String(this._maxUserName));
                }
                row_1.appendChild(label_1);
                // Create cell with task type
                label_1 = CalendarHtml.createRowGroup(cRow.getType());
                if (sett.autoWidthGroup) {
                    label_1.classList.add('value-width-auto');
                    label_1.classList.add('value-width-' + String(this._maxTaskType));
                }
                row_1.appendChild(label_1);
                var _loop_1 = function (i) {
                    // Create moment of current iteration
                    var mmt = startMmt.clone().add(i);
                    // Create cell with simple day
                    var day = CalendarHtml.createDay(mmt);
                    // Adding CSS classes and check if it first day of month
                    var firstDayOfMonth = this_1.addDayData(day, mmt, i, diffDays);
                    // Check if it first work day
                    var firstWorkDayOfMonth = mmt.isFirstWorkDayOfMonth();
                    // Get task on current date
                    var task = cRow.getTaskOnDate(mmt);
                    if (task) {
                        // Get calendar task date
                        var calDate = task.getCTDate(mmt);
                        if (calDate) {
                            // Render date from data
                            calDate.render(day, task.getId());
                            var callbackFn_1 = this_1._events.get('taskclick');
                            if (callbackFn_1) {
                                day.addEventListener('click', function (e) {
                                    var elem = e.target;
                                    if (elem.tagName.toLowerCase() == 'span') {
                                        elem = elem.parentNode;
                                    }
                                    callbackFn_1(elem);
                                }, false);
                            }
                            // Create local vars
                            var idx = task.getLastDateIndex();
                            var duration = task.getDataRow().getDuration();
                            var firstDateOfMonth = mmt.startOf('month');
                            var lastDateOfMonth = mmt.endOf('month');
                            var tillEndOfMonth = lastDateOfMonth.diff(mmt);
                            // console.log(lastDateOfMonth.format('m-d'), mmt.format('m-d'), tillEndOfMonth);
                            var tillStartOfMonth = firstDateOfMonth.diff(mmt);
                            var tillEndOfPeriod = endMmt.diff(mmt);
                            var tillStartOfPeriod = startMmt.diff(mmt);
                            var daysLeft = (idx >= 0) ? (duration - idx - 1) : 365;
                            var daysSpent = (idx >= 0) ? (idx + 1) : 0;
                            var spaceToNextTask = cRow.getSpaseToNextTask(mmt);
                            var daysInTask = task.getEndDate().diff(task.getStartDate()) + 1;
                            var textWidth = this_1.getLabelLengthInDays(task.getDataRow().getLabel());
                            var prevRowTaskId = task.getPrevRowTaskId();
                            var nextRowTaskId = task.getNextRowTaskId();
                            var isStartPeriod = calDate.getMoment().isSame(Calendar.getStartPeriod(), 'y-m-d');
                            // Create corresponding values in dataset
                            day.dataset.taskDuration = String(duration);
                            day.dataset.taskTillEndOfMonth = String(tillEndOfMonth);
                            day.dataset.taskTillStartOfMonth = String(tillStartOfMonth);
                            day.dataset.taskTillEndOfPeriod = String(tillEndOfPeriod);
                            day.dataset.taskTillStartOfPeriod = String(tillStartOfPeriod);
                            day.dataset.taskSpaceToNextTask = String(spaceToNextTask);
                            day.dataset.daysInTask = String(daysInTask);
                            if (prevRowTaskId) {
                                day.dataset.prevRowTaskId = String(prevRowTaskId);
                            }
                            if (nextRowTaskId) {
                                day.dataset.nextRowTaskId = String(nextRowTaskId);
                            }
                            if (idx >= 0) {
                                day.dataset.taskDaysLeft = String(daysLeft);
                                day.dataset.taskDaysSpent = String(daysSpent);
                            }
                            // Add label to first day of task or to first day of period/month,
                            // if task start is outside of it
                            if (calDate.isFirst || (!calDate.isFirst && firstWorkDayOfMonth) || (!calDate.isFirst && isStartPeriod)) {
                                // Add CSS class to task whitch contain task label
                                day.classList.add('labeled');
                                // Lets calculate label length
                                // Label should not cross other label and should not be outside month or period
                                // To check it wi get minimum between:
                                // * spaceToNextTask        days count between current and next tasks start dates
                                // * tillEndOfMonth + 1     +1 because we should count current day too
                                // * tillEndOfPeriod + 1    +1 because we should count current day too
                                // * textWidth              label width
                                var labelLength = this_1.getMinNumber([spaceToNextTask, tillEndOfMonth + 1, tillEndOfPeriod + 1, textWidth]);
                                // Get date where last label symbol is
                                var labelEndDate = mmt.clone().add(labelLength - 1);
                                // Create task label HTML element
                                var span = CalendarHtml.createTaskText(task.getDataRow().getLabel());
                                // Add some CSS classes
                                span.classList.add('task-label');
                                span.classList.add('task-label-length-' + String(labelLength));
                                // Add extra CSS class to label element, which text is longer that days count till end of month/period or next task start date
                                if (textWidth > labelLength) {
                                    if (task.isApplyedToDate(labelEndDate)) {
                                        span.classList.add('end-task');
                                    }
                                    else if (labelEndDate.isDayoff()) {
                                        span.classList.add('end-dayoff');
                                    }
                                    else if (labelLength == spaceToNextTask || labelLength == tillEndOfPeriod + 1) {
                                        span.classList.add('end-day');
                                    }
                                }
                                day.appendChild(span);
                            }
                        }
                    }
                    // If it first day of month, add gap between monthes
                    if (firstDayOfMonth && i != 0) {
                        var monthBreak = CalendarHtml.createCell();
                        monthBreak.classList.add('month-break');
                        row_1.appendChild(monthBreak);
                    }
                    row_1.appendChild(day);
                };
                var this_1 = this;
                // Loop at all dates in period
                for (var i = 0; i < diffDays; i++) {
                    _loop_1(i);
                }
                cWrapper.appendChild(row_1);
            }
        }
        this._div.appendChild(cWrapper);
        this._renderEndTime = new Moment();
        console.log('rendered in', this._renderEndTime.toDate().getTime() - this._renderStartTime.toDate().getTime());
    };
    /**
     * Return minimum from input numbers array
     * @param {Array<number>} inputs
     * @returns {number}
     */
    Calendar.prototype.getMinNumber = function (inputs) {
        return this.getMinMaxNumber(inputs, true);
    };
    /**
     * Return maximum from input numbers array
     * @param {Array<number>} inputs
     * @returns {number}
     */
    Calendar.prototype.getMaxNumber = function (inputs) {
        return this.getMinMaxNumber(inputs);
    };
    /**
     * Return minimum/maximum from input numbers array
     * @param {Array<number>} inputs
     * @param {boolean} min
     * @returns {number}
     */
    Calendar.prototype.getMinMaxNumber = function (inputs, min) {
        if (min === void 0) { min = false; }
        inputs.sort(function (a, b) {
            return a - b;
        });
        if (min) {
            return inputs.shift();
        }
        else {
            return inputs.pop();
        }
    };
    /**
     * Generate date range
     * @param {HTMLElement} row
     * @param {IMoment} startMmt
     * @param {number} diffDays
     * @param {boolean} asCell
     */
    Calendar.prototype.generateDateRange = function (row, startMmt, diffDays, asCell) {
        if (asCell === void 0) { asCell = false; }
        // Loop for all days in period
        for (var i = 0; i < diffDays; i++) {
            // Create date on each day
            var mmt = startMmt.clone().add(i);
            var day = void 0;
            if (asCell) {
                day = CalendarHtml.createCell();
            }
            else {
                day = CalendarHtml.createDay(mmt);
                var label = CalendarHtml.createText(mmt.format('d'));
                day.appendChild(label);
            }
            var firstDayOfMonth = this.addDayData(day, mmt, i, diffDays);
            // If it first day of month add gap
            if (firstDayOfMonth && i != 0) {
                var monthBreak = CalendarHtml.createCell();
                monthBreak.classList.add('month-break');
                row.appendChild(monthBreak);
            }
            if (firstDayOfMonth || i == 0) {
                if (asCell) {
                    var monthName = mmt.toDate().toLocaleString('ru-RU', { month: 'long' });
                    var label = CalendarHtml.createText(monthName.charAt(0).toUpperCase() + monthName.slice(1));
                    day.appendChild(label);
                }
            }
            row.appendChild(day);
        }
    };
    /**
     * Add data to HTML day
     * @param {HTMLElement} day
     * @param {IMoment} mmt
     * @param {number} i
     * @param {number} diffDays
     * @returns {boolean}
     */
    Calendar.prototype.addDayData = function (day, mmt, i, diffDays) {
        // Create moment of first and last date of month
        var firstDayOfMonth = mmt.isFirstDayOfMonth();
        var lastDayOfMonth = mmt.isLastDayOfMonth();
        // If start of period
        if (i == 0) {
            var endOfMonth = mmt.clone().endOf('month');
            var len = mmt.diff(endOfMonth) + 1;
            day.classList.add('period-start');
            day.classList.add('cell-span-' + String(len));
            day.dataset.monthLength = String(len);
        }
        // If it is end of period
        if (i == diffDays - 1) {
            day.classList.add('period-end');
        }
        // It it is first day of month
        if (firstDayOfMonth) {
            day.classList.add('month-start');
        }
        // If it is last day of month
        if (lastDayOfMonth) {
            day.classList.add('month-end');
        }
        return firstDayOfMonth;
    };
    Calendar.prototype.getTextLengthInPixels = function (text) {
        // Create canvas
        var canvas = document.createElement('canvas');
        // Get 2D context
        var ctx = canvas.getContext('2d');
        // Set font size and font family
        ctx.font = this._htmlFontSize + 'px ' + this._htmlFontFamily;
        // Get text length in pixels
        var w = ctx.measureText(text).width;
        return w;
    };
    /**
     * Calculate and return label length
     * @param {string} text
     * @returns {number}
     */
    Calendar.prototype.getLabelLengthInDays = function (text) {
        // // Get text length in pixels
        var w = this.getTextLengthInPixels(text);
        // FIXME: 1.7 is $day-cell-width in app.scss. Move it to calendar settings
        // Calculate text length in calendar days
        w = w / (this._htmlFontSize * 1.7);
        // Round up
        w = Math.ceil(w);
        return w;
    };
    return Calendar;
}());
