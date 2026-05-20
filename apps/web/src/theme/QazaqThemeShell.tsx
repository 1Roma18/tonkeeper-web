import { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { applyQazaqPalette, KZ_GRAPHITE } from './qazaqPalette';
import { QazaqOrnamentBackground } from './QazaqOrnamentBackground';

const QazaqWebGlobalStyle = createGlobalStyle`
    body {
        background: transparent !important;
    }

    #root {
        position: relative;
        z-index: 1;
        min-height: var(--app-height);
    }
`;

const QazaqThemeInner: FC<PropsWithChildren> = ({ children }) => {
    const base = useTheme();
    const qazaq = useMemo(() => applyQazaqPalette(base), [base]);

    useEffect(() => {
        document.body.style.background = KZ_GRAPHITE;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', KZ_GRAPHITE);
    }, []);

    return (
        <ThemeProvider theme={qazaq}>
            <QazaqWebGlobalStyle />
            <QazaqOrnamentBackground />
            {children}
        </ThemeProvider>
    );
};

/** Wraps app after UserThemeProvider — Kazakhstan flag palette + side ornaments */
export const QazaqThemeShell: FC<PropsWithChildren> = ({ children }) => (
    <QazaqThemeInner>{children}</QazaqThemeInner>
);
