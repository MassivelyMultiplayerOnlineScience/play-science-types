export enum OAuthProviderCode {
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

    subjectCode: string; // Stable unique code for user given by the provider
    providerCode: OAuthProviderCode; // Unique provider code

    profileData: any;
}