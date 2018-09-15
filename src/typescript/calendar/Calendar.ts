/// <reference path="./calendar/Settings.ts" />
/// <reference path="./../adaptation/map/KeyValuePairCollection.ts" />
/// <reference path="./task/TaskCollection.ts" />
/// <reference path="./../middleware/moment/IMoment.ts" />
/// <reference path="./../middleware/moment/Moment.ts" />
/// <reference path="./../adaptation/map/KeyValuePair.ts" />
/// <reference path="./ui/HtmlUi.ts" />
/// <reference path="./misc/types.ts" />
/// <reference path="./../middleware/parallel/IParallel.ts" />
/// <reference path="./../middleware/parallel/ParallelTask.ts" />

/**
 * Calendar class
 *
 * Main class, which render calendar UI. This is entery point of calendar application
 */
class Calendar {
    private _events: KeyValuePairCollection;

    /**
     * Collection of tasks
     * @type {any}
     * @private
     */
    private _taskCollection: TaskCollection | null = null;

    /**
     * HTML page font size
     * @type {number}
     * @private
     */
    private _htmlFontSize: number = parseFloat(window.getComputedStyle(document.querySelector('body') as HTMLElement).getPropertyValue('font-size'));

    /**
     * HTML page font family
     * @type {string}
     * @private
     */
    private _htmlFontFamily: string = window.getComputedStyle(document.querySelector('body') as HTMLElement).getPropertyValue('font-family');

    /**
     * HTML element which will contain calendar UI part
     */
    private _div: HTMLElement;

    // /**
    //  * First date of month
    //  * @type {number}
    //  * @private
    //  */
    // private _monthStart = new Moment().startOf('month').getDate();

    // /**
    //  * Last date of month
    //  * @type {number}
    //  * @private
    //  */
    // private _monthEnd = new Moment().endOf('month').getDate();

    // /**
    //  * Current month number (from 0)
    //  * @type {number}
    //  * @private
    //  */
    // private _currentMonth: number = new Moment().getMonth();

    // /**
    //  * Current year
    //  * @type {number}
    //  * @private
    //  */
    // private _currentYear: number = new Moment().getYear();

    private _renderStartTime: IMoment = new Moment();
    private _renderEndTime: IMoment = new Moment();
    private _maxUserName: number = 0;
    private _maxTaskType: number = 0;
    private _dataLoadTimeout: number = 60 * 1000; // 60 seconds
    private _dataLoadCheckInterval: number = 200; // 200 milliseconds
    private _parallel: ParallelTask;


    /**
     * Return start date for calendar
     * @returns {IMoment}
     */
    public static getStartPeriod(): IMoment {
        let sett = Settings.getInstance();
        let ret: IMoment = new Moment();
        if (sett.rangeType == CalendarRangeType.CurrentDate) {
            if (sett.timeRange == TimeRange.TimeLine) {

            } else {
                ret = new Moment().startOf(String(sett.timeRange));
            }
        } else if (sett.rangeType == CalendarRangeType.Custom) {
            ret = sett.customDateStart;
        }
        if (sett.leftShiftDays > 0) {
            ret.subtract(sett.leftShiftDays, 'days');
        }
        return ret;
    }

    /**
     * Return end date for calendar
     * @returns {IMoment}
     */
    public static getEndPeriod(): IMoment {
        let sett = Settings.getInstance();
        let ret: IMoment = new Moment();
        if (sett.rangeType == CalendarRangeType.CurrentDate) {
            if (sett.timeRange == TimeRange.TimeLine) {

            } else {
                ret = new Moment().endOf(String(sett.timeRange));
            }
        } else if (sett.rangeType == CalendarRangeType.Custom) {
            ret = sett.customDateEnd;
        }
        if (sett.rightShiftDays > 0) {
            ret.add(sett.rightShiftDays, 'days');
        }
        return ret;
    }

    /**
     * Class constructor
     */
    public constructor(settings: Settings) {
        let sett = Settings.getInstance();

        this._events = new KeyValuePairCollection();
        this._events.set('taskclick', null);
        this._events.set('taskremove', null);

        this._parallel = new ParallelTask(() => this.render());

        this._taskCollection = new TaskCollection(sett.taskDataUrl);
        // this._taskCollection = new TaskCollection(sett.vacationDataUrl);
        this._parallel
            .addTask(this._taskCollection)
            .run();

        // Find container for calendar
        this._div = document.querySelector(settings.containerId) as HTMLElement;
    }

    public on(eventName: string, callbackFn: any) {
        this._events.set(eventName, callbackFn);
    }

