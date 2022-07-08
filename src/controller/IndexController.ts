import { Request, Response, NextFunction } from 'express';

export default class IndexController {
    constructor() {}

    async indexPage(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Home Page!');
        } catch (e) {
            console.log(e);
        }
    }

    async reroute(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Reroute from: ' + req.params.linko);
        } catch (e) {
            console.log(e);
        }
    }

}
