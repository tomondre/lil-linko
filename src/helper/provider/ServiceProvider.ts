import {ILinkService} from "../../service/link/ILinkService";
import LinkService from "../../service/link/LinkService";
import {IRequestDataService} from "../../service/requestData/IRequestDataService";
import RequestDataService from "../../service/requestData/RequestDataService";

export default class ServiceProvider {
    private static linkService: ILinkService;
    private static requestDataService: IRequestDataService;

    private constructor() {}

    static getLinkService(): ILinkService {
        if (!this.linkService) {
            this.linkService = new LinkService();
        }
        return this.linkService;
    }

    static getRequestDataService(): IRequestDataService {
        if (!this.requestDataService) {
            this.requestDataService = new RequestDataService();
        }
        return this.requestDataService;
    }

}