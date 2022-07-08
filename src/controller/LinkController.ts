import {NextFunction, Request, Response} from "express";

export default class LinkController {
    constructor() {}

    async createLink(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Create Link');
        } catch (e) {
            console.log(e);
        }
    }

    async removeLink(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Remove Link');
        } catch (e) {
            console.log(e);
        }
    }

    async getLinks(req: Request, res: Response, next: NextFunction) {
        try {
            res.send('Get Links');
        } catch (e) {
            console.log(e);
        }
    }
}