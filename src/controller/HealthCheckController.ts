import {NextFunction, Request, Response} from "express";


export default class HealthCheckController {
    async healthCheck(req: Request, res: Response, next: NextFunction) {
        res.send("I am alive!");
    }
}