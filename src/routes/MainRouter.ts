import {Application} from "express";
import indexRouter from "./IndexRouter";
import linkRouter from "./LinkRouter";
import dataRouter from "./DataRouter";
import healthCheckRouter from './HealthCheckRouter';
import * as express from "express";
import requestIp from "request-ip";

export default class MainRouter {
    constructor(app: Application) {
        app.use(express.json());
        app.use(requestIp.mw());
        app.use('/healthCheck', healthCheckRouter);
        app.use('/links', linkRouter);
        app.use('/data', dataRouter)
        app.use('/', indexRouter);
    }
}