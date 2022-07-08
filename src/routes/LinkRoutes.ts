import {Router} from "express";
import IndexController from "../controller/IndexController";
import LinkController from "../controller/LinkController";

class LinkRoutes {
    router: Router = Router();
    linkController: LinkController = new LinkController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.linkController.getLinks);
        this.router.route('/').post(this.linkController.createLink);
        this.router.route('/:id').delete(this.linkController.removeLink);
    }
}

export default new LinkRoutes().router;