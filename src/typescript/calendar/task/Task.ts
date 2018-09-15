/// <reference path="TaskDate.ts" />
/// <reference path="../../middleware/moment/IMoment.ts" />


class Task {
    public _dates: TaskDate[] = [];
    private _lasfFoundedDateIndex: number = -1;
    public static taskNum: number = 0;
    private _nextRowTaskId: TDataId = 0 as TDataId;
    private _prevRowTaskId: TDataId = 0 as TDataId;

    public constructor(private _dataRow: TaskDataRow) {
        Task.taskNum++;
        this.fillDates();
    }

    public getNextRowTaskId(): TDataId {
        return this._nextRowTaskId;
    }

    public setNextRowTaskId(id: TDataId) {
        this._nextRowTaskId = id;
    }

    public getPrevRowTaskId(): TDataId {
        return this._prevRowTaskId;
    }

    public setPrevRowTaskId(id: TDataId) {
        this._prevRowTaskId = id;
    }

    public getDataRow(): TaskDataRow {
        return this._dataRow;
    }

    public getId(): number {
        return this._dataRow.getId();
    }

    private fillDates(): void {
        this._dates = [];

        let dayoffCnt: number = this._dataRow.getDayoff();
        let duration: number = this._dataRow.getDuration();

        for (let i = 0; i < duration; i++) {
            let nextDate = this._dataRow.getStart().clone();
            nextDate.add(i, 'days');

            let calDate = new TaskDate(nextDate);

            if (calDate.getMoment().isDayoff()) {
                if (dayoffCnt > 0) {
                    if (this._dataRow.getDayoffdate()) {
                        let doff = this._dataRow.getDayoffdate();
                        if (doff) {
                            if (doff.isSame(calDate.getMoment(), 'y-m-d')) {
                                dayoffCnt--;
                                this._dates.push(calDate);
                            } else {
                                duration++;
                            }
                        }
                    } else {
                        dayoffCnt--;
                        this._dates.push(calDate);
                    }
                } else {
                    duration++;
                }
            } else {
                this._dates.push(calDate);
            }
        }

        for (let i = 0; i < this._dates.length; i++) {
            let calDate = this._dates[i];
            calDate.isFirst = false;
            calDate.hasPrev = false;
            calDate.hasNext = false;
            calDate.isLast = false;
            if (i == 0) {
                calDate.isFirst = true;
            }
            if (i == this._dates.length - 1) {
                calDate.isLast = true;
            }
            if (i > 0 && i < this._dates.length - 1) {
                calDate.hasPrev = true;
                calDate.hasNext = true;
            }
            if (i === 0 && i !== this._dates.length - 1) {
                calDate.hasNext = true;
            }
            if (i !== 0 && i === this._dates.length - 1) {
                calDate.hasPrev = true;
            }
        }

        // console.log(this._dates);

        // TODO: use day off as array

        ////-----------------------------------------------------------------------------
        // if (this._dayoff > 0) {
        //     for (let i = 0; i < this._dayoff; i++) {
        //         let doff = moment(this._dayoffdate);
        //         this._dates.push(doff);
        //     }
        // }
    }

    private isFirst(): boolean {
        return this._dates.length == 0;
    }

    public isApplyedToDate(date: IMoment): boolean {
        return this.getCTDate(date) !== null;
    }

    public getCTDate(date: IMoment): TaskDate | null {
        for (let i = 0; i < this._dates.length; i++) {
            let cdt = this._dates[i] as TaskDate;
            if (cdt.getMoment().isSame(date, 'y-m-d')) {
                this._lasfFoundedDateIndex = i;
                return cdt;
            }
        }
        this._lasfFoundedDateIndex = -1;
        return null;
    }

    public getLastDateIndex(): number {
        return this._lasfFoundedDateIndex;
    }

    public isCrossPeriod(periodStart: IMoment, periodEnd: IMoment): boolean {
        for (let i = 0; i < this._dates.length; i++) {
            let currentDate = this._dates[i];
            if (currentDate.getMoment().isBetween(periodStart, periodEnd)) {
                return true;
            }
        }
        return false;
    }

    public getStartDate(): IMoment {
        return this._dates[0].getMoment();
    }

    public getEndDate(): IMoment {
        return this._dates[this._dates.length - 1].getMoment();
    }

}