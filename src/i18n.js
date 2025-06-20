import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../src/locales/en/translation.json';
import hi from '../src/locales/hi/translation.json';
import or from '../src/locales/en/translation.json';

i18n
    .use(LanguageDetector) // auto-detect browser language
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            hi: { translation: hi },
            or: { translation: or }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
