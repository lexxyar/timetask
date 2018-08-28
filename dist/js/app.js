"use strict";
var TimeRange;
(function (TimeRange) {
    TimeRange["Year"] = "year";
    TimeRange["Quarter"] = "quarter";
    TimeRange["Month"] = "month";
    TimeRange["Week"] = "week";
    TimeRange[TimeRange["TimeLine"] = 0] = "TimeLine";
})(TimeRange || (TimeRange = {}));
;
var CalendarRangeType;
(function (CalendarRangeType) {
    CalendarRangeType[CalendarRangeType["CurrentDate"] = 0] = "CurrentDate";
    CalendarRangeType[CalendarRangeType["Custom"] = 1] = "Custom";
})(CalendarRangeType || (CalendarRangeType = {}));
var Settings = (function () {
    function Settings() {
        this.taskDataUrl = '';
        this.vacationDataUrl = '';
        this.requestMethod = 'GET';
        this.containerId = '';
        this.rangeType = CalendarRangeType.CurrentDate;
        this.timeRange = TimeRange.Month;
        this.customDateStart = new Moment();
        this.customDateEnd = new Moment();
        this.leftShiftDays = 0;
        this.rightShiftDays = 0;
        this.autoWidthGroup = false;
        this.holidaysDate = [];
        this.extraworkdaysDate = [];
    }
    Settings.getInstance = function () {
        if (this._instance == null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Settings._instance = null;
    return Settings;
}());
var KeyValuePair = (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValuePair.prototype.getKey = function () {
        return this.key;
    };
    KeyValuePair.prototype.setKey = function (k) {
        this.key = k;
    };
    KeyValuePair.prototype.getValue = function () {
        return this.value;
    };
    KeyValuePair.prototype.setValue = function (v) {
        this.value = v;
    };
    return KeyValuePair;
}());
var KeyValuePairCollection = (function () {
    function KeyValuePairCollection() {
        this._data = [];
    }
    KeyValuePairCollection.prototype.getSize = function () {
        return this._data.length;
    };
    KeyValuePairCollection.prototype.get = function (key) {
        var idx = this.findKeyIndex(key);
        if (idx === false) {
            return null;
        }
        return this._data[idx].getValue();
    };
    KeyValuePairCollection.prototype.set = function (key, value) {
        var idx = this.findKeyIndex(key);
        var data = new KeyValuePair(key, value);
        if (idx === false) {
            this._data.push(data);
        }
        else {
            this._data[idx] = data;
        }
    };
    KeyValuePairCollection.prototype.getKeys = function () {
        var keys = [];
        if (this.getSize() >= 0) {
            for (var i = 0; i < this.getSize(); i++) {
                keys.push(this._data[i].getKey());
            }
        }
        return keys;
    };
    KeyValuePairCollection.prototype.getValues = function () {
        var values = [];
        if (this.getSize() >= 0) {
            for (var i = 0; i < this.getSize(); i++) {
                values.push(this._data[i].getValue());
            }
        }
        return values;
    };
    KeyValuePairCollection.prototype.sortByKeys = function () {
        this._data.sort(function (a, b) {
            var aKey = a.getKey();
            var bKey = b.getKey();
            if (aKey < bKey) {
                return -1;
            }
            if (aKey > bKey) {
                return 1;
            }
            return 0;
        });
    };
    KeyValuePairCollection.prototype.sort = function (callbackFn) {
        if (!callbackFn) {
            this._data.sort(function (a, b) {
                var aKey = a.getValue();
                var bKey = b.getValue();
                if (aKey < bKey) {
                    return -1;
                }
                if (aKey > bKey) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            this._data.sort(callbackFn);
        }
    };
    KeyValuePairCollection.prototype.has = function (key) {
        return this.findKeyIndex(key) !== false;
    };
    KeyValuePairCollection.prototype.findKeyIndex = function (key) {
        if (this.getSize() < 0)
            return false;
        for (var i = 0; i < this.getSize(); i++) {
            var kv = this._data[i];
            if (kv.getKey() == key) {
                return i;
            }
        }
        return false;
    };
    KeyValuePairCollection.prototype.toArray = function () {
        return this._data;
    };
    return KeyValuePairCollection;
}());
var TaskDate = (function () {
    function TaskDate(_date) {
        this._date = _date;
        this.hasNext = false;
        this.hasPrev = false;
        this.isFirst = false;
        this.isLast = false;
    }
    TaskDate.prototype.getMoment = function () {
        return this._date;
    };
    TaskDate.prototype.render = function (day, taskId) {
        var _this = this;
        day.classList.add('task');
        day.dataset.taskId = String(taskId);
        day.classList.add('task-' + taskId);
        day.addEventListener('mouseenter', function (event) {
            _this.mouseEvent(event, 'mouseenter');
        }, false);
        day.addEventListener('mouseleave', function (event) {
            _this.mouseEvent(event, 'mouseleave');
        }, false);
        if (this.isFirst) {
            day.classList.add('task-start');
        }
        if (this.isLast) {
            day.classList.add('task-end');
        }
        if (this.hasNext) {
            day.classList.add('task-has-next');
        }
        if (this.hasPrev) {
            day.classList.add('task-hasprev');
        }
    };
    TaskDate.prototype.mouseEvent = function (event, eventName) {
        event.preventDefault();
        var trg = event.target;
        var dta = trg.dataset.taskId;
        var els = document.querySelectorAll('div[data-task-id="' + dta + '"]');
        for (var i = 0; i < els.length; i++) {
            if (eventName == 'mouseleave') {
                els[i].classList.remove('task-hover');
            }
            else if (eventName == 'mouseenter') {
                els[i].classList.add('task-hover');
            }
        }
    };
    return TaskDate;
}());
var Task = (function () {
    function Task(_dataRow) {
        this._dataRow = _dataRow;
        this._dates = [];
        this._lasfFoundedDateIndex = -1;
        this._nextRowTaskId = 0;
        this._prevRowTaskId = 0;
        Task.taskNum++;
        this.fillDates();
    }
    Task.prototype.getNextRowTaskId = function () {
        return this._nextRowTaskId;
    };
    Task.prototype.setNextRowTaskId = function (id) {
        this._nextRowTaskId = id;
    };
    Task.prototype.getPrevRowTaskId = function () {
        return this._prevRowTaskId;
    };
    Task.prototype.setPrevRowTaskId = function (id) {
        this._prevRowTaskId = id;
    };
    Task.prototype.getDataRow = function () {
        return this._dataRow;
    };
    Task.prototype.getId = function () {
        return this._dataRow.getId();
    };
    Task.prototype.fillDates = function () {
        this._dates = [];
        var dayoffCnt = this._dataRow.getDayoff();
        var duration = this._dataRow.getDuration();
        for (var i = 0; i < duration; i++) {
            var nextDate = this._dataRow.getStart().clone();
            nextDate.add(i, 'days');
            var calDate = new TaskDate(nextDate);
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
    };
    Task.prototype.isFirst = function () {
        return this._dates.length == 0;
    };
    Task.prototype.isApplyedToDate = function (date) {
        return this.getCTDate(date) !== null;
    };
    Task.prototype.getCTDate = function (date) {
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
    Task.prototype.getLastDateIndex = function () {
        return this._lasfFoundedDateIndex;
    };
    Task.prototype.isCrossPeriod = function (periodStart, periodEnd) {
        for (var i = 0; i < this._dates.length; i++) {
            var currentDate = this._dates[i];
            if (currentDate.getMoment().isBetween(periodStart, periodEnd)) {
                return true;
            }
        }
        return false;
    };
    Task.prototype.getStartDate = function () {
        return this._dates[0].getMoment();
    };
    Task.prototype.getEndDate = function () {
        return this._dates[this._dates.length - 1].getMoment();
    };
    Task.taskNum = 0;
    return Task;
}());
var CalendarRow = (function () {
    function CalendarRow() {
        this._user = '';
        this._type = '';
        this._tasks = [];
    }
    CalendarRow.prototype.getUser = function () {
        return this._user;
    };
    CalendarRow.prototype.getType = function () {
        return this._type;
    };
    CalendarRow.prototype.add = function (task) {
        this._user = task.getDataRow().getUser();
        this._type = task.getDataRow().getType();
        if (this._tasks.length > 0) {
            var lastTask = this._tasks[this._tasks.length - 1];
            var diff = lastTask.getEndDate().diff(task.getStartDate());
            if (diff <= 1 || lastTask.getEndDate().toDate() > task.getStartDate().toDate()) {
                return false;
            }
        }
        this._tasks.push(task);
        return true;
    };
    CalendarRow.prototype.getTaskOnDate = function (date) {
        if (this._tasks.length > 0) {
            for (var i = 0; i < this._tasks.length; i++) {
                var task = this._tasks[i];
                if (task.isApplyedToDate(date)) {
                    return task;
                }
            }
        }
        return null;
    };
    CalendarRow.prototype.getTasksCount = function () {
        return this._tasks.length;
    };
    CalendarRow.prototype.getByIndex = function (idx) {
        if (idx >= this._tasks.length || idx < 0) {
            return null;
        }
        return this._tasks[idx];
    };
    CalendarRow.prototype.getNextTask = function (currentTask) {
        var currentLast = currentTask.getEndDate();
        if (this._tasks.length > 0) {
            for (var i = 0; i < this._tasks.length; i++) {
                var task = this._tasks[i];
                var taskStart = task.getStartDate();
                if (currentLast.isLT(taskStart, 'y-m-d')) {
                    return task;
                }
            }
        }
        return null;
    };
    CalendarRow.prototype.getSpaseToNextTask = function (mmt) {
        var currentTask = this.getTaskOnDate(mmt);
        if (!currentTask) {
            return 365;
        }
        var nextTask = this.getNextTask(currentTask);
        if (!nextTask) {
            return 365;
        }
        return mmt.diff(nextTask.getStartDate()) - 1;
    };
    return CalendarRow;
}());
var TaskDataRow = (function () {
    function TaskDataRow(obj) {
        this._id = obj.id;
        this._user = obj.user;
        this._type = obj.type;
        this._start = new Moment(obj.start);
        this._duration = obj.duration;
        this._label = obj.label;
        this._dayoff = obj.dayoff;
        this._dayoffdate = null;
        if (this._dayoff) {
            if (obj.dayoffdate) {
                this._dayoffdate = new Moment(obj.dayoffdate);
            }
        }
    }
    TaskDataRow.prototype.getId = function () {
        return this._id;
    };
    TaskDataRow.prototype.getUser = function () {
        return this._user;
    };
    TaskDataRow.prototype.getType = function () {
        return this._type;
    };
    TaskDataRow.prototype.getStart = function () {
        return this._start;
    };
    TaskDataRow.prototype.getDuration = function () {
        return this._duration;
    };
    TaskDataRow.prototype.getLabel = function () {
        return this._label;
    };
    TaskDataRow.prototype.getDayoff = function () {
        return this._dayoff;
    };
    TaskDataRow.prototype.getDayoffdate = function () {
        return this._dayoffdate;
    };
    return TaskDataRow;
}());
var TaskCollection = (function () {
    function TaskCollection(_url, _id) {
        if (_id === void 0) { _id = ''; }
        this._url = _url;
        this._id = _id;
        this._onReadyFn = null;
        this._dataTasks = [];
        this._cRows = [];
        this._ready = false;
        this._runned = false;
        this._error = false;
        this._errMsg = '';
    }
    TaskCollection.prototype.run = function () {
        this._runned = true;
        this.fetchData();
    };
    TaskCollection.prototype.isReady = function () {
        return this._ready;
    };
    TaskCollection.prototype.isRunned = function () {
        return this._runned;
    };
    TaskCollection.prototype.getId = function () {
        return this._id;
    };
    TaskCollection.prototype.setId = function (id) {
        this._id = id;
    };
    TaskCollection.prototype.getResult = function () {
        return this._response;
    };
    TaskCollection.prototype.onReady = function (callbackFn) {
        if (callbackFn !== null) {
            this._onReadyFn = callbackFn;
        }
        return this;
    };
    TaskCollection.prototype.fetchData = function () {
        var sett = Settings.getInstance();
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.open(sett.requestMethod, this._url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    that._response = respJson;
                    that._runned = false;
                    that._ready = true;
                    that.loadArray(respJson);
                    if (that._onReadyFn) {
                        that._onReadyFn.call(this, respJson);
                    }
                }
                else {
                    that._runned = false;
                    that._ready = true;
                    that._error = true;
                    that._errMsg = 'Send request error';
                }
            }
            else {
            }
        };
    };
    TaskCollection.prototype.loadArray = function (jsonOArray) {
        this._dataTasks = [];
        if (jsonOArray.length > 0) {
            for (var j = 0; j < jsonOArray.length; j++) {
                var dataRow = new TaskDataRow(jsonOArray[j]);
                var cTask = new Task(dataRow);
                if (!cTask.isCrossPeriod(Calendar.getStartPeriod(), Calendar.getEndPeriod())) {
                    continue;
                }
                this._dataTasks.push(cTask);
            }
        }
        this.sort();
        this.group();
    };
    TaskCollection.prototype.sort = function () {
        var that = this;
        this._dataTasks.sort(function (a, b) {
            var aKey = that.makeKey(a);
            var bKey = that.makeKey(b);
            if (aKey < bKey) {
                return -1;
            }
            if (aKey > bKey) {
                return 1;
            }
            return 0;
        });
    };
    TaskCollection.prototype.getSize = function () {
        return this._cRows.length;
    };
    TaskCollection.prototype.getByIndex = function (idx) {
        if ((idx || idx >= 0) && this._cRows.length > 0 && idx < this._cRows.length) {
            return this._cRows[idx];
        }
        return null;
    };
    TaskCollection.prototype.group = function () {
        var _map = new KeyValuePairCollection();
        for (var j = 0; j < this._dataTasks.length; j++) {
            var cTask = this._dataTasks[j];
            var key = this.makeKey(cTask);
            if (_map.has(key)) {
                var mapped = _map.get(key);
                mapped.set(mapped.getSize() + 1, cTask);
            }
            else {
                var newCollection = new KeyValuePairCollection();
                newCollection.set(0, cTask);
                _map.set(key, newCollection);
            }
        }
        for (var i = 0; i < _map.getKeys().length; i++) {
            var value = _map.get(_map.getKeys()[i]);
            value.sort(function (a, b) {
                var aDate = a.getValue().getDataRow().getStart();
                var bDate = b.getValue().getDataRow().getStart();
                if (aDate.isLT(bDate, 'y-m-d')) {
                    return -1;
                }
                else if (aDate.isGT(bDate, 'y-m-d')) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        this._cRows = [];
        for (var k = 0; k < _map.getKeys().length; k++) {
            var kvpc = _map.get(_map.getKeys()[k]).toArray();
            var acTasks = _map.get(_map.getKeys()[k]).getValues();
            var tmpTasks = [];
            var i = 0;
            while (true) {
                i++;
                var cRow = new CalendarRow();
                while (acTasks.length > 0) {
                    var item = acTasks.shift();
                    if (!item || typeof (item) == 'undefined') {
                        continue;
                    }
                    var added = cRow.add(item);
                    if (!added) {
                        tmpTasks.push(item);
                    }
                    else {
                        if (cRow.getTasksCount() > 1) {
                            var prevCT = cRow.getByIndex(cRow.getTasksCount() - 2);
                            prevCT.setNextRowTaskId(item.getId());
                            item.setPrevRowTaskId(prevCT.getId());
                        }
                    }
                }
                this._cRows.push(cRow);
                if (tmpTasks.length == 0) {
                    break;
                }
                else {
                    acTasks = tmpTasks;
                    tmpTasks = [];
                }
                if (i == 20) {
                    console.log('i=', i, 'Breaked/ Maximum rows limit detected.');
                    break;
                }
            }
        }
    };
    TaskCollection.prototype.makeKey = function (dataTask) {
        return dataTask.getDataRow().getUser() + '_' + dataTask.getDataRow().getType();
    };
    return TaskCollection;
}());
var Moment = (function () {
    function Moment(sDate, month, date, hours, minutes, seconds) {
        if (sDate === void 0) { sDate = ''; }
        this.sDate = sDate;
        this._oDate = new Date();
        if (this.sDate == '' || this.sDate == 'undefined' || this.sDate == null || this.sDate == 'function') {
            this._oDate = new Date(Date.now());
        }
        else {
            var pType = typeof (sDate);
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
    Moment.prototype.getYear = function () {
        return this._oDate.getFullYear();
    };
    Moment.prototype.getMonth = function () {
        return this._oDate.getMonth();
    };
    Moment.prototype.getDate = function () {
        return this._oDate.getDate();
    };
    Moment.prototype.getDay = function () {
        return this._oDate.getDay();
    };
    Moment.prototype.isDayoff = function () {
        return this.getDay() == 0 || this.getDay() == 6;
    };
    Moment.prototype.clone = function () {
        return new Moment(this.sDate);
    };
    Moment.prototype.setMilliseconds = function () {
        return this._oDate.getMilliseconds();
    };
    Moment.prototype.subtract = function (count, measure) {
        if (measure === void 0) { measure = 'days'; }
        return this.add(-count, measure);
    };
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
    Moment.prototype.format = function (mask) {
        return mask.replace(/y{1,4}/gi, this._oDate.getFullYear().toString())
            .replace(/m{1,2}/gi, this.pad(this._oDate.getMonth() + 1))
            .replace(/d{1,2}/gi, this.pad(this._oDate.getDate()))
            .replace(/h{1,2}/gi, this.pad(this._oDate.getHours()))
            .replace(/i{1,2}/gi, this.pad(this._oDate.getMinutes()))
            .replace(/s{1,2}/gi, this.pad(this._oDate.getSeconds()));
    };
    Moment.prototype.isSame = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        var current = this.format(mask);
        var compare = date.format(mask);
        return current == compare;
    };
    Moment.prototype.isGE = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '>=');
    };
    Moment.prototype.isLE = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '<=');
    };
    Moment.prototype.isGT = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '>');
    };
    Moment.prototype.isLT = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '<');
    };
    Moment.prototype.isEQ = function (date, mask) {
        if (mask === void 0) { mask = 'YYYY-MM-DD HH:ii:SS'; }
        return this.compare(date, mask, '=');
    };
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
    Moment.prototype.startOf = function (measure) {
        var res = new Moment();
        switch (measure) {
            case 'month':
                res = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                break;
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
    Moment.prototype.isBetween = function (from, to) {
        return (this._oDate <= to.toDate() && this._oDate >= from.toDate());
    };
    Moment.prototype.toDate = function () {
        return this._oDate;
    };
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
    Moment.prototype.isLastDayOfMonth = function () {
        var date = this.clone().endOf('month');
        return this.isSame(date, 'y-m-d');
    };
    Moment.prototype.isFirstDayOfMonth = function () {
        var date = this.clone().startOf('month');
        return this.isSame(date, 'y-m-d');
    };
    Moment.prototype.isFirstWorkDayOfMonth = function () {
        var date = this.clone().startOf('workmonth');
        return this.isSame(date, 'y-m-d');
    };
    return Moment;
}());
var HtmlUi = (function () {
    function HtmlUi() {
    }
    HtmlUi.createText = function (label) {
        return document.createTextNode(label);
    };
    HtmlUi.createRow = function (bHeader) {
        var div = document.createElement('div');
        div.classList.add('row');
        if (bHeader) {
            div.classList.add('row-header');
        }
        return div;
    };
    HtmlUi.createDay = function (mmt) {
        var day = document.createElement('div');
        day.classList.add('col');
        day.classList.add('day');
        day.dataset.date = mmt.format('y-m-d');
        if (HtmlUi.isDayoff(mmt)) {
            day.classList.add('day-off');
        }
        if ((new Moment())
            .isSame(new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate()), 'YYYYMMDD')) {
            day.classList.add('now');
        }
        return day;
    };
    HtmlUi.isDayoff = function (mmt) {
        var res = mmt.isDayoff();
        var spec = false;
        var sett = Settings.getInstance();
        if (sett.holidaysDate.length > 0) {
            for (var i = 0; i < sett.holidaysDate.length; i++) {
                var date = new Moment(sett.holidaysDate[i]);
                spec = false;
                spec = date.isSame(mmt, 'y-m-d');
                if (spec) {
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
        return total;
    };
    HtmlUi.createCell = function () {
        var div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('day');
        return div;
    };
    HtmlUi.createTaskText = function (label) {
        var span = document.createElement('span');
        var text = HtmlUi.createText(label);
        span.appendChild(text);
        return span;
    };
    HtmlUi.createRowGroup = function (label) {
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
    return HtmlUi;
}());
var ParallelTask = (function () {
    function ParallelTask(_onReadyFn) {
        this._onReadyFn = _onReadyFn;
        this._tasks = [];
        this._runned = [];
        this._finished = [];
        this._timer = null;
        this._lut = [];
        this._interval = 200;
        this._lut = [];
        for (var i = 0; i < 256; i++) {
            this._lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
        }
    }
    ParallelTask.prototype.setInterval = function (interval) {
        this._interval = interval;
        return this;
    };
    ParallelTask.prototype.addTask = function (task) {
        if (task.getId() == '') {
            task.setId(this.guid());
        }
        this._tasks.push(task);
        return this;
    };
    ParallelTask.prototype.guid = function () {
        var d0 = Math.random() * 0xffffffff | 0;
        var d1 = Math.random() * 0xffffffff | 0;
        var d2 = Math.random() * 0xffffffff | 0;
        var d3 = Math.random() * 0xffffffff | 0;
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
    };
    ParallelTask.prototype.run = function () {
        while (this._tasks.length > 0) {
            var task = this._tasks.shift();
            if (!task.isRunned()) {
                task.run();
                this._runned.push(task);
            }
        }
        var that = this;
        this._timer = setInterval(function () { that.checkFinish(); }, this._interval);
    };
    ParallelTask.prototype.checkFinish = function () {
        var _runned = [];
        while (this._runned.length > 0) {
            var task = this._runned.shift();
            if (task.isReady()) {
                this._finished.push(task);
            }
            else {
                _runned.push(task);
            }
        }
        while (_runned.length > 0) {
            var task = _runned.shift();
            this._runned.push(task);
        }
        if (this._runned.length === 0) {
            clearInterval(this._timer);
            this._onReadyFn.call(this);
        }
    };
    return ParallelTask;
}());
var Calendar = (function () {
    function Calendar(settings) {
        var _this = this;
        this._taskCollection = null;
        this._htmlFontSize = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('font-size'));
        this._htmlFontFamily = window.getComputedStyle(document.querySelector('body')).getPropertyValue('font-family');
        this._renderStartTime = new Moment();
        this._renderEndTime = new Moment();
        this._maxUserName = 0;
        this._maxTaskType = 0;
        this._dataLoadTimeout = 60 * 1000;
        this._dataLoadCheckInterval = 200;
        var sett = Settings.getInstance();
        this._events = new KeyValuePairCollection();
        this._events.set('taskclick', null);
        this._events.set('taskremove', null);
        this._parallel = new ParallelTask(function () { return _this.render(); });
        this._div = document.querySelector(settings.containerId);
        this._taskCollection = new TaskCollection(sett.taskDataUrl);
        this._parallel
            .addTask(this._taskCollection)
            .run();
    }
    Calendar.getStartPeriod = function () {
        var sett = Settings.getInstance();
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
    Calendar.getEndPeriod = function () {
        var sett = Settings.getInstance();
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
    Calendar.prototype.render = function () {
        this._renderStartTime = new Moment();
        var row;
        var startMmt = Calendar.getStartPeriod();
        var endMmt = Calendar.getEndPeriod();
        var diffDays = endMmt.diff(startMmt) + 1;
        var label;
        var sett = Settings.getInstance();
        if (sett.autoWidthGroup) {
            this.calculateGroupLabelMaxWidth();
        }
        var cWrapper = document.createElement('div');
        cWrapper.classList.add('task-calendar');
        row = HtmlUi.createRow(true);
        row.classList.add('month-header');
        label = HtmlUi.createRowGroup();
        label.classList.add('group-user');
        row.appendChild(label);
        label = HtmlUi.createRowGroup();
        label.classList.add('group-type');
        row.appendChild(label);
        this.generateDateRange(row, startMmt, diffDays, true);
        cWrapper.appendChild(row);
        row = HtmlUi.createRow(true);
        row.classList.add('date-header');
        label = HtmlUi.createRowGroup('User');
        row.appendChild(label);
        label = HtmlUi.createRowGroup('Task type');
        row.appendChild(label);
        this.generateDateRange(row, startMmt, diffDays);
        cWrapper.appendChild(row);
        if (!this._taskCollection) {
            console.log('Data not loaded');
            return;
        }
        if (this._taskCollection.getSize() > 0) {
            var prevUser = '';
            for (var j = 0; j < this._taskCollection.getSize(); j++) {
                var cRow = this._taskCollection.getByIndex(j);
                if (!cRow) {
                    continue;
                }
                var row_1 = HtmlUi.createRow();
                if (prevUser && prevUser !== cRow.getUser()) {
                    row_1.classList.add('row-block-start');
                }
                prevUser = cRow.getUser();
                var label_1 = HtmlUi.createRowGroup(cRow.getUser());
                if (sett.autoWidthGroup) {
                    label_1.classList.add('value-width-auto');
                    label_1.classList.add('value-width-' + String(this._maxUserName));
                }
                row_1.appendChild(label_1);
                label_1 = HtmlUi.createRowGroup(cRow.getType());
                if (sett.autoWidthGroup) {
                    label_1.classList.add('value-width-auto');
                    label_1.classList.add('value-width-' + String(this._maxTaskType));
                }
                row_1.appendChild(label_1);
                var _loop_1 = function (i) {
                    var mmt = startMmt.clone().add(i);
                    var day = HtmlUi.createDay(mmt);
                    var firstDayOfMonth = this_1.addDayData(day, mmt, i, diffDays);
                    var firstWorkDayOfMonth = mmt.isFirstWorkDayOfMonth();
                    var task = cRow.getTaskOnDate(mmt);
                    if (task) {
                        var calDate = task.getCTDate(mmt);
                        if (calDate) {
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
                            var idx = task.getLastDateIndex();
                            var duration = task.getDataRow().getDuration();
                            var firstDateOfMonth = mmt.startOf('month');
                            var lastDateOfMonth = mmt.endOf('month');
                            var tillEndOfMonth = lastDateOfMonth.diff(mmt);
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
                            if (calDate.isFirst || (!calDate.isFirst && firstWorkDayOfMonth) || (!calDate.isFirst && isStartPeriod)) {
                                day.classList.add('labeled');
                                var labelLength = this_1.getMinNumber([spaceToNextTask, tillEndOfMonth + 1, tillEndOfPeriod + 1, textWidth]);
                                var labelEndDate = mmt.clone().add(labelLength - 1);
                                var span = HtmlUi.createTaskText(task.getDataRow().getLabel());
                                span.classList.add('task-label');
                                span.classList.add('task-label-length-' + String(labelLength));
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
                    if (firstDayOfMonth && i != 0) {
                        var monthBreak = HtmlUi.createCell();
                        monthBreak.classList.add('month-break');
                        row_1.appendChild(monthBreak);
                    }
                    row_1.appendChild(day);
                };
                var this_1 = this;
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
    Calendar.prototype.getMinNumber = function (inputs) {
        return this.getMinMaxNumber(inputs, true);
    };
    Calendar.prototype.getMaxNumber = function (inputs) {
        return this.getMinMaxNumber(inputs);
    };
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
    Calendar.prototype.generateDateRange = function (row, startMmt, diffDays, asCell) {
        if (asCell === void 0) { asCell = false; }
        for (var i = 0; i < diffDays; i++) {
            var mmt = startMmt.clone().add(i);
            var day = void 0;
            if (asCell) {
                day = HtmlUi.createCell();
            }
            else {
                day = HtmlUi.createDay(mmt);
                var label = HtmlUi.createText(mmt.format('d'));
                day.appendChild(label);
            }
            var firstDayOfMonth = this.addDayData(day, mmt, i, diffDays);
            if (firstDayOfMonth && i != 0) {
                var monthBreak = HtmlUi.createCell();
                monthBreak.classList.add('month-break');
                row.appendChild(monthBreak);
            }
            if (firstDayOfMonth || i == 0) {
                if (asCell) {
                    var monthName = mmt.toDate().toLocaleString('ru-RU', { month: 'long' });
                    var label = HtmlUi.createText(monthName.charAt(0).toUpperCase() + monthName.slice(1));
                    day.appendChild(label);
                }
            }
            row.appendChild(day);
        }
    };
    Calendar.prototype.addDayData = function (day, mmt, i, diffDays) {
        var firstDayOfMonth = mmt.isFirstDayOfMonth();
        var lastDayOfMonth = mmt.isLastDayOfMonth();
        if (i == 0) {
            var endOfMonth = mmt.clone().endOf('month');
            var len = mmt.diff(endOfMonth) + 1;
            day.classList.add('period-start');
            day.classList.add('cell-span-' + String(len));
            day.dataset.monthLength = String(len);
        }
        if (i == diffDays - 1) {
            day.classList.add('period-end');
        }
        if (firstDayOfMonth) {
            day.classList.add('month-start');
        }
        if (lastDayOfMonth) {
            day.classList.add('month-end');
        }
        return firstDayOfMonth;
    };
    Calendar.prototype.getTextLengthInPixels = function (text) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        ctx.font = this._htmlFontSize + 'px ' + this._htmlFontFamily;
        var w = ctx.measureText(text).width;
        return w;
    };
    Calendar.prototype.getLabelLengthInDays = function (text) {
        var w = this.getTextLengthInPixels(text);
        w = w / (this._htmlFontSize * 1.7);
        w = Math.ceil(w);
        return w;
    };
    return Calendar;
}());
var sett = Settings.getInstance();
sett.containerId = '#calendar';
sett.taskDataUrl = 'https://my.api.mockaroo.com/timetask.json?key=6cd5c210';
sett.vacationDataUrl = 'https://my.api.mockaroo.com/vacation.json?key=6cd5c210';
sett.timeRange = TimeRange.TimeLine;
sett.leftShiftDays = 14;
sett.rightShiftDays = 14;
sett.autoWidthGroup = true;
sett.holidaysDate = [
    '2018-01-01',
    '2018-01-02',
    '2018-01-03',
    '2018-01-04',
    '2018-01-05',
    '2018-01-06',
    '2018-01-07',
    '2018-01-08',
    '2018-02-23',
    '2018-03-08',
    '2018-03-09',
    '2018-04-30',
    '2018-05-01',
    '2018-05-02',
    '2018-05-09',
    '2018-06-11',
    '2018-06-12',
    '2018-11-04',
    '2018-12-31'
];
sett.extraworkdaysDate = [
    '2018-04-28',
    '2018-06-09',
    '2018-12-29',
];
var app = new Calendar(sett);
app.on('taskclick', function (e) {
    var taskId = e.dataset.taskId;
    console.log('Clicked task has ID', e.dataset.taskId, 'HTML:', e);
    app.removeTask(taskId);
});
app.on('taskremove', function (id) {
    console.log('Removed task with ID', id);
});
var VacationDataRow = (function () {
    function VacationDataRow(obj) {
        this._id = obj.id;
        this._user = obj.user;
        this._start = new Moment(obj.start);
        this._duration = obj.duration;
    }
    VacationDataRow.prototype.getId = function () {
        return this._id;
    };
    VacationDataRow.prototype.getUser = function () {
        return this._user;
    };
    VacationDataRow.prototype.getStart = function () {
        return this._start;
    };
    VacationDataRow.prototype.getDuration = function () {
        return this._duration;
    };
    return VacationDataRow;
}());
var UserVacation = (function () {
    function UserVacation(_user) {
        this._user = _user;
        this._dates = [];
    }
    return UserVacation;
}());
var Vacation = (function () {
    function Vacation() {
    }
    return Vacation;
}());
