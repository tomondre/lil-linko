import Link from "../../model/Link";
import fs from "fs";

let redirectPage: string;
fs.readFile(__dirname + "/../../assets/redirect.html", (err, data) => {
    redirectPage = data.toString();
    redirectPage = redirectPage.replace("{{HOST_URL}}", process.env.HOST_URL ?? "http://link.tomondre.com/");
});

export default function getRedirectPage(link: Link): string {
    return redirectPage.replace("{{LINKO_URL}}", link.url);
}