export default class Address {
    private _continent: string;
    private _continentCode: string;
    private _country: string;
    private _countryCode: string;
    private _region: string;
    private _postalCode: string;
    private _city: string;


    constructor(continent: string, continentCode: string, country: string, countryCode: string, region: string, postalCode: string, city: string) {
        this._continent = continent;
        this._continentCode = continentCode;
        this._country = country;
        this._countryCode = countryCode;
        this._region = region;
        this._postalCode = postalCode;
        this._city = city;
    }


    get continent(): string {
        return this._continent;
    }

    set continent(value: string) {
        this._continent = value;
    }

    get continentCode(): string {
        return this._continentCode;
    }

    set continentCode(value: string) {
        this._continentCode = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    get countryCode(): string {
        return this._countryCode;
    }

    set countryCode(value: string) {
        this._countryCode = value;
    }

    get region(): string {
        return this._region;
    }

    set region(value: string) {
        this._region = value;
    }

    get postalCode(): string {
        return this._postalCode;
    }

    set postalCode(value: string) {
        this._postalCode = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }
}