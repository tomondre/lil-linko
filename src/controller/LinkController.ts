import {NextFunction, Request, Response} from "express";
import {ILinkService} from "../service/link/ILinkService";
import ServiceProvider from "../helper/provider/ServiceProvider";

export default class LinkController {
    private linkService: ILinkService;

    constructor() {
        this.linkService = ServiceProvider.getLinkService();
    }

    async createLink(req: Request, res: Response, next: NextFunction) {
        try {
            let link = await this.linkService.createLink(req.body.url);
            res.json(link);
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }

    async removeLink(req: Request, res: Response, next: NextFunction) {
        try {
            //TODO
            res.send('Remove Link');
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }

    async getLinks(req: Request, res: Response, next: NextFunction) {
        try {
            let links = await this.linkService.getLinks();
            res.json(links);
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }
}