import {Application} from "express";
import indexRoutes from "./IndexRoutes";
import linkRoutes from "./LinkRoutes";

export default class Routes {
    constructor(app: Application) {
        app.use('/links', linkRoutes);
        app.use('/', indexRoutes);
    }
}