import {Request} from "express";
import CallerData from "../model/CallerData";
import abstractApiCall from "./AbstractApiCall";
import ConnectionData from "../model/ConnectionData";
import Currency from "../model/Currency";
import Timezone from "../model/Timezone";
import Address from "../model/Address";

export default async function (req: Request): Promise<CallerData> {
    let d: CallerData = req.body;
    let ip = req.clientIp;
    if (ip === undefined) {
        console.log('No IP found');
        return d;
    }

    d.ip = ip;

    try {
        let r = await abstractApiCall(ip);
        d.longitude = r.longitude;
        d.latitude = r.latitude;
        d.connectionData = new ConnectionData(r.connection.autonomous_system_number, r.connection.autonomous_system_organization, r.connection.connection_type, r.connection.isp_name, r.connection.organization_name);
        d.currency = new Currency(r.currency.currency_code, r.currency.currency_name);
        d.timeZone = new Timezone(r.timezone.name, r.timezone.abbreviation, r.timezone.gmt_offset, r.timezone.is_dst)
        d.address = new Address(r.continent, r.continent_code, r.country, r.continent_code, r.region, r.postal_code, r.city);
    } catch (e: any) {
        console.log(e.toString());
    }
    return d;
}