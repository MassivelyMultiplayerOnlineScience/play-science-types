export type TLocalizedString = Record<string, string> | string;
// Example:
// {
// 	'en': 'Login',
// 	'fr': 'Connexion'
// }

function translate(translations: TLocalizedString, locale: string, defaultLocale = 'en') : string {
	if (typeof translations === 'string') return translations;

	let translation = translations[locale];

	if (!translation) translation = translations[defaultLocale];
	if (!translation) translation = translations[''];
	if (!translation) translation = 'NA';

	return translation;
}

export { translate };