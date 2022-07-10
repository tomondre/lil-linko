import {ILinkRepository} from "./ILinkRepository";
import Link from "../../model/Link";
import PrismaClientProvider from "../../helper/provider/PrismaClientProvider";
import {PrismaClient} from "@prisma/client";
import shortid from 'shortid'

export default class LinkRepository implements ILinkRepository {

    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async createLink(url: string): Promise<Link> {
        let shortId: string = shortid();
        return this.prismaClient.link.create({
            data: {
                id: shortId,
                url: url
            }
        });
    }

    getLink(id: string): Promise<Link> {
        //TODO fetch only existing one - the one with is valid set to true
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