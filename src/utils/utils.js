import {AppDataSource} from "../db.js";
import Train from "../models/Train.js";

export const trainRepo = AppDataSource.getRepository(Train);