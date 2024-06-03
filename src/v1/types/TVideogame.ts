import { TLocalizedString } from "src/lib/TLocalizedString";
import { OAuthProviderCode } from "./TPlayerOAuth";

export type TVideogame = {
    id: number;

    code: string;
    name: TLocalizedString;
    description?: TLocalizedString;

    oauthProvider?: OAuthProviderCode;
}