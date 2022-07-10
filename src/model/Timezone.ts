export default class Timezone {
    private _name: string;
    private _abbreviation: string;
    private _gmt_offset: number;
    private _isDst: boolean

    constructor(name: string, abbreviation: string, gmt_offset: number, isDst: boolean) {
        this._name = name;
        this._abbreviation = abbreviation;
        this._gmt_offset = gmt_offset;
        this._isDst = isDst;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get abbreviation(): string {
        return this._abbreviation;
    }

    set abbreviation(value: string) {
        this._abbreviation = value;
    }

    get gmt_offset(): number {
        return this._gmt_offset;
    }

    set gmt_offset(value: number) {
        this._gmt_offset = value;
    }

    get isDst(): boolean {
        return this._isDst;
    }

    set isDst(value: boolean) {
        this._isDst = value;
    }
}