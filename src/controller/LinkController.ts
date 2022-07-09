import {NextFunction, Request, Response} from "express";
import {ILinkService} from "../service/link/ILinkService";
import ServiceProvider from "../helper/provider/ServiceProvider";
import Validator from "../helper/Validator";

export default class LinkController {
    private linkService: ILinkService;

    constructor() {
        this.linkService = ServiceProvider.getLinkService();
    }

    async createLink(req: Request, res: Response, next: NextFunction) {
        try {
            if (!Validator.isValidUrl(req.body.url)) {
                throw new Error('Invalid URL');
            }
            let link = await this.linkService.createLink(req.body.url);
            res.json(link);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async removeLink(req: Request, res: Response, next: NextFunction) {
        try {
            //TODO
            res.send('Remove Link');
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async getLinks(req: Request, res: Response, next: NextFunction) {
        try {
            let links = await this.linkService.getLinks();
            res.json(links);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}