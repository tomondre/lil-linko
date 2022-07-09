export default class RequestData {
    private _ip: string;

    constructor(ip: string) {
        this._ip = ip;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(value: string) {
        this._ip = value;
    }
}