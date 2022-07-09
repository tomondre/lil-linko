import {IRequestDataService} from "./IRequestDataService";
import {Request} from "express";
import {IRequestDataRepository} from "../../repository/requestData/IRequestDataRepository";
import RepositoryProvider from "../../helper/provider/RepositoryProvider";
import requestDataParser from "../../helper/RequestDataParser";
import RequestData from "../../model/RequestData";

export default class RequestDataService implements IRequestDataService{
    private requestDataRepository: IRequestDataRepository;

    constructor() {
        this.requestDataRepository = RepositoryProvider.getRequestDataRepository();
    }

    saveData(req: Request): void {
        let requestData = requestDataParser(req);
        this.requestDataRepository.create(requestData);
    }
}