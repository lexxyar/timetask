"use strict";
var KeyValuePair = /** @class */ (function () {
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
