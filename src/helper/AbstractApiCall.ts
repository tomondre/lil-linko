import BodyAbstractApi from "../model/BodyAbstractApi";
import Fetch, {Response} from "node-fetch"

export default async function (ip: string): Promise<BodyAbstractApi> {
    let url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&ip_address=${ip}`;
    let response: Response = await Fetch(url);

    // @ts-ignore
    let abstractApiData: BodyAbstractApi = await response.json();
    return abstractApiData;
}

