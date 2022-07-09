import Link from "../../model/Link";

export default function getRedirectPage(link: Link): string {
    return '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<title>Redirect me</title>' +
        '<meta http-equiv = "refresh" content = "0;URL=' + link.url + '"/>' +
        '</head>' +
        '<body>' +
        '</body>' +
        '</html>'
}