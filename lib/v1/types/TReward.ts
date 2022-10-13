import { TLocalizedString } from "./TLocalizedString";

export type TReward = {
	id: number;
	code: string;

	providerId: number;

	projectId?: string;
	gameId?: string;

	category: TLocalizedString;
	url: TLocalizedString;
	imageURL: TLocalizedString;
	title: TLocalizedString;
	description: TLocalizedString;

	price: number;

	isListed: boolean;
	isAvailable: boolean;
	availabilityInfo?: TLocalizedString;
	availabilityDateFrom?: Date;
	availabilityDateTill?: Date;
}