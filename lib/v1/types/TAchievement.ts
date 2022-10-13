import { TLocalizedString } from "./TLocalizedString";

export type TAchievement = {
	id: number;
	code: string;

	isProjectAchievement: boolean;

	name: TLocalizedString;
	description: TLocalizedString;
}