import { TAchievement } from "./TAchievement";
import { TLocalizedString } from "../../lib/TLocalizedString";
import { TProjectActivity } from "./TProjectActivity";

export type TProject = {
	id: number;
	code: string;

	category: TLocalizedString;
	url: TLocalizedString;
	imageURLList: string[];

	name: TLocalizedString;
	description: TLocalizedString;
	researchPartner: TLocalizedString;
	researchGoal: TLocalizedString;
	researchPI: string;
	sponsor: TLocalizedString;

	//TODO: Revise
	isListed: boolean;
	isPlayable: boolean;
	availabilityInfo: TLocalizedString;

	activities?: TProjectActivity[];

	achievements?: TAchievement[];
}