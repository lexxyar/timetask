"use strict";
var CalendarRow = /** @class */ (function () {
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
