
import { TPlayerProject } from "./TPlayerProject";
import { TAchievementUnlock } from "./TAchievementUnlock";
import { TRewardTransaction } from "./TRewardTransaction";
import { OAuthProviderCode } from "./TPlayerOAuth";
import { TPlayerGame } from "./TPlayerGame";
import { TPlayerActivity } from "./TPlayerActivity";

export type TPlayer = {
	id: number;  // Primary key in the mmmos-proxy-api
	code: string; // Player code for the mmos-api

	oAuthProviderCode?: OAuthProviderCode;
	oAuthName?: string;
	oAuthImageURL?: string;
	oAuthEmail?: string;

	profileNick?: string;
	profileDoB?: Date;
	profileGender?: string;
	profileNationality?: string;
	profileImageURL?: string;

	games?: TPlayerGame[];
	projects?: TPlayerProject[];

	referralID?: string; // deferred deep linking
	referralContext?: any;
	referralPlayerID: string;

	banned: boolean;
	suspened: boolean;
	suspensionTill: Date;

	activities?: TPlayerActivity[];

	achievements?: TAchievementUnlock[];

	tokenBalance: number;
	rewardTransactions?: TRewardTransaction[];

	usageStat?: any;
}