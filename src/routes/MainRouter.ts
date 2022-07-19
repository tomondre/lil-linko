import {Application} from "express";
import indexRouter from "./IndexRouter";
import linkRouter from "./LinkRouter";
import dataRouter from "./DataRouter";
import healthCheckRouter from './HealthCheckRouter';
import * as express from "express";

export default class MainRouter {
    constructor(app: Application) {
        app.use(express.json());
        app.use('/links', linkRouter);
        app.use('/data', dataRouter)
        app.use('/', indexRouter);
        app.use('/healthCheck', healthCheckRouter);
    }
}