    private calculateGroupLabelMaxWidth() {
        let usersName: KeyValuePairCollection = new KeyValuePairCollection();
        let tasksType: KeyValuePairCollection = new KeyValuePairCollection();
        usersName.set('User', this.getTextLengthInPixels('User'));
        tasksType.set('Task type', this.getTextLengthInPixels('Task type'));
        if (this._taskCollection == null) {
            return;
        }
        for (let j = 0; j < this._taskCollection.getSize(); j++) {
            let cRow = this._taskCollection.getByIndex(j);
            if (!cRow) {
                continue;
            }
            usersName.set(cRow.getUser(), Math.ceil(this.getTextLengthInPixels(cRow.getUser())));
            tasksType.set(cRow.getType(), Math.ceil(this.getTextLengthInPixels(cRow.getType())));
        }

        usersName.sort(
            (a: KeyValuePair, b: KeyValuePair) => {
                let aVal: number = a.getValue();
                let bVal: number = b.getValue();

                if (aVal < bVal) {
                    return -1;
                } else if (aVal > bVal) {
                    return 1;
                } else {
                    return 0;
                }
            }
        );

        tasksType.sort(
            (a: KeyValuePair, b: KeyValuePair) => {
                let aVal: number = a.getValue();
                let bVal: number = b.getValue();

                if (aVal < bVal) {
                    return -1;
                } else if (aVal > bVal) {
                    return 1;
                } else {
                    return 0;
                }
            }
        );

        this._maxUserName = usersName.getValues().pop();
        this._maxTaskType = tasksType.getValues().pop();
    }

    public removeTask(id: TDataId) {
        let tasks = document.querySelectorAll('div.task[data-task-id="' + String(id) + '"');
        for (let i = 0; i < tasks.length; i++) {
            let div = tasks[i] as HTMLElement;
            let cssClasses = div.classList.toString().split(/\s+/);

            for (let j = 0; j < cssClasses.length; j++) {
                if (cssClasses[j].toLowerCase() == 'col' || cssClasses[j].toLowerCase() == 'day' || cssClasses[j].toLowerCase() == 'now') {
                    continue;
                }
                div.classList.remove(cssClasses[j]);
            }

            let attrs: Array<string> = [];
            for (let j = 0; j < div.attributes.length; j++) {
                let attr = div.attributes[j];
                if (/^data-/.test(attr.nodeName)) {
                    attrs.push(attr.nodeName);
                }
            }
            for (let j = 0; j < attrs.length; j++) {
                div.removeAttribute(attrs[j]);
            }

            div.innerHTML = "";
        }

        let callbackFn = this._events.get('taskremove');
        if (callbackFn) {
            callbackFn(id);
        }
    }

