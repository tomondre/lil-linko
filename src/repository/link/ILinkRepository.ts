import Link from "../../model/Link";

export interface ILinkRepository {
    getLink(id: string): Promise<Link>;
    getLinks(): Promise<Link[]>;
    createLink(url: string): Promise<Link>;
    removeLink(id: string): Promise<Link>;
}