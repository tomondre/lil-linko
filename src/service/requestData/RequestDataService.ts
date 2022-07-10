import {IRequestDataService} from "./IRequestDataService";
import {Request} from "express";
import {IRequestDataRepository} from "../../repository/requestData/IRequestDataRepository";
import RepositoryProvider from "../../helper/provider/RepositoryProvider";
import requestDataParser from "../../helper/RequestDataParser";
import CallerData from "../../model/CallerData";

export default class RequestDataService implements IRequestDataService{
    private requestDataRepository: IRequestDataRepository;

    constructor() {
        this.requestDataRepository = RepositoryProvider.getRequestDataRepository();
    }

    async saveData(req: Request): Promise<void> {
        let requestData = await requestDataParser(req);
        this.requestDataRepository.create(requestData);
    }
}