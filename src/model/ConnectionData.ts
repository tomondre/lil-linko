
export default class ConnectionData {
    private _asn: number
    private _aso: string;
    private _connectionType: string;
    private _ispName: string;
    private _organizationName: string;

    constructor(asn: number, aso: string, connectionType: string, ispName: string, organizationName: string) {
        this._asn = asn;
        this._aso = aso;
        this._connectionType = connectionType;
        this._ispName = ispName;
        this._organizationName = organizationName;
    }

    get asn(): number {
        return this._asn;
    }

    set asn(value: number) {
        this._asn = value;
    }

    get aso(): string {
        return this._aso;
    }

    set aso(value: string) {
        this._aso = value;
    }

    get connectionType(): string {
        return this._connectionType;
    }

    set connectionType(value: string) {
        this._connectionType = value;
    }

    get ispName(): string {
        return this._ispName;
    }

    set ispName(value: string) {
        this._ispName = value;
    }

    get organizationName(): string {
        return this._organizationName;
    }

    set organizationName(value: string) {
        this._organizationName = value;
    }
}