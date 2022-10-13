import { TLocalizedString } from "./TLocalizedString";

export type TRewardProvider = {
	id: number;
	code: string;
	name: TLocalizedString;

	transactionManagerDetails?: any;
}