/// <reference path="ITaskDataRow.ts" />

/**
 * Class of calendar data row description
 */
class TaskDataRow {

    /**
     * ID of data row
     */
    private _id: TDataId;

    /**
     * User name
     */
    private _user: string;

    /**
     * Task type
     */
    private _type: string;

    /**
     * Task start date
     * @type IMoment
     */
    private _start: IMoment;

    /**
     * Task duration
     */
    private _duration: number;

    /**
     * Task label
     */
    private _label: string;

    /**
     * Count of day off
     */
    private _dayoff: number;

    /**
     * Exactly date of day off
     * @type IMoment|null
     */
    private _dayoffdate: IMoment | null;

    /**
     * Class constructor
     *
     * @param {ITaskDataRow} obj Input row with data, which compare with ITaskDataRow interface
     */
    public constructor(obj: ITaskDataRow) {
        this._id = obj.id;
        this._user = obj.user;
        this._type = obj.type;

        // Make Moment from date
        this._start = new Moment(obj.start);
        this._duration = obj.duration;
        this._label = obj.label;
        this._dayoff = obj.dayoff;
        this._dayoffdate = null;

        // If we have day offs
        if (this._dayoff) {

            // Lets check on day off date declaration
            if (obj.dayoffdate) {

                // Make Moment from date
                this._dayoffdate = new Moment(obj.dayoffdate);
            }
        }
    }

    /**
     * Return row ID
     * @returns {TDataId}
     */
    public getId(): TDataId {
        return this._id;
    }

    /**
     * Return user name
     * @returns {string}
     */
    public getUser(): string {
        return this._user;
    }

    /**
     * Return task type
     * @returns {string}
     */
    public getType(): string {
        return this._type;
    }

    /**
     * Return task start date
     * @returns {IMoment}
     */
    public getStart(): IMoment {
        return this._start;
    }

    /**
     * Return task duration
     * @returns {number}
     */
    public getDuration(): number {
        return this._duration;
    }

    /**
     * Return task label
     * @returns {string}
     */
    public getLabel(): string {
        return this._label;
    }

    /**
     * Return day off count
     * @returns {number}
     */
    public getDayoff(): number {
        return this._dayoff;
    }

    /**
     * Return day off date
     * @returns {IMoment}
     */
    public getDayoffdate(): IMoment | null {
        return this._dayoffdate;
    }
}