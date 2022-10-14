// Project specific objects are defined as interfaces and extended by project modules

export interface IClassification {
	game: string;
	player: string;
	playergroup: string | null;
	task: {
		id: number;
		result: any
	};
	circumstances: any
}
