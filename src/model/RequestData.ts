export default class RequestData {
    private _ip: string;
    private _date: Date;

    constructor(ip: string, date: Date) {
        this._ip = ip;
        this._date = date;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(value: string) {
        this._ip = value;
    }
}