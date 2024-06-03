import { TLocalizedString } from "src/lib/TLocalizedString";

export type TOrganization = {
    id: number;

    name: TLocalizedString;
    countryCode: string;
    description?: TLocalizedString;

    url: TLocalizedString;
    logoUrl?: string;
}