/**
 *
 */
class TaskDate {
    public hasNext: boolean = false;
    public hasPrev: boolean = false;
    public isFirst: boolean = false;
    public isLast: boolean = false;

    public constructor(private _date: IMoment) {
    }

    public getMoment(): IMoment {
        return this._date;
    }

    public render<T>(day: HTMLElement, taskId: T) {
        day.classList.add('task');
        day.dataset.taskId = String(taskId);
        day.classList.add('task-' + taskId);
        day.addEventListener('mouseenter', (event) => {
            this.mouseEvent(event, 'mouseenter');
        }, false);
        day.addEventListener('mouseleave', (event) => {
            this.mouseEvent(event, 'mouseleave');
        }, false);
        
        if (this.isFirst) {
            day.classList.add('task-start');
        }
        if (this.isLast) {
            day.classList.add('task-end');
        }
        if (this.hasNext) {
            day.classList.add('task-has-next');
        }
        if (this.hasPrev) {
            day.classList.add('task-hasprev');
        }
    }

    public mouseEvent(event: MouseEvent, eventName: string) {
        // TODO: find NEXT and PREV tasks in the same row
        event.preventDefault();
        let trg: HTMLElement = event.target as HTMLElement;
        let dta = trg.dataset.taskId;
        let els = document.querySelectorAll('div[data-task-id="' + dta + '"]');
        for (let i = 0; i < els.length; i++) {
            if (eventName == 'mouseleave') {
                els[i].classList.remove('task-hover');
            } else if (eventName == 'mouseenter') {
                els[i].classList.add('task-hover');
            }
        }
    }
}