import trainService from '../services/TrainService.js';

class TrainController {
	async createTrain (req, res) {
		try {
			const train = await trainService.createTrain(req.body);
			return res.json(train);
		} catch (e) {
			console.log(e);
		}
	}

	async allTrains (req, res) {
		try {
			const trains = await trainService.allTrains(req.query);
			return res.json(trains);
		} catch (e) {
			console.log(e);
		}
	}
}

export default new TrainController();
