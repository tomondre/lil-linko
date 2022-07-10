export default class Link {
    id: string;
    url: string;
    isValid: boolean;

    constructor(id: string, url: string, isValid: boolean) {
        this.id = id;
        this.url = url;
        this.isValid = isValid;
    }
}