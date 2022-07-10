import CallerData from "../../model/CallerData";

export interface IRequestDataRepository {
    create(data: CallerData): void;
}