    /**
     * Rendering calendar UI
     */
    public render() {
        this._renderStartTime = new Moment();

        // Make header
        let row: HTMLElement;

        // Get start of calendars period
        let startMmt = Calendar.getStartPeriod();

        // Get end of calendars period
        let endMmt = Calendar.getEndPeriod();

        // Calculate count of days in period
        let diffDays = endMmt.diff(startMmt) + 1;

        let label: HTMLElement;

        let sett = Settings.getInstance();

        if (sett.autoWidthGroup) {
            this.calculateGroupLabelMaxWidth();
        }

        // Create wrapper for calendar
        let cWrapper: HTMLElement = document.createElement('div');
        cWrapper.classList.add('task-calendar');

        // Create month names
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


        // Create date header
        row = HtmlUi.createRow(true);
        row.classList.add('date-header');

        label = HtmlUi.createRowGroup('User');
        row.appendChild(label);

        label = HtmlUi.createRowGroup('Task type');
        row.appendChild(label);

        // Create period dates
        this.generateDateRange(row, startMmt, diffDays);

        cWrapper.appendChild(row);

        // Check if data loaded
        if (!this._taskCollection) {
            console.log('Data not loaded');
            // throw new Exep
            return;
        }

        // Check, if we have data
        if (this._taskCollection.getSize() > 0) {

            // Create variable for trace user name changing
            let prevUser: string = '';

            // Loop at data and create rows for UI
            for (let j = 0; j < this._taskCollection.getSize(); j++) {
                let cRow = this._taskCollection.getByIndex(j);
                if (!cRow) {
                    continue;
                }

                // Create row tag
                let row: HTMLElement = HtmlUi.createRow();

                // Add CSS class if user name has change
                if (prevUser && prevUser !== cRow.getUser()) {
                    row.classList.add('row-block-start');
                }
                prevUser = cRow.getUser();

                // Create cell with user name
                let label = HtmlUi.createRowGroup(cRow.getUser());
                if (sett.autoWidthGroup) {
                    label.classList.add('value-width-auto');
                    label.classList.add('value-width-' + String(this._maxUserName));
                }
                row.appendChild(label);

                // Create cell with task type
                label = HtmlUi.createRowGroup(cRow.getType());
                if (sett.autoWidthGroup) {
                    label.classList.add('value-width-auto');
                    label.classList.add('value-width-' + String(this._maxTaskType));
                }
                row.appendChild(label);

                // Loop at all dates in period
                for (let i = 0; i < diffDays; i++) {

                    // Create moment of current iteration
                    let mmt = startMmt.clone().add(i);

                    // Create cell with simple day
                    let day = HtmlUi.createDay(mmt);

                    // Adding CSS classes and check if it first day of month
                    let firstDayOfMonth: boolean = this.addDayData(day, mmt, i, diffDays);

                    // Check if it first work day
                    let firstWorkDayOfMonth: boolean = mmt.isFirstWorkDayOfMonth();

                    // Get task on current date
                    let task = cRow.getTaskOnDate(mmt);
                    if (task) {
                        // Get calendar task date
                        let calDate = task.getCTDate(mmt);

                        if (calDate) {

                            // Render date from data
                            calDate.render(day, task.getId());

                            let callbackFn = this._events.get('taskclick');
                            if (callbackFn) {
                                day.addEventListener('click', (e) => {
                                    let elem = (e.target as HTMLElement);
                                    if (elem.tagName.toLowerCase() == 'span') {
                                        elem = elem.parentNode as HTMLElement;
                                    }
                                    callbackFn(elem);
                                }, false);
                            }

                            // Create local vars
                            let idx = task.getLastDateIndex();
                            let duration = task.getDataRow().getDuration();
                            let firstDateOfMonth: IMoment = mmt.startOf('month');
                            let lastDateOfMonth: IMoment = mmt.endOf('month');
                            let tillEndOfMonth: number = lastDateOfMonth.diff(mmt);
                            // console.log(lastDateOfMonth.format('m-d'), mmt.format('m-d'), tillEndOfMonth);

                            let tillStartOfMonth: number = firstDateOfMonth.diff(mmt);
                            let tillEndOfPeriod: number = endMmt.diff(mmt);
                            let tillStartOfPeriod: number = startMmt.diff(mmt);
                            let daysLeft: number = (idx >= 0) ? (duration - idx - 1) : 365;
                            let daysSpent: number = (idx >= 0) ? (idx + 1) : 0;
                            let spaceToNextTask: number = cRow.getSpaseToNextTask(mmt);
                            let daysInTask: number = task.getEndDate().diff(task.getStartDate()) + 1;
                            let textWidth: number = this.getLabelLengthInDays(task.getDataRow().getLabel());
                            let prevRowTaskId: number = task.getPrevRowTaskId();
                            let nextRowTaskId: number = task.getNextRowTaskId();
                            let isStartPeriod: boolean = calDate.getMoment().isSame(Calendar.getStartPeriod(), 'y-m-d');

                            // Create corresponding values in dataset
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


                            // Add label to first day of task or to first day of period/month,
                            // if task start is outside of it
                            if (calDate.isFirst || (!calDate.isFirst && firstWorkDayOfMonth) || (!calDate.isFirst && isStartPeriod)) {
                                // Add CSS class to task whitch contain task label
                                day.classList.add('labeled');

                                // Lets calculate label length
                                // Label should not cross other label and should not be outside month or period
                                // To check it wi get minimum between:
                                // * spaceToNextTask        days count between current and next tasks start dates
                                // * tillEndOfMonth + 1     +1 because we should count current day too
                                // * tillEndOfPeriod + 1    +1 because we should count current day too
                                // * textWidth              label width

                                let labelLength: number = this.getMinNumber([spaceToNextTask, tillEndOfMonth + 1, tillEndOfPeriod + 1, textWidth]);

                                // Get date where last label symbol is
                                let labelEndDate: IMoment = mmt.clone().add(labelLength - 1);

                                // Create task label HTML element
                                let span = HtmlUi.createTaskText(task.getDataRow().getLabel());

                                // Add some CSS classes
                                span.classList.add('task-label');
                                span.classList.add('task-label-length-' + String(labelLength));

                                // Add extra CSS class to label element, which text is longer that days count till end of month/period or next task start date
                                if (textWidth > labelLength) {
                                    if (task.isApplyedToDate(labelEndDate)) {
                                        span.classList.add('end-task');
                                    } else if (labelEndDate.isDayoff()) {
                                        span.classList.add('end-dayoff');
                                    } else if (labelLength == spaceToNextTask || labelLength == tillEndOfPeriod + 1) {
                                        span.classList.add('end-day');
                                    }
                                }

                                day.appendChild(span);
                            }

                        }
                    }

                    // If it first day of month, add gap between monthes
                    if (firstDayOfMonth && i != 0) {
                        let monthBreak = HtmlUi.createCell();
                        monthBreak.classList.add('month-break');
                        row.appendChild(monthBreak);
                    }
                    row.appendChild(day);
                }
                cWrapper.appendChild(row);
            }
        }

        this._div.appendChild(cWrapper);

        this._renderEndTime = new Moment();

        console.log('rendered in', this._renderEndTime.toDate().getTime() - this._renderStartTime.toDate().getTime());
    }

