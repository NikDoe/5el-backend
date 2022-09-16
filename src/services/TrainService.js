import {ILike} from 'typeorm';
import {trainRepo} from '../utils/utils.js';

class TrainService {
	async createTrain(train) {
		const newTrain = trainRepo.create(train);
		await trainRepo.save(newTrain);
		return newTrain;
	}

	async allTrains({searchFrom, searchTo}) {
		let allTrains;
		if (!searchFrom && !searchTo) allTrains = trainRepo.find();
		if (searchFrom && !searchTo) allTrains = trainRepo.find({
			where: {depFrom: ILike(`%${searchFrom}%`)}
		});
		if (!searchFrom && searchTo) allTrains = trainRepo.find({
			where: {arrivalTo: ILike(`%${searchTo}%`)}
		});
		if (searchFrom && searchTo) allTrains = trainRepo.find({
			where: {depFrom: ILike(`%${searchFrom}%`), arrivalTo: ILike(`%${searchTo}%`)}
		});
		return allTrains;
	}
}

export default new TrainService();
