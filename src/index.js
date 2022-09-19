import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppDataSource } from './db.js';
import router from './router/appRouter.js';

const app = express();
const PORT = process.env.PORT || 9001;

const domainsFromEnv = process.env.CORS_DOMAINS || '';

const whitelist = domainsFromEnv.split(',').map(item => item.trim());

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api', router);

const start = async () => {
	try {
		await AppDataSource.initialize()
			.then(() => {
				console.log('база данных подключена');
			})
			.catch(error => console.log(error));

		app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
