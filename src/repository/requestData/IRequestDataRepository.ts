import RequestData from "../../model/RequestData";

export interface IRequestDataRepository {
    create(data: RequestData): void;
}