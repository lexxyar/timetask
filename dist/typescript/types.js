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
