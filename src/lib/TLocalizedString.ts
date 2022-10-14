export type TLocalizedString = Record<string, string>;
// Example:
// {
// 	"en": "Login",
// 	"fr": "Connexion"
// }

function translate(translations: TLocalizedString, locale: string, defaultLocale = "en") : string {
	let translation = translations[locale];

	if (!translation) translation = translations[defaultLocale];
	if (!translation) translation = translations[""];
	if (!translation) translation = "NA";

	return translation;
}

export { translate };