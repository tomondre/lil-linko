import {Request, Response, NextFunction} from 'express';
import {ILinkService} from "../service/link/ILinkService";
import ServiceProvider from "../helper/provider/ServiceProvider";
import Link from "../model/Link";
import getRedirectPage from "../helper/RedirectPage";
import {IRequestDataService} from "../service/requestData/IRequestDataService";

export default class IndexController {
    private linkService: ILinkService;
    private requestDataService: IRequestDataService;

    constructor() {
        this.linkService = ServiceProvider.getLinkService();
        this.requestDataService = ServiceProvider.getRequestDataService();
    }

    async indexPage(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Home Page!');
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }

    async reroute(req: Request, res: Response, next: NextFunction) {
        try {
            let link = await this.linkService.redirect(req.params.linko);
            res.send(getRedirectPage(link));
            this.requestDataService.saveData(req);
        } catch (e) {
            console.log(e);
            res.send('Error: ' + e);
        }
    }
}
