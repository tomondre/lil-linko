import {ILinkRepository} from "../../repository/link/ILinkRepository";
import LinkRepository from "../../repository/link/LinkRepostiory";
import {IRequestDataRepository} from "../../repository/requestData/IRequestDataRepository";
import RequestDataRepository from "../../repository/requestData/RequestDataRepository";

export default class RepositoryProvider {
    private static linkRepository: ILinkRepository;
    private static requestDataRepository: IRequestDataRepository;

    private constructor() {}

    static getLinkRepository(): ILinkRepository {
        if (!this.linkRepository) {
            this.linkRepository = new LinkRepository();
        }
        return this.linkRepository;
    }

    static getRequestDataRepository(): IRequestDataRepository {
        if (!this.requestDataRepository) {
            this.requestDataRepository = new RequestDataRepository();
        }
        return this.requestDataRepository;
    }
}