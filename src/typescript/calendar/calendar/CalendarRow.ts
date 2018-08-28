/// <reference path="./../task/Task.ts" />

class CalendarRow {
    private _user: string = '';
    private _type: string = '';
    private _tasks: Array<Task> = [];

    public constructor() {

    }

    public getUser(): string {
        return this._user;
    }

    public getType(): string {
        return this._type;
    }

    public add(task: Task): boolean {
        this._user = task.getDataRow().getUser();
        this._type = task.getDataRow().getType();
        if (this._tasks.length > 0) {
            let lastTask = this._tasks[this._tasks.length - 1];
            let diff: number = lastTask.getEndDate().diff(task.getStartDate());

            if (diff <= 1 || lastTask.getEndDate().toDate() > task.getStartDate().toDate()) {
                return false;
            }
        }
        this._tasks.push(task);
        return true;
    }

    public getTaskOnDate(date: IMoment): Task | null {
        if (this._tasks.length > 0) {
            for (let i = 0; i < this._tasks.length; i++) {
                let task = this._tasks[i];
                if (task.isApplyedToDate(date)) {
                    return task;
                }
            }
        }
        return null;
    }

    public getTasksCount(): number {
        return this._tasks.length;
    }

    public getByIndex(idx: number): Task | null {
        if (idx >= this._tasks.length || idx < 0) {
            return null;
        }
        return this._tasks[idx];
    }

    public getNextTask(currentTask: Task): Task | null {
        let currentLast: IMoment = currentTask.getEndDate();

        if (this._tasks.length > 0) {
            for (let i = 0; i < this._tasks.length; i++) {
                let task = this._tasks[i];
                let taskStart = task.getStartDate();
                if (currentLast.isLT(taskStart, 'y-m-d')) {
                    return task;
                }
            }
        }
        return null;
    }

    public getSpaseToNextTask(mmt: IMoment): number {
        let currentTask: Task | null = this.getTaskOnDate(mmt);
        if (!currentTask) {
            return 365;
        }
        let nextTask: Task | null = this.getNextTask(currentTask);
        if (!nextTask) {
            return 365;
        }

        return mmt.diff(nextTask.getStartDate()) - 1;
    }
}