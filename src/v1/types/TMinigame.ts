import { TLocalizedString } from '../../lib/TLocalizedString';

import { TProgressionRank } from './TProgressionRank';

import { TResearcher } from './TResearcher';
import { TOrganization } from './TOrganization';

export type TMinigame = {
	id: number;

	// In-app identifiers
	code: string; // Code for the minigame on the MMOS Play Science platform
	theme: string; // Code fot the theme of the minigame on the MMOS Play Science platform
	videogameId?: number; // Code of the partnering vidoegame on the MMOS Play Science platform

	// MMOS API identifiers
	project?: string; // Code of the project on the MMOS API

	// Core information
	name: TLocalizedString;
	description: TLocalizedString;
	category: string; // Category code on the MMOS Play Science platform
	url?: TLocalizedString;
	imageUrlList?: string[];

	// Research & collaboration information
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
		classificationsMaxPerDay: number;
	};

	stats: {
		classificationCount: number;
		classificationCountLastWeek: number;
		classificationCountLastMonth: number;
		playerCount: number;
		playerCountLastWeek: number;
		playerCountLastMonth: number;
		newPlayerCountLastWeek: number;
		newPlayerCountLastMonth: number;
	};
};
