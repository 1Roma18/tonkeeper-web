import kkBundle from '@tonkeeper/locales/dist/i18n/default.json';
import enTranslation from '@tonkeeper/locales/dist/locales/en/translation.json';
import kkTranslation from '@tonkeeper/locales/dist/locales/kk/translation.json';
import ruTranslation from '@tonkeeper/locales/dist/locales/ru/translation.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/** Prefer kk when OS / Telegram language is Kazakh */
export function detectInitialLanguage(): string {
    const nav = (navigator.language || '').toLowerCase();
    const tgUser = (
        window as Window & {
            Telegram?: { WebApp?: { initDataUnsafe?: { user?: { language_code?: string } } } };
        }
    ).Telegram?.WebApp?.initDataUnsafe?.user?.language_code?.toLowerCase();

    if (
        nav.startsWith('kk') ||
        nav.startsWith('kz') ||
        tgUser === 'kk' ||
        tgUser === 'kz'
    ) {
        return 'kk';
    }
    if (nav.startsWith('ru') || tgUser === 'ru') {
        return 'ru';
    }
    if (nav.startsWith('en') || tgUser === 'en') {
        return 'en';
    }
    return 'kk';
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
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
