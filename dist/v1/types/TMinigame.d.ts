import { TLocalizedString } from '../../lib/TLocalizedString';
import { TProgressionRank } from './TProgressionRank';
import { TResearcher } from './TResearcher';
import { TOrganization } from './TOrganization';
export type TMinigame = {
    id: number;
    code: string;
    theme: string;
    videogameId?: number;
    project?: string;
    name: TLocalizedString;
    description: TLocalizedString;
    category: string;
    url?: TLocalizedString;
    imageUrlList?: string[];
    research: {
        description: TLocalizedString;
        researchers: [
            {
                researcher: TResearcher;
                role?: TLocalizedString;
            }
        ];
        partners: [
            {
                partner: TOrganization;
                role?: TLocalizedString;
            }
        ];
        acknowledgements?: TLocalizedString;
    };
    settings: any;
    availability: {
        isListed: boolean;
        isAvailable: boolean;
        availabilityInfo?: TLocalizedString;
        availabilityDateFrom?: Date;
        availabilityDateTill?: Date;
    };
    effort: {
        meanSecondsPerDifficultyLevel: number[];
        sigmaSecondsPerDifficultyLevel: number[];
    };
    progression: {
        ranks?: TProgressionRank[];
    };
    throttling: {
        classificationsMinSeconds: number;
        classificationsMaxPerHour: number;
        classificationsMaxPerMDay: number;
    };
    stats: {
        classificationCount: number;
        classificationCountLastWeek: number;
        classificationCountLastMonth: number;
        playerCount: number;
        playerCountLastWeek: number;
        playerCountLasMonth: number;
        newPlayerCountLastWeek: number;
        newPlayerCountLastMonth: number;
    };
};
//# sourceMappingURL=TMinigame.d.ts.map