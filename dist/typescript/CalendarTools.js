"use strict";
/**
 * Helper class
 */
var CalendarTools = /** @class */ (function () {
    function CalendarTools() {
    }
    /**
     * Return formatted number with fixed length 2 and leading zeros
     * @param {number} i
     * @returns {string}
     */
    CalendarTools.formatNumber = function (i) {
        return CalendarTools.pad(i);
    };
    /**
     * Return formatted number of fixed length with leading zeros
     * @param {number} i
     * @param {number} length
     * @returns {string}
     */
    CalendarTools.pad = function (i, length) {
        if (length === void 0) { length = 2; }
        var s = i.toString();
        for (var i_1 = s.length; i_1 < length; i_1++) {
            s = '0' + s;
        }
        return s;
    };
    return CalendarTools;
}());
