import Link from "../../model/Link";

export interface ILinkService {
    redirect(id: string): Promise<Link>;
    getLinks(): Promise<Link[]>;
    createLink(url: string): Promise<Link>;
}