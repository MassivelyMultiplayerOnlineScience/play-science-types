export declare enum ActivityCode {
    NEWS = "news",
    ALERT = "alert",
    PUBLICATIONS_SCIENTIFIC = "publications.scientific",
    PUBLICATIONS_POPULAR = "publications.popular",
    PLAYER_REGISTRATION = "player.registration",
    PLAYER_FRIEND_INVITED = "player.friend.invited",
    PLAYER_FRIEND_ACCEPTED = "player.friend.accepted",
    PLAYER_CLASSIFICATIONS = "player.classifications",
    PLAYER_WARNING = "player.warning",
    MINIGAME_CLASSIFICATIONS = "minigame.classifications",
    MINIGAME_PLAYERS = "minigame.players",
    REWARDS_ARRIVING = "rewards.news",
    REWARDS_LEAVING = "rewards.leaving"
}
export type TActivity = {
    id: number;
    timestamp: Date;
    playerId?: number;
    minigameId?: number;
    rewardId?: number;
    code: ActivityCode | string;
    details?: any;
};
//# sourceMappingURL=TActivity.d.ts.map