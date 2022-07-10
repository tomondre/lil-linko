import ServiceProvider from "../helper/provider/ServiceProvider";
import Timezone from "./Timezone";


export default class BodyAbstractApi {
    ip_address: string;
    city: string;
    region: string;
    postal_code: string
    country: string;
    country_code: string;
    continent: string;
    continent_code: string;
    longitude: number;
    latitude: number;
    security: SecurityAbstractApi;
    timezone: TimeZoneAbstractApi
    currency: CurrencyAbstractApi
    connection: ConnectionAbstractApi;

    constructor(ip_address: string, city: string, region: string, postal_code: string, country: string, country_code: string, continent: string, continent_code: string, longitude: number, latitude: number, security: SecurityAbstractApi, timezone: TimeZoneAbstractApi, currency: CurrencyAbstractApi, connection: ConnectionAbstractApi) {
        this.ip_address = ip_address;
        this.city = city;
        this.region = region;
        this.postal_code = postal_code;
        this.country = country;
        this.country_code = country_code;
        this.continent = continent;
        this.continent_code = continent_code;
        this.longitude = longitude;
        this.latitude = latitude;
        this.security = security;
        this.timezone = timezone;
        this.currency = currency;
        this.connection = connection;
    }
}

class ConnectionAbstractApi {
    autonomous_system_number: number;
    autonomous_system_organization: string;
    connection_type: string;
    isp_name: string;
    organization_name: string;

    constructor(autonomous_system_number: number, autonomous_system_organization: string, connection_type: string, isp_name: string, organization_name: string) {
        this.autonomous_system_number = autonomous_system_number;
        this.autonomous_system_organization = autonomous_system_organization;
        this.connection_type = connection_type;
        this.isp_name = isp_name;
        this.organization_name = organization_name;
    }
}

class CurrencyAbstractApi {
    currency_name: string;
    currency_code: string;

    constructor(currency_name: string, currency_code: string) {
        this.currency_name = currency_name;
        this.currency_code = currency_code;
    }
}

class TimeZoneAbstractApi {
    name: string;
    abbreviation: string;
    gmt_offset: number;
    is_dst: boolean;

    constructor(name: string, abbreviation: string, gmt_offset: number, is_dst: boolean) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.gmt_offset = gmt_offset;
        this.is_dst = is_dst;
    }
}

class SecurityAbstractApi {
    is_vpn: boolean

    constructor(is_vpn: boolean) {
        this.is_vpn = is_vpn;
    }
}