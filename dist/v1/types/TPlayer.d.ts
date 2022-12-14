import { TPlayerProject } from "./TPlayerProject";
import { TAchievementUnlock } from "./TAchievementUnlock";
import { TRewardTransaction } from "./TRewardTransaction";
import { OAuthProviderCode } from "./TPlayerOAuth";
import { TPlayerGame } from "./TPlayerGame";
import { TPlayerActivity } from "./TPlayerActivity";
export declare type TPlayer = {
    id: number;
    code: string;
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
    referralID?: string;
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
};
//# sourceMappingURL=TPlayer.d.ts.map