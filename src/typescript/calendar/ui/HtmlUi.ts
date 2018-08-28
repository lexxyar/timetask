/**
 * Helper class for generate HTML objects
 */
class HtmlUi {

    /**
     * Create text node
     * @param {string} label
     * @returns {Text}
     */
    public static createText(label: string): Text {
        return document.createTextNode(label);
    }

    /**
     * Create DIV tag with CSS classes:
     * - row
     * - [row-header]
     *
     * @param {boolean} bHeader
     * @returns {HTMLElement}
     */
    public static createRow(bHeader?: boolean): HTMLElement {
        let div: HTMLElement = document.createElement('div');
        div.classList.add('row');
        if (bHeader) {
            div.classList.add('row-header');
        }
        return div;
    }

    /**
     * Create DIV tag for calendar day cell with CSS classes using moment
     * Add CSS classes:
     * - col
     * - day
     * - [day-off]
     * - [now]
     *
     * Fill datasets:
     * - date
     *
     * @param {IMoment} mmt
     * @returns {HTMLElement}
     */
    public static createDay(mmt: IMoment): HTMLElement {
        let day: HTMLElement = document.createElement('div');

        day.classList.add('col');
        day.classList.add('day');
        day.dataset.date = mmt.format('y-m-d');

        // if (mmt.isDayoff()) {
        //     // console.log(mmt.format('d'));
        //     day.classList.add('day-off');
        // }
        if (HtmlUi.isDayoff(mmt)) {
            // console.log(mmt.format('d'));
            day.classList.add('day-off');
        }

        // FIXME: Use mmt instad new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate())
        if ((new Moment())
            .isSame(new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate()), 'YYYYMMDD')) {
            day.classList.add('now');
        }
        return day;
    }

    public static isDayoff(mmt: IMoment): boolean {
        let res: boolean = mmt.isDayoff();
        let spec: boolean = false;
        let sett = Settings.getInstance();

        if (sett.holidaysDate.length > 0) {
            for (let i = 0; i < sett.holidaysDate.length; i++) {
                let date = new Moment(sett.holidaysDate[i]);
                spec = false;
                spec = date.isSame(mmt, 'y-m-d');
                // console.log(mmt.format('y-m-d'), date.format('y-m-d'), spec);
                if (spec) {
                    // console.log(mmt.format('y-m-d'));
                    break;
                }
            }
        }
        let hol = spec ? spec : res;

        let extra = false;
        if (sett.extraworkdaysDate.length > 0) {
            for (let i = 0; i < sett.extraworkdaysDate.length; i++) {
                let date = new Moment(sett.extraworkdaysDate[i]);
                extra = false;
                extra = date.isSame(mmt, 'y-m-d');
                if (extra) {
                    break;
                }
            }
        }

        let total = extra ? !extra : hol;

        // console.log('Date:', mmt.format('d.m'), 'Day off:', res, 'Holiday:', spec, 'Extra:', extra, 'Total', total);

        return total;
    }

    /**
     * Create HTML DIV element with CSS classes:
     * - col
     * - day
     * @returns {HTMLElement}
     */
    public static createCell(): HTMLElement {
        let div: HTMLElement = document.createElement('div');

        div.classList.add('col');
        div.classList.add('day');

        return div;
    }

    /**
     * Create SPAN tag with text node for task label
     * @param {string} label
     * @returns {HTMLElement}
     */
    public static createTaskText(label: string): HTMLElement {
        let span: HTMLElement = document.createElement('span');
        let text = HtmlUi.createText(label);
        span.appendChild(text);
        return span;
    }

    /**
     * Create DIV tag with CSS classes for cell with user name and task type values
     * Add CSS classes:
     * - col
     * - group
     *
     * @param {string} label
     * @returns {HTMLElement}
     */
    public static createRowGroup(label: string = ''): HTMLElement {
        let div: HTMLElement = document.createElement('div');
        div.classList.add('col');
        div.classList.add('group');

        if (label) {
            let text: Text = document.createTextNode(label);
            div.appendChild(text);
        }

        return div;
    }

}