import { TPlayerTransaction } from "./TPlayerTransaction";
import { OAuthProviderCode, TPlayerOAuth } from "./TPlayerOAuth";
export type TPlayer = {
    id: number;
    code: string;
    nick: string;
    dob?: Date;
    gender?: string;
    countryCode?: string;
    languageCode?: string;
    avatarURL?: string;
    lastNotificationId: number;
    tokens: number;
    transactions?: TPlayerTransaction[];
    minigames: {
        id: number;
        started: Date;
        lastPlayed: Date;
        classificationCount: number;
        classificationCountLastWeek: number;
        classificationCountLastMonth: number;
        accuracyScore: number;
    }[];
    authentication: {
        oAuthProviderCode?: OAuthProviderCode;
        oAuthName?: string;
        oAuthImageURL?: string;
        oAuthEmail?: string;
        oauths?: TPlayerOAuth[];
    };
    referral: {
        id?: string;
        context?: any;
        inviterPlayerID?: string;
    };
    watchdog: {
        markedAsSuspicious: boolean;
        markedAsBot: boolean;
        banned: boolean;
        suspended: boolean;
        suspensionTill: Date;
    };
    friends?: {
        playerId: number;
        timestamp: Date;
    }[];
    foes?: {
        playerId: number;
        timestamp: Date;
    }[];
    points: number;
    rank: number;
    achievements?: {
        id: number;
        timestamp: Date;
        minigameId?: number;
    }[];
};
//# sourceMappingURL=TPlayer.d.ts.map