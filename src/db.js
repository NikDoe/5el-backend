import {DataSource} from 'typeorm';
import Train from './models/Train.js';
import Booking from './models/Booking.js';

export const AppDataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	},
	entities: [
		Train,
		Booking
	],
	synchronize: true,
	logging: false
});
