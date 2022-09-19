import {AppDataSource} from "../db.js";
import Train from "../models/Train.js";
import Booking from "../models/Booking.js";

export const trainRepo = AppDataSource.getRepository(Train);
export const bookingRepo = AppDataSource.getRepository(Booking);