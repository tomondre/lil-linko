import {Router} from "express";
import IndexController from "../controller/IndexController";

class IndexRouter {
    router: Router = Router();
    indexController: IndexController = new IndexController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(((req, res, next) => this.indexController.indexPage(req, res, next)));
        this.router.route('/:linko').get(((req, res, next) => this.indexController.reroute(req, res, next)));
    }
}

export default new IndexRouter().router;