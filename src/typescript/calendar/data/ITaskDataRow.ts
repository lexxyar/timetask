/**
 * Data interface for input data
 */
interface ITaskDataRow {
    /**
     * Record ID
     */
    id: TDataId;

    /**
     * User name
     */
    user: string;

    /**
     * Task type
     */
    type: string;

    /**
     * Start date YYYY-MM-DD
     */
    start: string;

    /**
     * Task duration
     */
    duration: number;

    /**
     * Task label
     */
    label: string;

    /**
     * Day off count
     */
    dayoff: number;

    /**
     * Exactly date of day off
     */
    dayoffdate: string;
}