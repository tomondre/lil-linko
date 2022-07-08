import {Router} from "express";
import IndexController from "../controller/IndexController";

class IndexRoutes {
    router: Router = Router();
    indexController: IndexController = new IndexController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.indexController.indexPage);
        this.router.route('/:linko').get(this.indexController.reroute);
    }
}

export default new IndexRoutes().router;