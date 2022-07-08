import { Request, Response, NextFunction } from 'express';

export default class IndexController {
    constructor() {}

    async routeUrl(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Hello World!');
        } catch (e) {
            console.log(e);
        }
    }

}
