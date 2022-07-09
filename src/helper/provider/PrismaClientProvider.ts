import {PrismaClient} from "@prisma/client";

export default class PrismaClientProvider {
    private static client: PrismaClient;

    private constructor() {}

    static getClient(): PrismaClient {
        if (this.client == undefined) {
            this.client = new PrismaClient();
        }
        return this.client;
    }
}