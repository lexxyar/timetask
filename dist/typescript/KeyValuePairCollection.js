"use strict";
var KeyValuePairCollection = /** @class */ (function () {
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
