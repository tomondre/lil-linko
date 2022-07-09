import Routes from "./routes/Routes";
import Express from "express";
import IndexController from "./controller/IndexController";
import {ILinkRepository} from "./repository/link/ILinkRepository";
import LinkRepository from "./repository/link/LinkRepostiory";
import LinkService from "./service/link/LinkService";
import {ILinkService} from "./service/link/ILinkService";
import LinkRoutes from "./routes/LinkRoutes";
import LinkController from "./controller/LinkController";
import IndexRoutes from "./routes/IndexRoutes";
import { PrismaClient } from '@prisma/client'

const app = Express();

//---------------Routes---------------
new Routes(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});