class TrainController {
	async createTrain(req, res) {
		try {
			res.send('новый поезд создан');
		} catch (e) {
			console.log(e);
		}
	}

	async allTrains(req, res) {
		try {
			res.send('все поезда');
		} catch (e) {
			console.log(e);
		}
	}
}

export default new TrainController();