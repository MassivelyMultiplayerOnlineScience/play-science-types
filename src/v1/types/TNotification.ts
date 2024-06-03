import { TLocalizedString } from "../../lib/TLocalizedString";

export type TNotification = {
	id: string;

	minigameId?: number;
	rewardId?: number;

	timestamp: Date;
	priority: number;

	title: TLocalizedString;
	description?: TLocalizedString;
	url?: TLocalizedString;
}