import { TLocalizedString } from "../../lib/TLocalizedString";

export type TRewardProvider = {
	id: number;
	code: string;
	name: TLocalizedString;

	transactionManagerDetails?: any;
}