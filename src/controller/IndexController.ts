import {Request, Response, NextFunction} from 'express';
import {ILinkService} from "../service/link/ILinkService";
import ServiceProvider from "../helper/provider/ServiceProvider";
import getRedirectPage from "../helper/html/RedirectPage";
import {IRequestDataService} from "../service/requestData/IRequestDataService";
import indexPage from "../helper/html/IndexPage";

export default class IndexController {
    private linkService: ILinkService;
    private requestDataService: IRequestDataService;

    constructor() {
        this.linkService = ServiceProvider.getLinkService();
        this.requestDataService = ServiceProvider.getRequestDataService();
    }

    async indexPage(req: Request, res: Response, next: NextFunction) {
        try {
            let s = indexPage();
            res.send(s);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }

    async reroute(req: Request, res: Response, next: NextFunction) {
        try {
            if (req.params.linko == "favicon.ico") {
                return;
            }
            let link = await this.linkService.redirect(req.params.linko);
            res.send(getRedirectPage(link));
            this.requestDataService.saveData(req);
        } catch (e: any) {
            console.log(e);
            res.status(400);
            res.send(e.toString());
        }
    }
}
