import kkBundle from '@tonkeeper/locales/dist/i18n/default.json';
import enTranslation from '@tonkeeper/locales/dist/locales/en/translation.json';
import kkTranslation from '@tonkeeper/locales/dist/locales/kk/translation.json';
import ruTranslation from '@tonkeeper/locales/dist/locales/ru/translation.json';
import { detectPreferredLanguage, localizationText } from '@tonkeeper/core/dist/entries/language';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/** i18next code (kk | ru | en) aligned with core Language detection */
export function detectInitialLanguage(): string {
    return localizationText(detectPreferredLanguage());
}

const resources = {
    ...kkBundle,
    kk: { translation: kkTranslation as Record<string, string> },
    en: { translation: enTranslation as Record<string, string> },
    ru: { translation: ruTranslation as Record<string, string> }
};

export const i18nReady = i18n.use(initReactI18next).init({
    resources,
    debug: false,
    lng: detectInitialLanguage(),
    fallbackLng: 'kk',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
