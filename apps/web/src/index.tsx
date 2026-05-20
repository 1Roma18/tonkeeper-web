import ReactDOM from 'react-dom/client';
import { App } from './App';
import { i18nReady } from './i18n';

import './telegram-widget';
import { AppTgOauthRedirect, isInTgAuthInjectionContext } from './AppTgOauthRedirect';
import {
    getTgAuthResult,
    sendTgAuthResultToOpener
} from '@tonkeeper/core/dist/service/telegramOauth';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

let EntryPoint = <App />;

try {
    const tgAuthResult = getTgAuthResult();

    if (tgAuthResult) {
        if (isInTgAuthInjectionContext()) {
            EntryPoint = <AppTgOauthRedirect tgAuthResult={tgAuthResult} />;
        } else if (!sendTgAuthResultToOpener(tgAuthResult)) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }
} catch (e) {
    console.error(e);
}

void i18nReady
    .then(() => {
        root.render(EntryPoint);
    })
    .catch(err => {
        console.error(err);
        root.render(
            <div style={{ color: '#fff', padding: 24, fontFamily: 'sans-serif' }}>
                <h2>Qazaq Wallet failed to start</h2>
                <pre>{String(err)}</pre>
            </div>
        );
    });
