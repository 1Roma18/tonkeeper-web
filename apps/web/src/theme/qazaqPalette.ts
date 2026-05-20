import type { DefaultTheme } from 'styled-components';
import { defaultTheme } from '@tonkeeper/uikit/dist/styles/defaultTheme';

export const KZ_GRAPHITE = '#12131A';
export const KZ_GRAPHITE_ELEVATED = '#1A1D27';
export const KZ_GRAPHITE_TINT = '#242836';
export const KZ_TURQUOISE = '#00B2B2';
export const KZ_GOLD = '#E5A93B';
export const KZ_GOLD_LIGHT = '#F5C56A';
export const KZ_GOLD_DARK = '#B8872E';

export const qazaqPageBackground = `linear-gradient(180deg, ${KZ_GRAPHITE} 0%, #0E1016 100%)`;

export const qazaqFintechTheme: DefaultTheme = {
    ...defaultTheme,
    textAccent: KZ_TURQUOISE,
    accentBlue: KZ_TURQUOISE,
    accentBlueConstant: KZ_TURQUOISE,
    backgroundPage: qazaqPageBackground,
    backgroundTransparent: 'rgba(18, 19, 26, 0.96)',
    backgroundContent: KZ_GRAPHITE_ELEVATED,
    backgroundContentTint: KZ_GRAPHITE_TINT,
    backgroundContentAttention: '#2E3344',
    backgroundHighlighted: 'rgba(229, 169, 59, 0.1)',
    buttonPrimaryBackground: KZ_GOLD,
    buttonPrimaryForeground: KZ_GRAPHITE,
    buttonPrimaryBackgroundHighlighted: KZ_GOLD_LIGHT,
    buttonPrimaryBackgroundDisabled: KZ_GOLD_DARK,
    buttonSecondaryBackground: KZ_GRAPHITE_ELEVATED,
    buttonTertiaryBackground: KZ_GRAPHITE_TINT,
    fieldBackground: KZ_GRAPHITE_ELEVATED,
    fieldActiveBorder: KZ_GOLD,
    tabBarActiveIcon: KZ_GOLD,
    tabBarInactiveIcon: '#7A8194',
    iconPrimaryAlternate: KZ_GRAPHITE,
    textPrimaryAlternate: KZ_GRAPHITE,
    separatorAlternate: 'rgba(229, 169, 59, 0.12)',
    gradientBackgroundTop: `linear-gradient(180deg, ${KZ_GRAPHITE} 0%, transparent 100%)`,
    gradientBackgroundBottom: `linear-gradient(0deg, ${KZ_GRAPHITE} 0%, transparent 100%)`,
    gradientBlueTop: `linear-gradient(180deg, ${KZ_TURQUOISE} 0%, transparent 100%)`,
    gradientBlueBottom: `linear-gradient(0deg, ${KZ_TURQUOISE} 0%, transparent 100%)`
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
            backgroundContent: KZ_GRAPHITE_ELEVATED,
            backgroundContentTint: KZ_GRAPHITE_TINT,
            textAccent: KZ_TURQUOISE,
            accentBlueConstant: KZ_TURQUOISE,
            tabBarActiveIcon: KZ_GOLD,
            buttonPrimaryBackground: KZ_GOLD,
            buttonPrimaryForeground: KZ_GRAPHITE
        };
    }
    return { ...qazaqFintechTheme, ...layout };
}
