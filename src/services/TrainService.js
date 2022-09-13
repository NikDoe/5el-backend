import { trainRepo } from '../utils/utils.js';

class TrainService {
	async createTrain (train) {
		const newTrain = trainRepo.create(train);
		await trainRepo.save(newTrain);
		return newTrain;
	}

	async allTrains ({ query }) {
		let allTrains;
		if (!query) allTrains = trainRepo.find();
		return allTrains;
	}
}

export default new TrainService();
