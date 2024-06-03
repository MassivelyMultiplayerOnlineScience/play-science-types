
export type TPlayerThrottling = {
    id: number;

    playerId: number;
    minigameId: number;

    timestamp: Date;

    footprint1min: string;
    count1min: number;

    footprint1hour: string;
    count1hour: number;

    footprint1day: string;
    count1day: number;
}