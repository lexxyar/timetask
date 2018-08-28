/// <reference path="KeyValuePair.ts" />

class KeyValuePairCollection {
    private _data: Array<KeyValuePair> = [];
    public constructor() {

    }
    public getSize(): number {
        return this._data.length;
    }

    public get(key: any): any {
        let idx = this.findKeyIndex(key);
        if (idx === false) {
            return null;
        }
        return this._data[idx].getValue();
    }

    public set(key: any, value: any) {
        let idx = this.findKeyIndex(key);
        let data = new KeyValuePair(key, value);
        if (idx === false) {
            this._data.push(data);
        } else {
            this._data[idx] = data;
        }
    }

    public getKeys(): Array<any> {
        let keys: Array<any> = [];
        if (this.getSize() >= 0) {
            for (let i = 0; i < this.getSize(); i++) {
                keys.push(this._data[i].getKey());
            }
        }
        return keys;
    }
    public getValues(): Array<any> {
        let values: Array<any> = [];
        if (this.getSize() >= 0) {
            for (let i = 0; i < this.getSize(); i++) {
                values.push(this._data[i].getValue());
            }
        }
        return values;
    }

    public sortByKeys() {
        this._data.sort((a: KeyValuePair, b: KeyValuePair) => {
            let aKey = a.getKey();
            let bKey = b.getKey();
            if (aKey < bKey) {
                return -1;
            }
            if (aKey > bKey) {
                return 1;
            }
            return 0;
        })
    }
    public sort(callbackFn?: any) {
        if (!callbackFn) {
            this._data.sort((a: KeyValuePair, b: KeyValuePair) => {
                let aKey = a.getValue();
                let bKey = b.getValue();
                if (aKey < bKey) {
                    return -1;
                }
                if (aKey > bKey) {
                    return 1;
                }
                return 0;
            });
        } else {
            this._data.sort(callbackFn);
        }
    }

    public has(key: any): boolean {
        return this.findKeyIndex(key) !== false;
    }

    private findKeyIndex(key: any): number | false {
        if (this.getSize() < 0) return false;
        for (let i = 0; i < this.getSize(); i++) {
            let kv = this._data[i];
            if (kv.getKey() == key) {
                return i;
            }
        }
        return false;
    }

    public toArray(): Array<KeyValuePair> {
        return this._data;
    }
}