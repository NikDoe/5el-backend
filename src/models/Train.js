import { EntitySchema } from 'typeorm';

export default new EntitySchema({
	name: 'Train',
	tableName: 'Trains',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		title: {
			type: 'varchar',
		},
		depFrom: {
			type: 'text',
		},
		arrivalTo: {
			type: 'text',
		},
		depTime: {
			type: 'time',
		},
		arrivalTime: {
			type: 'time',
		},
		inTheWay: {
			type: 'time',
		},
		seats: {
			type: 'int',
		},
		price: {
			type: 'real',
		},

	},
});