import {IRequestDataRepository} from "./IRequestDataRepository";
import CallerData from "../../model/CallerData";
import PrismaClientProvider from "../../helper/provider/PrismaClientProvider";
import {PrismaClient} from "@prisma/client";

export default class RequestDataRepository implements IRequestDataRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    create(data: CallerData): void {
        console.log(data);
        //TODO: implement
    }

}