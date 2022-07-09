import {ILinkRepository} from "./ILinkRepository";
import Link from "../../model/Link";
import PrismaClientProvider from "../../helper/provider/PrismaClientProvider";
import {PrismaClient} from "@prisma/client";

export default class LinkRepository implements ILinkRepository {

    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async createLink(url: string): Promise<Link> {
        return this.prismaClient.link.create({
            data: {
                url: url
            }
        });
    }

    getLink(id: string): Promise<Link> {
        return this.prismaClient.link.findUniqueOrThrow({
            where: {
                id: id
            }
        });
    }

    getLinks(): Promise<Link[]> {
        return this.prismaClient.link.findMany();
    }
}