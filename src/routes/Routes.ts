import {Application} from "express";
import indexRoutes from "./IndexRoutes";
import linkRoutes from "./LinkRoutes";
import * as express from "express";

export default class Routes {
    constructor(app: Application) {
        app.use(express.json());
        app.use('/links', linkRoutes);
        app.use('/', indexRoutes);
    }
}