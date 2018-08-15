"use strict";
/**
 *
 */
var CalendarTaskDate = /** @class */ (function () {
    function CalendarTaskDate(_date) {
        this._date = _date;
        this.hasNext = false;
        this.hasPrev = false;
        this.isFirst = false;
        this.isLast = false;
    }
    CalendarTaskDate.prototype.getMoment = function () {
        return this._date;
    };
    CalendarTaskDate.prototype.render = function (day, taskId) {
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
    CalendarTaskDate.prototype.mouseEvent = function (event, eventName) {
        // TODO: find NEXT and PREV tasks in the same row
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
    return CalendarTaskDate;
}());
