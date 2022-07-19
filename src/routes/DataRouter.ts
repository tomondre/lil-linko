import {Router} from "express";
import DataController from "../controller/DataController";

class DataRouter {
    router: Router = Router();
    dataController: DataController = new DataController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').post(((req, res, next) => this.dataController.createRequestData(req, res, next)));
    }
}
export default new DataRouter().router