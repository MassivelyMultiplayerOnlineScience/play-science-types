import { TLocalizedString } from '../../lib/TLocalizedString';
export type TReward = {
    id: number;
    code: string;
    provider: string;
    minigameId?: string;
    game?: string;
    category: TLocalizedString;
    name: TLocalizedString;
    description: TLocalizedString;
    url: TLocalizedString;
    imageUrl: string[];
    price: number;
    availability: {
        isListed: boolean;
        isAvailable: boolean;
        availabilityInfo?: TLocalizedString;
        availabilityDateFrom?: Date;
        availabilityDateTill?: Date;
    };
};
//# sourceMappingURL=TReward.d.ts.map