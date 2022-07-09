import RequestData from "../model/RequestData";
import ServiceProvider from "../helper/provider/ServiceProvider";
import RequestDataService from "../service/requestData/RequestDataService";
import {IRequestDataService} from "../service/requestData/IRequestDataService";
import {NextFunction, Request, Response} from "express";

export default class DataController {
    private requestDataService: IRequestDataService;

    constructor() {
        this.requestDataService = ServiceProvider.getRequestDataService();
    }

    createRequestData(req: Request, res: Response, next: NextFunction) {
        try {
            //TODO Remove
            console.log(req.body);
            this.requestDataService.saveData(req);
            res.send('OK');
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

}