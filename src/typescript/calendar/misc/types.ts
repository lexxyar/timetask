/**
 * Custom type for data row ID
 */
type TDataId = number;

enum TimeRange {
    Year = 'year',
    Quarter = 'quarter',
    Month = 'month',
    Week = 'week',
    TimeLine = 0
};
enum CalendarRangeType {
    CurrentDate,
    Custom
}