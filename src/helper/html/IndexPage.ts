import * as fs from "fs";

let indexPage: string;
fs.readFile("./assets/index.html", (err, data) => {
    let s = data.toString();
    indexPage = s.replace("{{HOST_URL}}", process.env.HOST_URL ?? "http://link.tomondre.com/");
});

export default function (): string {
    return indexPage;
}