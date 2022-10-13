import { TLocalizedString } from "./TLocalizedString";

export enum ServiceNotificationType {
	GENERAL,
	GAME,
	PROJECT,
	PROJECTS,
	REWARD,
	REWARDS,
	PLAYER
}

export type TServiceNotification = {
	id: string;
	type: ServiceNotificationType;

	date: Date;
	priority: number;

	title?: TLocalizedString;
	description?: TLocalizedString;
	url?: TLocalizedString;

	gameId?: string;
	projectId?: string;
}