
export default class Currency{
    private _code: string;
    private _name: string;

    constructor(code: string, name: string) {
        this._code = code;
        this._name = name;
    }


    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}