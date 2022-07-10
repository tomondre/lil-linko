import {Request} from "express";

export interface IRequestDataService {
    saveData(req: Request): Promise<void>;
}