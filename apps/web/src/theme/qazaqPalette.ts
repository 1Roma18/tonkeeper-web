import type { DefaultTheme } from 'styled-components';
import { defaultTheme } from '@tonkeeper/uikit/dist/styles/defaultTheme';
import { TONKEEPER_BLUE } from '@tonkeeper/uikit/dist/styles/kzBrand';

/** Қазақстан туы — аспан көгілдірі */
export const KZ_FLAG_SKY = '#00AFCA';
export const KZ_FLAG_SKY_DARK = '#0090B8';
export const KZ_FLAG_GOLD = '#FEC107';

export const qazaqPageBackground = `linear-gradient(180deg, ${KZ_FLAG_SKY} 0%, ${KZ_FLAG_SKY_DARK} 55%, #007AA3 100%)`;

/** Круглые кнопки на главном экране — как в Tonkeeper Web (светлые на синем фоне) */
export const QAZAQ_HOME_ACTION_BG = 'rgba(255, 255, 255, 0.18)';
export const QAZAQ_HOME_ACTION_BG_HOVER = 'rgba(255, 255, 255, 0.28)';

export const qazaqFintechTheme: DefaultTheme = {
    ...defaultTheme,
    textAccent: TONKEEPER_BLUE,
    accentBlue: TONKEEPER_BLUE,
    accentBlueConstant: TONKEEPER_BLUE,
    backgroundPage: qazaqPageBackground,
    backgroundTransparent: 'rgba(0, 175, 202, 0.92)',
    backgroundContent: QAZAQ_HOME_ACTION_BG,
    backgroundContentTint: QAZAQ_HOME_ACTION_BG_HOVER,
    backgroundContentAttention: 'rgba(255, 255, 255, 0.22)',
    backgroundHighlighted: 'rgba(254, 193, 7, 0.15)',
    buttonPrimaryBackground: KZ_FLAG_GOLD,
    buttonPrimaryForeground: '#1A1A1A',
    buttonPrimaryBackgroundHighlighted: '#FFD54F',
    buttonPrimaryBackgroundDisabled: '#C9A227',
    buttonSecondaryBackground: 'rgba(255, 255, 255, 0.14)',
    buttonTertiaryBackground: 'rgba(255, 255, 255, 0.1)',
    fieldBackground: 'rgba(255, 255, 255, 0.12)',
    fieldActiveBorder: KZ_FLAG_GOLD,
    tabBarActiveIcon: KZ_FLAG_GOLD,
    tabBarInactiveIcon: 'rgba(255, 255, 255, 0.55)',
    iconPrimaryAlternate: '#1A1A1A',
    textPrimaryAlternate: '#1A1A1A',
    separatorCommon: 'rgba(255, 255, 255, 0.2)',
    separatorAlternate: 'rgba(254, 193, 7, 0.2)',
    gradientBackgroundTop: `linear-gradient(180deg, ${KZ_FLAG_SKY} 0%, transparent 100%)`,
    gradientBackgroundBottom: `linear-gradient(0deg, ${KZ_FLAG_SKY_DARK} 0%, transparent 100%)`,
    gradientBlueTop: `linear-gradient(180deg, ${TONKEEPER_BLUE} 0%, transparent 100%)`,
    gradientBlueBottom: `linear-gradient(0deg, ${TONKEEPER_BLUE} 0%, transparent 100%)`
};

export function applyQazaqPalette(theme: DefaultTheme): DefaultTheme {
    const layout = {
        displayType: theme.displayType,
        proDisplayType: theme.proDisplayType,
        os: theme.os
    };
    const isPro = theme.buttonPrimaryBackground === '#FFDB29';
    if (isPro) {
        return {
            ...theme,
            ...layout,
            backgroundPage: qazaqPageBackground,
            backgroundContent: QAZAQ_HOME_ACTION_BG,
            backgroundContentTint: QAZAQ_HOME_ACTION_BG_HOVER,
            textAccent: TONKEEPER_BLUE,
            accentBlue: TONKEEPER_BLUE,
            accentBlueConstant: TONKEEPER_BLUE,
            tabBarActiveIcon: KZ_FLAG_GOLD,
            buttonPrimaryBackground: KZ_FLAG_GOLD,
            buttonPrimaryForeground: '#1A1A1A'
        };
    }
    return { ...qazaqFintechTheme, ...layout };
}
