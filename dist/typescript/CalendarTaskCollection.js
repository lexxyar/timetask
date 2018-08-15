"use strict";
var CalendarTaskCollection = /** @class */ (function () {
    function CalendarTaskCollection() {
        this._dataTasks = [];
        this._cRows = [];
    }
    CalendarTaskCollection.prototype.getData = function (callback) {
        var sett = CalendarSettings.getInstance();
        var xhr = new XMLHttpRequest();
        xhr.open(sett.requestMethod, sett.dataUrl, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    callback(respJson);
                }
                else {
                    // console.log("xhr failed");
                }
            }
            else {
                // console.log("xhr processing going on");
            }
        };
        // console.log("request sent succesfully");
    };
    CalendarTaskCollection.prototype.loadUrl = function (callbackFn) {
        var _this = this;
        this.getData(function (res) {
            _this.loadArray(res);
            callbackFn.call(_this);
        });
    };
    CalendarTaskCollection.prototype.loadArray = function (jsonOArray) {
        this._dataTasks = [];
        if (jsonOArray.length > 0) {
            for (var j = 0; j < jsonOArray.length; j++) {
                var dataRow = new CalendarDataRow(jsonOArray[j]);
                var cTask = new CalendarTask(dataRow);
                if (!cTask.isCrossPeriod(Calendar.getStartPeriod(), Calendar.getEndPeriod())) {
                    continue;
                }
                this._dataTasks.push(cTask);
            }
        }
        this.sort();
        this.group();
    };
    CalendarTaskCollection.prototype.sort = function () {
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
    CalendarTaskCollection.prototype.getSize = function () {
        return this._cRows.length;
    };
    CalendarTaskCollection.prototype.getByIndex = function (idx) {
        if ((idx || idx >= 0) && this._cRows.length > 0 && idx < this._cRows.length) {
            return this._cRows[idx];
        }
        return null;
    };
    CalendarTaskCollection.prototype.group = function () {
        var _map = new KeyValuePairCollection();
        for (var j = 0; j < this._dataTasks.length; j++) {
            var cTask = this._dataTasks[j];
            var key = this.makeKey(cTask);
            // if (key !== 'Baby_jcb' && key !== 'Beauty_mastercard') continue;
            // if (key !== 'Automotive_jcb') continue;
            // if (key !== 'Baby_jcb') continue;
            // if (key !== 'Books_maestro' && key !== 'Books_mastercard' && key !== 'Computers_jcb') continue;
            // if (key !== 'Computers_jcb') continue;
            // if (key !== 'Books_maestro') continue;
            // if (key !== 'Automotive_solo') continue;
            // if (key !== 'Automotive_bankcard') continue;
            // if (key !== 'Beauty_diners-club-carte-blanche') continue;
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
                            var prevCT = cRow.getByIndex(cRow.getTasksCount() - 2); // -2 because we have previous element and current element which one we just added
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
        // console.log(this._cRows);
    };
    CalendarTaskCollection.prototype.makeKey = function (dataTask) {
        return dataTask.getDataRow().getUser() + '_' + dataTask.getDataRow().getType();
    };
    return CalendarTaskCollection;
}());
