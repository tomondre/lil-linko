import {ILinkService} from "./ILinkService";
import Link from "../../model/Link";
import {ILinkRepository} from "../../repository/link/ILinkRepository";
import RepositoryProvider from "../../helper/provider/RepositoryProvider";
import RequestDataParser from "../../helper/RequestDataParser";

export default class LinkService implements ILinkService {

    private linkRepository: ILinkRepository;

    constructor() {
        this.linkRepository = RepositoryProvider.getLinkRepository();
    }

    createLink(url: string): Promise<Link> {
        return this.linkRepository.createLink(url);
    }

    redirect(id: string): Promise<Link> {
        return this.linkRepository.getLink(id);
    }

    getLinks(): Promise<Link[]> {
        return this.linkRepository.getLinks();
    }
}