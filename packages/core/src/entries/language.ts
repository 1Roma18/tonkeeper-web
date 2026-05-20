export enum Language {
    EN = 0,
    RU = 1,
    IT = 2,
    ZH_CN = 3,
    TR = 4,
    BG = 5,
    ES = 6,
    ID = 7,
    UK = 8,
    UZ = 9,
    BN = 10,
    ZH_TW = 11,
    FR = 12,
    PA = 13,
    PT = 14,
    VI = 15,
    HI = 16,
    AR = 17,
    DE = 18,
    FA = 19,
    KK = 20
}

export const defaultLanguage: Language = Language.KK;

/** Languages exposed in the app UI */
export const languages = [Language.KK, Language.EN, Language.RU];

export const supportedLanguages = new Set(languages);

export function isSupportedLanguage(lang: Language | undefined): lang is Language {
    return lang !== undefined && supportedLanguages.has(lang);
}

export const localizationText = (lang?: Language) => {
    switch (lang) {
        case Language.EN:
            return 'en';
        case Language.RU:
            return 'ru';
        case Language.IT:
            return 'it';
        case Language.ZH_CN:
            return 'zh_CN';
        case Language.ZH_TW:
            return 'zh_TW';
        case Language.TR:
            return 'tr';
        case Language.BG:
            return 'bg';
        case Language.ES:
            return 'es';
        case Language.ID:
            return 'id';
        case Language.UK:
            return 'uk';
        case Language.UZ:
            return 'uz';
        case Language.BN:
            return 'bn';
        case Language.FR:
            return 'fr';
        case Language.PA:
            return 'pa';
        case Language.PT:
            return 'pt';
        case Language.VI:
            return 'vi';
        case Language.HI:
            return 'hi';
        case Language.AR:
            return 'ar';
        case Language.DE:
            return 'de';
        case Language.FA:
            return 'fa';
        case Language.KK:
            return 'kk';
        default:
            return 'en';
    }
};

export const localizationFrom = (lang: string) => {
    switch (lang) {
        case 'en':
            return Language.EN;
        case 'ru':
            return Language.RU;
        case 'it':
            return Language.IT;
        case 'zh_CN':
            return Language.ZH_CN;
        case 'zh_TW':
            return Language.ZH_TW;
        case 'tr':
            return Language.TR;
        case 'bg':
            return Language.BG;
        case 'es':
            return Language.ES;
        case 'id':
            return Language.ID;
        case 'uk':
            return Language.UK;
        case 'uz':
            return Language.UZ;
        case 'bn':
            return Language.BN;
        case 'fr':
            return Language.FR;
        case 'pa':
            return Language.PA;
        case 'pt':
            return Language.PT;
        case 'vi':
            return Language.VI;
        case 'hi':
            return Language.HI;
        case 'ar':
            return Language.AR;
        case 'de':
            return Language.DE;
        case 'fa':
            return Language.FA;
        case 'kk':
            return Language.KK;
        default:
            return Language.KK;
    }
};

const localeMap: Record<string, string> = {
    zh_CN: 'zh-Hans',
    zh_TW: 'zh-Hant'
};

export const intlLocale = (locale: string) => {
    return localeMap[locale] ?? locale;
};
