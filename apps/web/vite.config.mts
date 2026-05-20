import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { injectCSP, metaTagCspConfig } from '@tonkeeper/core/dist/utils/csp';

const base = process.env.VITE_BASE_PATH || '/';

/** Known third-party warnings that do not affect the web wallet build */
function shouldSuppressRollupWarning(warning: { code?: string; id?: string; message?: string }) {
    const id = warning.id ?? '';
    const msg = warning.message ?? '';

    if (warning.code === 'EVAL' && id.includes('lottie-web')) {
        return true;
    }

    if (msg.includes('dynamically imported') && (msg.includes('bip39') || msg.includes('mnemonicService'))) {
        return true;
    }

    return false;
}

export default defineConfig({
    base,
    plugins: [
        nodePolyfills({
            globals: {
                Buffer: true,
                global: true,
                process: true
            },
            include: ['stream', 'buffer', 'crypto']
        }),
        react(),
        injectCSP(metaTagCspConfig)
    ],
    server: {
        // Required for local development to test Telegram OAuth callbacks.
        // Vite rejects requests with Host header different from localhost by default.
        allowedHosts: ['wallet.tonkeeper.com', 'wallet.tonkeeper.local']
    },
    optimizeDeps: {
        exclude: ['@tonkeeper/core', '@tonkeeper/locales'],
        include: ['buffer']
    },
    build: {
        rollupOptions: {
            onwarn(warning, warn) {
                if (shouldSuppressRollupWarning(warning)) {
                    return;
                }
                warn(warning);
            }
        }
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            '@ton/core': path.resolve(__dirname, '../../packages/core/node_modules/@ton/core'),
            '@ton/crypto': path.resolve(__dirname, '../../packages/core/node_modules/@ton/crypto'),
            '@ton/ton': path.resolve(__dirname, '../../packages/core/node_modules/@ton/ton'),
            'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom'),
            'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
            'react-i18next': path.resolve(__dirname, './node_modules/react-i18next'),
            '@tanstack/react-query': path.resolve(__dirname, './node_modules/@tanstack/react-query'),
            '@tonkeeper/core/dist/utils/csp': path.resolve(
                __dirname,
                '../../packages/core/dist/utils/csp.mjs'
            )
        }
    }
});