    /**
     * Return minimum from input numbers array
     * @param {Array<number>} inputs
     * @returns {number}
     */
    private getMinNumber(inputs: Array<number>): number {
        return this.getMinMaxNumber(inputs, true);
    }

    /**
     * Return maximum from input numbers array
     * @param {Array<number>} inputs
     * @returns {number}
     */
    private getMaxNumber(inputs: Array<number>): number {
        return this.getMinMaxNumber(inputs);
    }

    /**
     * Return minimum/maximum from input numbers array
     * @param {Array<number>} inputs
     * @param {boolean} min
     * @returns {number}
     */
    private getMinMaxNumber(inputs: Array<number>, min: boolean = false): number {
        inputs.sort((a: number, b: number) => {
            return a - b
        });
        if (min) {
            return inputs.shift() as number;
        } else {
            return inputs.pop() as number;
        }
    }

    /**
     * Generate date range
     * @param {HTMLElement} row
     * @param {IMoment} startMmt
     * @param {number} diffDays
     * @param {boolean} asCell
     */
    private generateDateRange(row: HTMLElement, startMmt: IMoment, diffDays: number, asCell: boolean = false) {
        // Loop for all days in period
        for (let i = 0; i < diffDays; i++) {

            // Create date on each day
            let mmt = startMmt.clone().add(i);
            let day: HTMLElement;
            if (asCell) {
                day = HtmlUi.createCell();
            } else {
                day = HtmlUi.createDay(mmt);
                let label = HtmlUi.createText(mmt.format('d'));
                day.appendChild(label);
            }
            let firstDayOfMonth = this.addDayData(day, mmt, i, diffDays);


            // If it first day of month add gap
            if (firstDayOfMonth && i != 0) {
                let monthBreak = HtmlUi.createCell();
                monthBreak.classList.add('month-break');
                row.appendChild(monthBreak);
            }

            if (firstDayOfMonth || i == 0) {
                if (asCell) {
                    let monthName = mmt.toDate().toLocaleString('ru-RU', { month: 'long' });
                    let label = HtmlUi.createText(monthName.charAt(0).toUpperCase() + monthName.slice(1));
                    day.appendChild(label);
                }
            }

            row.appendChild(day);
        }
    }

    /**
     * Add data to HTML day
     * @param {HTMLElement} day
     * @param {IMoment} mmt
     * @param {number} i
     * @param {number} diffDays
     * @returns {boolean}
     */
    private addDayData(day: HTMLElement, mmt: IMoment, i: number, diffDays: number): boolean {

        // Create moment of first and last date of month
        let firstDayOfMonth: boolean = mmt.isFirstDayOfMonth();
        let lastDayOfMonth: boolean = mmt.isLastDayOfMonth();

        // If start of period
        if (i == 0) {
            let endOfMonth = mmt.clone().endOf('month');
            let len = mmt.diff(endOfMonth) + 1;
            day.classList.add('period-start');
            day.classList.add('cell-span-' + String(len));
            day.dataset.monthLength = String(len);
        }

        // If it is end of period
        if (i == diffDays - 1) {
            day.classList.add('period-end');
        }

        // It it is first day of month
        if (firstDayOfMonth) {
            day.classList.add('month-start');
        }

        // If it is last day of month
        if (lastDayOfMonth) {
            day.classList.add('month-end');
        }

        return firstDayOfMonth;
    }

    private getTextLengthInPixels(text: string): number {
        // Create canvas
        let canvas = document.createElement('canvas');

        // Get 2D context
        let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        // Set font size and font family
        ctx.font = this._htmlFontSize + 'px ' + this._htmlFontFamily;

        // Get text length in pixels
        let w = ctx.measureText(text).width;

        return w;
    }

    /**
     * Calculate and return label length
     * @param {string} text
     * @returns {number}
     */
    private getLabelLengthInDays(text: string): number {

        // // Get text length in pixels
        let w = this.getTextLengthInPixels(text);

        // FIXME: 1.7 is $day-cell-width in app.scss. Move it to calendar settings
        // Calculate text length in calendar days
        w = w / (this._htmlFontSize * 1.7);

        // Round up
        w = Math.ceil(w);

        return w;
    }
}