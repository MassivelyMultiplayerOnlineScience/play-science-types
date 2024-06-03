export type TPlayerTransaction = {
	id: number;
	playerId: number;
	rewardId: number;

	uid: string;

	// Info at the time of the transaction
	providerId: string;
	price: number;

	status: {
		isCompleted: boolean;
		isCancelled: boolean;

		timestampInitiated: Date;
		timestampProviderConfirmed?: Date;
		timestampCompleted?: Date;
	};

	details?: any;
}