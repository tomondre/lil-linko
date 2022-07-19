import MainRouter from "./routes/MainRouter";
import Express from "express";
import IndexController from "./controller/IndexController";
import {ILinkRepository} from "./repository/link/ILinkRepository";
import LinkRepository from "./repository/link/LinkRepostiory";
import LinkService from "./service/link/LinkService";
import {ILinkService} from "./service/link/ILinkService";
import LinkRoutes from "./routes/LinkRouter";
import LinkController from "./controller/LinkController";
import IndexRoutes from "./routes/IndexRouter";
import { PrismaClient } from '@prisma/client'

const app = Express();

//---------------MainRouter---------------
new MainRouter(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});