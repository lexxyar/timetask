/// <reference path="./calendar/calendar/Settings.ts" />
/// <reference path="./calendar/Calendar.ts" />
/// <reference path="./middleware/moment/IMoment.ts" />
/// <reference path="./middleware/moment/Moment.ts" />

let sett = Settings.getInstance();
sett.containerId = '#calendar';
// sett.dataUrl = 'http://dummy.lexxsoft.ru';
sett.taskDataUrl = 'https://my.api.mockaroo.com/timetask.json?key=6cd5c210'; // 1K rows
sett.vacationDataUrl = 'https://my.api.mockaroo.com/vacation.json?key=6cd5c210'; // 10 rows of vacation

// sett.timeRange = TimeRange.Quarter;
// sett.timeRange = TimeRange.Month;

// sett.rangeType = CalendarRangeType.Custom;
// sett.customDateStart = new Moment('2018-05-01');
// sett.customDateEnd = new Moment('2018-06-30');

sett.timeRange = TimeRange.TimeLine;
sett.leftShiftDays = 14;
sett.rightShiftDays = 14;

sett.autoWidthGroup = true;

// Нерабочие праздничные дни
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

let app = new Calendar(sett);
// app.setData(data).render();
app.on('taskclick', (e: any) => {
    let taskId = e.dataset.taskId;
    console.log('Clicked task has ID', e.dataset.taskId, 'HTML:', e);
    app.removeTask(taskId);
});
app.on('taskremove', (id: any) => {
    console.log('Removed task with ID', id);
});