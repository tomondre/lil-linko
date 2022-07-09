import {IRequestDataRepository} from "./IRequestDataRepository";
import RequestData from "../../model/RequestData";
import PrismaClientProvider from "../../helper/provider/PrismaClientProvider";
import {PrismaClient} from "@prisma/client";

export default class RequestDataRepository implements IRequestDataRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    create(data: RequestData): void {
        console.log(data);
        //TODO: implement
    }

}