export declare enum OAuthProviderCode {
    APPLE = "apple",
    FACEBOOK = "facebook",
    GOOGLE = "google",
    MICROSOFT = "microsoft",
    DISCORD = "discord",
    CCP_EVE = "ccp-eve",
    GEARBOX_SHIFT = "gearbox-shift"
}
export type TPlayerOAuth = {
    id: number;
    playerID: number;
    subjectCode: string;
    providerCode: OAuthProviderCode;
    profileData: any;
};
//# sourceMappingURL=TPlayerOAuth.d.ts.map