/** Qazaq Wallet — Kazakh fintech palette */
export const KZ_GRAPHITE = '#12131A';
export const KZ_GRAPHITE_ELEVATED = '#1A1D27';
export const KZ_GRAPHITE_TINT = '#242836';
export const KZ_GRAPHITE_ATTENTION = '#2E3344';

export const KZ_TURQUOISE = '#00B2B2';
export const KZ_TURQUOISE_ALT = '#00AFCA';
export const KZ_TURQUOISE_LIGHT = '#33C9C9';
export const KZ_TURQUOISE_DARK = '#008A8A';
export const KZ_TURQUOISE_DISABLED = '#006E6E';
export const KZ_TURQUOISE_RGB = '0, 178, 178';

export const KZ_GOLD = '#E5A93B';
export const KZ_GOLD_ALT = '#FEC107';
export const KZ_GOLD_LIGHT = '#F5C56A';
export const KZ_GOLD_DARK = '#B8872E';

/** @deprecated Tonkeeper brand blue */
export const TONKEEPER_BLUE = '#45AEF5';

const gradientStops = (rgb: string, hex: string, angle: string) =>
    `linear-gradient(${angle}, ${hex} 0%, rgba(${rgb}, 0.991353) 6.67%, rgba(${rgb}, 0.96449) 13.33%, rgba(${rgb}, 0.91834) 20%, rgba(${rgb}, 0.852589) 26.67%, rgba(${rgb}, 0.768225) 33.33%, rgba(${rgb}, 0.668116) 40%, rgba(${rgb}, 0.557309) 46.67%, rgba(${rgb}, 0.442691) 53.33%, rgba(${rgb}, 0.331884) 60%, rgba(${rgb}, 0.231775) 66.67%, rgba(${rgb}, 0.147411) 73.33%, rgba(${rgb}, 0.0816599) 80%, rgba(${rgb}, 0.03551) 86.67%, rgba(${rgb}, 0.0086472) 93.33%, rgba(${rgb}, 0) 100%)`;

export const kzGradientBlueTop = gradientStops(KZ_TURQUOISE_RGB, KZ_TURQUOISE, '180deg');
export const kzGradientBlueBottom = gradientStops(KZ_TURQUOISE_RGB, KZ_TURQUOISE, '0deg');
