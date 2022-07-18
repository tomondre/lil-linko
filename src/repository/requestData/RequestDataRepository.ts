import {IRequestDataRepository} from "./IRequestDataRepository";
import CallerData from "../../model/CallerData";
import PrismaClientProvider from "../../helper/provider/PrismaClientProvider";
import {PrismaClient} from "@prisma/client";

export default class RequestDataRepository implements IRequestDataRepository {
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = PrismaClientProvider.getClient();
    }

    async create(data: CallerData): Promise<void> {
        let promises: any = []

        promises.push(this.prismaClient.address.upsert({
            where: {
                country_city: {
                    country: data.address.country,
                    city: data.address.city
                }
            },
            update: {},
            create: {
                continent: data.address.continent,
                continentCode: data.address.continentCode,
                country: data.address.country,
                countryCode: data.address.countryCode,
                region: data.address.region,
                postalCode: data.address.postalCode,
                city: data.address.city
            }
        }))

        promises.push(this.prismaClient.timeZone.upsert({
            where: {
                abbreviation_isDst: {
                    abbreviation: data.timeZone.abbreviation,
                    isDst: data.timeZone.isDst
                }
            },
            update: {},
            create: {
                name: data.timeZone.name,
                abbreviation: data.timeZone.abbreviation,
                gmtOffset: data.timeZone.gmt_offset,
                isDst: data.timeZone.isDst
            }
        }));

        promises.push(this.prismaClient.currency.upsert({
            where: {
                code: data.currency.code
            },
            update: {},
            create: {
                code: data.currency.code,
                name: data.currency.name,
            }
        }));

        promises.push(this.prismaClient.connectionData.upsert({
            where: {
                asn_aso_connectionType_ispName_organizationName: {
                    asn: data.connectionData.asn,
                    aso: data.connectionData.aso,
                    connectionType: data.connectionData.connectionType,
                    ispName: data.connectionData.ispName,
                    organizationName: data.connectionData.organizationName
                }
            },
            update: {},
            create: {
                asn: data.connectionData.asn,
                aso: data.connectionData.aso,
                connectionType: data.connectionData.connectionType,
                ispName: data.connectionData.ispName,
                organizationName: data.connectionData.organizationName
            }
        }));
        await Promise.all(promises);

        var toCreate: any = {
            data: {
                ip: data.ip,
                date: data.date,
                previousSitesCount: data.previousSitesCount,
                browserName: data.browserName,
                language: data.language,
                platform: data.platform,
                screenWidth: data.screenWidth,
                screenHeight: data.screenHeight,
                colorDepth: data.colorDepth,
                longitude: data.longitude,
                latitude: data.latitude,
                address: {
                    connect: {
                        country_city: {
                            country: data.address.country,
                            city: data.address.city
                        }
                    }
                },
                timeZone: {
                    connect: {
                        abbreviation_isDst: {
                            abbreviation: data.timeZone.abbreviation,
                            isDst: data.timeZone.isDst
                        }
                    },
                },
                currency: {
                    connect: {
                        code: data.currency.code
                    }
                },
                connectionData: {
                    connect: {
                        asn_aso_connectionType_ispName_organizationName: {
                            asn: data.connectionData.asn,
                            aso: data.connectionData.aso,
                            connectionType: data.connectionData.connectionType,
                            ispName: data.connectionData.ispName,
                            organizationName: data.connectionData.organizationName
                        }
                    }
                }
            }
        }

        console.log(toCreate);
        await this.prismaClient.callerData.create(toCreate);
    }

}