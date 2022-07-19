import {Router} from "express";
import HealthCheckController from "../controller/HealthCheckController";

class HealthCheckRouter {
    router: Router = Router();
    healthCheckController: HealthCheckController = new HealthCheckController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.route('/').get(((req, res, next) => this.healthCheckController.healthCheck(req, res, next)));
    }
}

export default new HealthCheckRouter().router