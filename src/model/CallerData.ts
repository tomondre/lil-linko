import internal from "stream";
import Address from "./Address";
import Timezone from "./Timezone";
import Currency from "./Currency";
import ConnectionData from "./ConnectionData";

export default class CallerData {
    /**
     * {
  ip: 192.168.1.1
  timeOpened: '2022-07-10T17:43:28.383Z',
  timezone: -2,
  previousSitesCount: 3,
  browserName: 'chrome',
  language: 'en-GB',
  platform: 'Win32',
  screenWidth: 1536,
  screenHeight: 864,
  colorDepth: 24
}
     */

    private _ip: string;
    private _date: Date;
    private _previousSitesCount: number;
    private _browserName: string;
    private _language: string;
    private _platform: string;
    private _screenWidth: number
    private _screenHeight: number;
    private _colorDepth: number;
    private _address: Address;
    private _longitude: number
    private _latitude: number;
    private _timeZone: Timezone;
    private _currency: Currency;
    private _connectionData: ConnectionData;


    constructor(ip: string, date: Date, previousSitesCount: number, browserName: string, language: string, platform: string, screenWidth: number, screenHeight: number, colorDepth: number, address: Address, longitude: number, latitude: number, timeZone: Timezone, currency: Currency, connectionData: ConnectionData) {
        this._ip = ip;
        this._date = date;
        this._previousSitesCount = previousSitesCount;
        this._browserName = browserName;
        this._language = language;
        this._platform = platform;
        this._screenWidth = screenWidth;
        this._screenHeight = screenHeight;
        this._colorDepth = colorDepth;
        this._address = address;
        this._longitude = longitude;
        this._latitude = latitude;
        this._timeZone = timeZone;
        this._currency = currency;
        this._connectionData = connectionData;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(value: string) {
        this._ip = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get previousSitesCount(): number {
        return this._previousSitesCount;
    }

    set previousSitesCount(value: number) {
        this._previousSitesCount = value;
    }

    get browserName(): string {
        return this._browserName;
    }

    set browserName(value: string) {
        this._browserName = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }

    get platform(): string {
        return this._platform;
    }

    set platform(value: string) {
        this._platform = value;
    }

    get screenWidth(): number {
        return this._screenWidth;
    }

    set screenWidth(value: number) {
        this._screenWidth = value;
    }

    get screenHeight(): number {
        return this._screenHeight;
    }

    set screenHeight(value: number) {
        this._screenHeight = value;
    }

    get colorDepth(): number {
        return this._colorDepth;
    }

    set colorDepth(value: number) {
        this._colorDepth = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get longitude(): number {
        return this._longitude;
    }

    set longitude(value: number) {
        this._longitude = value;
    }

    get latitude(): number {
        return this._latitude;
    }

    set latitude(value: number) {
        this._latitude = value;
    }

    get timeZone(): Timezone {
        return this._timeZone;
    }

    set timeZone(value: Timezone) {
        this._timeZone = value;
    }

    get currency(): Currency {
        return this._currency;
    }

    set currency(value: Currency) {
        this._currency = value;
    }

    get connectionData(): ConnectionData {
        return this._connectionData;
    }

    set connectionData(value: ConnectionData) {
        this._connectionData = value;
    }
}

