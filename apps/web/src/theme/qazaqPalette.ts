import type { DefaultTheme } from 'styled-components';

import { defaultTheme } from '@tonkeeper/uikit/dist/styles/defaultTheme';



/** Қазақстан туы — аспан көгілдірі */

export const KZ_FLAG_SKY = '#00AFCA';

export const KZ_FLAG_SKY_DARK = '#008FB5';

export const KZ_FLAG_GOLD = '#FEC107';



export const qazaqPageBackground = `linear-gradient(180deg, ${KZ_FLAG_SKY} 0%, ${KZ_FLAG_SKY_DARK} 55%, #007A9E 100%)`;



/**

 * Web shell: flag sky page + readable text. Home buttons/cards keep default graphite from defaultTheme.

 */

export const qazaqFintechTheme: DefaultTheme = {
    ...defaultTheme,
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    textTertiary: 'rgba(255, 255, 255, 0.58)',
    iconPrimary: '#FFFFFF',
    iconSecondary: 'rgba(255, 255, 255, 0.9)',
    iconTertiary: 'rgba(255, 255, 255, 0.55)',
    accentOrange: KZ_FLAG_GOLD,
    backgroundPage: qazaqPageBackground,
    backgroundTransparent: 'rgba(0, 175, 202, 0.92)',
    backgroundContent: '#1A1D27',
    backgroundContentTint: '#242836',
    backgroundContentAttention: '#2E3344',
    backgroundHighlighted: 'rgba(254, 193, 7, 0.18)',

    buttonPrimaryBackground: KZ_FLAG_GOLD,

    buttonPrimaryForeground: '#1A1A1A',

    buttonPrimaryBackgroundHighlighted: '#FFD54F',

    buttonPrimaryBackgroundDisabled: '#C9A227',

    fieldActiveBorder: KZ_FLAG_GOLD,

    tabBarActiveIcon: KZ_FLAG_GOLD,

    tabBarInactiveIcon: 'rgba(255, 255, 255, 0.55)',

    separatorCommon: 'rgba(255, 255, 255, 0.22)',

    separatorAlternate: 'rgba(254, 193, 7, 0.2)',

    gradientBackgroundTop: `linear-gradient(180deg, ${KZ_FLAG_SKY} 0%, transparent 100%)`,

    gradientBackgroundBottom: `linear-gradient(0deg, ${KZ_FLAG_SKY_DARK} 0%, transparent 100%)`

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
            backgroundContent: '#1A1D27',
            backgroundContentTint: '#242836',
            textPrimary: '#FFFFFF',
            textSecondary: 'rgba(255, 255, 255, 0.9)',
            textTertiary: 'rgba(255, 255, 255, 0.58)',
            iconPrimary: '#FFFFFF',
            accentOrange: KZ_FLAG_GOLD,
            tabBarActiveIcon: KZ_FLAG_GOLD,
            buttonPrimaryBackground: KZ_FLAG_GOLD,
            buttonPrimaryForeground: '#1A1A1A'
        };
    }

    return { ...qazaqFintechTheme, ...layout };

}

