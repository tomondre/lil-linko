import * as fs from "fs";

let indexPage: string;
fs.readFile(__dirname + "/../../assets/index.html", (err, data) => {
    let s = data.toString();
    indexPage = s.replace("{{HOST_URL}}", process.env.HOST_URL ?? "http://link.tomondre.com/");
});

export default function (): string {
    return indexPage;
}