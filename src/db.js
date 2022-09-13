import { DataSource } from 'typeorm';
import Train from "./models/Train.js";

export const AppDataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	},
	entities: [Train],
	synchronize: true,
	logging: false,
});