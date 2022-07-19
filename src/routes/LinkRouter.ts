import {Router} from "express";
import IndexController from "../controller/IndexController";
import LinkController from "../controller/LinkController";

class LinkRouter {
    router: Router = Router();
    linkController: LinkController = new LinkController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res, next) => this.linkController.getLinks(req, res, next)));
        this.router.route('/').post(((req, res, next) => this.linkController.createLink(req, res, next)));
        this.router.route('/:id').delete(((req, res, next) => this.linkController.removeLink(req, res, next)));
    }
}

export default new LinkRouter().router;