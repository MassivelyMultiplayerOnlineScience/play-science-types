import { TAchievementUnlock } from "./TAchievementUnlock";

export type TPlayerProject = {
	id: number;

	playerId: number;
	projectId: number;

	dateLastOpened?: Date;

	classificationsCount: number;
	classificationsCountLastWeek: number;
	classificationsCountLastMonth: number;

	point: number;
	rank: number;
	pointsInRank: number;
	pointsToNextRank: number;
	score: number;

	achievements?: TAchievementUnlock[];
}