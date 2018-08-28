/**
 * Interface for moment
 */
interface IMoment {
    /**
     * Return year
     * @returns {number}
     */
    getYear(): number;

    /**
     * Return number of month (starting with 0)
     * @returns {number}
     */
    getMonth(): number;

    /**
     * Return date of month
     * @returns {number}
     */
    getDate(): number;

    /**
     * Return number of day of week (starting with 0)
     * @returns {number}
     */
    getDay(): number;

    /**
     * Return TRUE if moment is day off
     * @returns {boolean}
     */
    isDayoff(): boolean;

    /**
     * Create clone of moment
     * @returns {IMoment}
     */
    clone(): IMoment;

    /**
     * Subtract count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - years
     * - hours
     * - minutes
     * - seconds
     * - milliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    subtract(count: number, measure?: string): IMoment;

    /**
     * Add count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - years
     * - hours
     * - minutes
     * - seconds
     * - milliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    add(count: number, measure?: string): IMoment;

    /**
     * Format moment by mask
     *
     * @param {string} mask
     * @returns {string}
     */
    format(mask: string): string;

    /**
     * Set milliseconds
     * @returns {number}
     */
    setMilliseconds(): number;

    /**
     * Return TRUE if moment is equal by mask
     * By default mask is 'YYYY-MM-DD HH:ii:SS'
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isSame(date: IMoment, mask?: string): boolean;

    /**
     * Return moment which equal to start of period
     *
     * @param {string} measure
     * @returns {IMoment}
     */
    startOf(measure: string): IMoment;

    /**
     * Return moment which equal to end of period
     * @param {string} measure
     * @returns {IMoment}
     */
    endOf(measure: string): IMoment;

    /**
     * Return TRUE if moment between two dates
     * @param {IMoment} from
     * @param {IMoment} to
     * @returns {boolean}
     */
    isBetween(from: IMoment, to: IMoment): boolean

    /**
     * Return Date object of moment
     * @returns {Date}
     */
    toDate(): Date;

    /**
     * Return difference between current moment and given moment in units of measure
     * Unit of measure is 'days' by default
     *
     * @param {IMoment} date
     * @param {string} measure
     * @returns {number}
     */
    diff(date: IMoment, measure?: string): number;

    /**
     * Return TRUE if it is last day of month
     * @returns {boolean}
     */
    isLastDayOfMonth(): boolean;

    /**
     * Return TRUE if it is first day of month
     * @returns {boolean}
     */
    isFirstDayOfMonth(): boolean;

    /**
     * Return TRUE if current moment is Great or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isGE(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Less or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isLE(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Greater than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isGT(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Lower than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isLT(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Equal to input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isEQ(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is first work day of month
     * @returns {boolean}
     */
    isFirstWorkDayOfMonth(): boolean;
}