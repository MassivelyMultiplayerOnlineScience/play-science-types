export type TPlayerTransaction = {
    id: number;
    playerId: number;
    rewardId: number;
    uid: string;
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
};
//# sourceMappingURL=TPlayerTransaction.d.ts.map