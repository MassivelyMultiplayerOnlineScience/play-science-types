export type TProjectActivity = {
	id: number;
	type: string;
	priority: number;

	projectId?: number;

	date: Date;

	details?: any;
}