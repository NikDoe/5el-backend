import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 9001;

app.use(bodyParser.json());
app.use(cors());

const start = () => {
	try {
		app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();