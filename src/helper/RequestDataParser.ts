import {Request} from "express";
import RequestData from "../model/RequestData";

export default function(req: Request) {
    let ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'][0] : req.socket.remoteAddress;
    // @ts-ignore
    return new RequestData(ip);
}