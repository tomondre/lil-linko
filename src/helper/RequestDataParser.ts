import {Request} from "express";
import RequestData from "../model/RequestData";

export default function(req: Request) {
    let requestData: RequestData = JSON.parse(req.body);
    requestData.ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'][0] : req.socket.remoteAddress ?? "";
    return requestData;
}