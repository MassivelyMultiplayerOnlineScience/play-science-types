export type TClassificationsCreateRequest = {
    dummy: string
}
export type TClassificationsCreateResponse = {
	uid: string, player: {
		score: number;
		scoreChange: number;
		points: number;
		pointsChange: number;
		rank: number,
		rankChange: number,
		classificationCount: number,
		classificationCountChange: number,
		classificationQuality: number,
		rankPointPercentage: number,
		rankPointPercentageChange: number,
		scoredAt: Date;
	}
}