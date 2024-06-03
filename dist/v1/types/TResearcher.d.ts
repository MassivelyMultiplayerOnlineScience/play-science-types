import { TLocalizedString } from "src/lib/TLocalizedString";
import { TOrganization } from "./TOrganization";
export type TResearcher = {
    id: number;
    name: string;
    position: TLocalizedString;
    affiliaition: TOrganization;
    url?: TLocalizedString;
    imageUrl?: string;
};
//# sourceMappingURL=TResearcher.d.ts.map