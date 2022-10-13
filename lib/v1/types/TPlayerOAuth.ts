export enum OAuthProviderCode {
    GOOGLE = "google",
    FACEBOOK = "facebook",
    APPLE = "apple"
}


export type TPlayerOAuth = {
    id: number;

	playerID: number;

    subjectCode: string; // Stable unique code for user given by the provider
    providerCode: OAuthProviderCode; // Unique provider code

    profileData: any;
}