"use strict";
/// <reference path="CalendarSettings.ts" />
/// <reference path="Calendar.ts" />
/// <reference path="Moment.ts" />
var sett = CalendarSettings.getInstance();
sett.containerId = '#calendar';
sett.dataUrl = 'http://dummy.lexxsoft.ru';
// sett.timeRange = TimeRange.Quarter;
// sett.timeRange = TimeRange.Month;
// sett.rangeType = CalendarRangeType.Custom;
// sett.customDateStart = new Moment('2018-05-01');
// sett.customDateEnd = new Moment('2018-06-30');
sett.timeRange = TimeRange.TimeLine;
sett.leftShiftDays = 14;
sett.rightShiftDays = 14;
sett.autoWidthGroup = true;
// Нерабочими праздничными днями в Российской Федерации являются:
// 1, 2, 3, 4 и 5 января — Новогодние каникулы;
// 7 января — Рождество Христово;
// 23 февраля — День защитника Отечества;
// 8 марта — Международный женский день;
// 1 мая — Праздник Весны и Труда;
// 9 мая — День Победы;
// 12 июня — День России;
// 4 ноября — День народного единства.
// При совпадении выходного и нерабочего праздничного дней выходной день переносится на следующий после праздничного рабочий день.
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
// app.setData(data).render();
app.on('taskclick', function (e) {
    var taskId = e.dataset.taskId;
    console.log('Clicked task has ID', e.dataset.taskId, 'HTML:', e);
    app.removeTask(taskId);
});
app.on('taskremove', function (id) {
    console.log('Removed task with ID', id);
});
