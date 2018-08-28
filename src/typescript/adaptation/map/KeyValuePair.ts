class KeyValuePair {
    public constructor(private key: string, private value: any) {
    }

    public getKey(): string {
        return this.key;
    }
    public setKey(k: string) {
        this.key = k;
    }
    public getValue(): any {
        return this.value;
    }
    public setValue(v: any) {
        this.value = v;
    }
}