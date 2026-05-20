import { DefaultTheme } from 'styled-components';
import {
    KZ_GOLD,
    KZ_GOLD_DARK,
    KZ_GOLD_LIGHT,
    KZ_GRAPHITE,
    KZ_GRAPHITE_ATTENTION,
    KZ_GRAPHITE_ELEVATED,
    KZ_GRAPHITE_TINT,
    KZ_TURQUOISE,
    KZ_TURQUOISE_DISABLED,
    kzGradientBlueBottom,
    kzGradientBlueTop
} from './kzBrand';

export const defaultTheme: DefaultTheme = {
    textPrimary: '#EBEBEB',
    textSecondary: '#8994A3',
    textTertiary: '#556170',
    textAccent: KZ_TURQUOISE,
    textPrimaryAlternate: KZ_GRAPHITE,

    backgroundPage: KZ_GRAPHITE,
    backgroundTransparent: 'rgba(18, 19, 26, 0.92)',
    backgroundContent: KZ_GRAPHITE_ELEVATED,
    backgroundContentTint: KZ_GRAPHITE_TINT,
    backgroundContentAttention: KZ_GRAPHITE_ATTENTION,
    backgroundOverlayStrong: 'rgba(0, 0, 0, 0.72)',
    backgroundOverlayLight: 'rgba(0, 0, 0, 0.48)',
    backgroundOverlayExtraLight: 'rgba(0, 0, 0, 0.24)',
    backgroundHighlighted: 'rgba(229, 169, 59, 0.1)',

    iconPrimary: '#EBEBEB',
    iconSecondary: '#8994A3',
    iconTertiary: '#556170',
    iconPrimaryAlternate: KZ_GRAPHITE,

    buttonPrimaryBackground: KZ_GOLD,
    buttonPrimaryForeground: KZ_GRAPHITE,
    buttonSecondaryBackground: KZ_GRAPHITE_ELEVATED,
    buttonSecondaryForeground: '#EBEBEB',
    buttonTertiaryBackground: KZ_GRAPHITE_TINT,
    buttonTertiaryForeground: '#EBEBEB',
    buttonWarnBackground: '#F5A73B',
    buttonWarnForeground: '#FFFFFF',
    buttonPrimaryBackgroundDisabled: KZ_GOLD_DARK,
    buttonSecondaryBackgroundDisabled: '#171F29',
    buttonTertiaryBackgroundDisabled: '#28303D',
    buttonWarnBackgroundDisabled: '#C2842F',

    buttonTertiaryForegroundDisabled: 'rgba(256, 256, 256, 0.48)',
    buttonSecondaryForegroundDisabled: 'rgba(256, 256, 256, 0.48)',
    buttonPrimaryForegroundDisabled: 'rgba(256, 256, 256, 0.48)',
    buttonWarnForegroundDisabled: 'rgba(256, 256, 256, 0.48)',

    buttonPrimaryBackgroundHighlighted: KZ_GOLD_LIGHT,
    buttonSecondaryBackgroundHighlighted: 'rgba(34, 44, 59, 1)',
    buttonTertiaryBackgroundHighlighted: 'rgba(54, 64, 82, 1)',
    buttonWarnBackgroundHighlighted: '#F5AF4E',

    fieldBackground: KZ_GRAPHITE_ELEVATED,
    fieldActiveBorder: KZ_GOLD,
    fieldErrorBorder: '#FF4766',
    fieldErrorBackground: 'rgba(255, 71, 102, 0.08)',

    accentBlue: KZ_TURQUOISE,
    accentBlueConstant: KZ_TURQUOISE,
    accentGreen: '#39CC83',
    accentRed: '#FF4766',
    accentOrange: KZ_GOLD,
    accentPurple: '#7665E5',

    tabBarActiveIcon: KZ_GOLD,
    tabBarInactiveIcon: '#8994A3',

    separatorCommon: 'rgba(79, 90, 112, 0.24)',
    separatorAlternate: 'rgba(229, 169, 59, 0.08)',

    gradientBackgroundTop:
        'linear-gradient(180deg, #12131A 0%, rgba(18, 19, 26, 0.991353) 6.67%, rgba(18, 19, 26, 0.96449) 13.33%, rgba(18, 19, 26, 0.91834) 20%, rgba(18, 19, 26, 0.852589) 26.67%, rgba(18, 19, 26, 0.768225) 33.33%, rgba(18, 19, 26, 0.668116) 40%, rgba(18, 19, 26, 0.557309) 46.67%, rgba(18, 19, 26, 0.442691) 53.33%, rgba(18, 19, 26, 0.331884) 60%, rgba(18, 19, 26, 0.231775) 66.67%, rgba(18, 19, 26, 0.147411) 73.33%, rgba(18, 19, 26, 0.0816599) 80%, rgba(18, 19, 26, 0.03551) 86.67%, rgba(18, 19, 26, 0.0086472) 93.33%, rgba(18, 19, 26, 0) 100%)',
    gradientBackgroundBottom:
        'linear-gradient(360deg, #12131A 0%, rgba(18, 19, 26, 0.991353) 6.67%, rgba(18, 19, 26, 0.96449) 13.33%, rgba(18, 19, 26, 0.91834) 20%, rgba(18, 19, 26, 0.852589) 26.67%, rgba(18, 19, 26, 0.768225) 33.33%, rgba(18, 19, 26, 0.668116) 40%, rgba(18, 19, 26, 0.557309) 46.67%, rgba(18, 19, 26, 0.442691) 53.33%, rgba(18, 19, 26, 0.331884) 60%, rgba(18, 19, 26, 0.231775) 66.67%, rgba(18, 19, 26, 0.147411) 73.33%, rgba(18, 19, 26, 0.0816599) 80%, rgba(18, 19, 26, 0.03551) 86.67%, rgba(18, 19, 26, 0.0086472) 93.33%, rgba(18, 19, 26, 0) 100%)',
    gradientBlueTop: kzGradientBlueTop,
    gradientBlueBottom: kzGradientBlueBottom,
    gradientGreen:
        'linear-gradient(180deg, #39CC83 0%, rgba(57, 204, 131, 0.991353) 6.67%, rgba(57, 204, 131, 0.96449) 13.33%, rgba(57, 204, 131, 0.91834) 20%, rgba(57, 204, 131, 0.852589) 26.67%, rgba(57, 204, 131, 0.768225) 33.33%, rgba(57, 204, 131, 0.668116) 40%, rgba(57, 204, 131, 0.557309) 46.67%, rgba(57, 204, 131, 0.442691) 53.33%, rgba(57, 204, 131, 0.331884) 60%, rgba(57, 204, 131, 0.231775) 66.67%, rgba(57, 204, 131, 0.147411) 73.33%, rgba(57, 204, 131, 0.0816599) 80%, rgba(57, 204, 131, 0.03551) 86.67%, rgba(57, 204, 131, 0.0086472) 93.33%, rgba(57, 204, 131, 0) 100%)',
    gradientRed:
        'linear-gradient(180deg, #FF4766 0%, rgba(255, 71, 102, 0.991353) 6.67%, rgba(255, 71, 102, 0.96449) 13.33%, rgba(255, 71, 102, 0.91834) 20%, rgba(255, 71, 102, 0.852589) 26.67%, rgba(255, 71, 102, 0.768225) 33.33%, rgba(255, 71, 102, 0.668116) 40%, rgba(255, 71, 102, 0.557309) 46.67%, rgba(255, 71, 102, 0.442691) 53.33%, rgba(255, 71, 102, 0.331884) 60%, rgba(255, 71, 102, 0.231775) 66.67%, rgba(255, 71, 102, 0.147411) 73.33%, rgba(255, 71, 102, 0.0816599) 80%, rgba(255, 71, 102, 0.03551) 86.67%, rgba(255, 71, 102, 0.0086472) 93.33%, rgba(255, 71, 102, 0) 100%)',

    constantBlack: '#000000',
    constantWhite: '#FFFFFF',
    blue: KZ_TURQUOISE_DISABLED,
    red: '#FF3B30',

    corner3xSmall: '4px',
    corner2xSmall: '8px',
    cornerExtraSmall: '12px',
    cornerSmall: '16px',
    cornerMedium: '20px',
    cornerLarge: '24px',
    cornerFull: '100%',
    fontMono: 'ui-monospace, SF Mono, monospace, Roboto Mono, Menlo, Consolas, Courier',
    displayType: 'compact',
    proDisplayType: undefined,
    os: undefined
};
