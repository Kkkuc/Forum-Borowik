import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	.use(Backend) // loads /locales/<language>/translation.json
	.use(LanguageDetector) // detects the user's language
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		debug: true, // turn off in production
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
