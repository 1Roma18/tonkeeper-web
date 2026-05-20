import { StakingPoolProvider } from '../../state/staking/poolBranding';

const STAKING_ASSETS_BASE =
    'https://raw.githubusercontent.com/tonkeeper/tonkeeper-web/main/packages/uikit/src/components/staking/assets';

export const STAKING_PROVIDER_ICON_URLS: Record<StakingPoolProvider, string> = {
    tonstakers: `${STAKING_ASSETS_BASE}/tonstakers.png`,
    tonnominators: `${STAKING_ASSETS_BASE}/tonnominators.png`,
    tonwhales: `${STAKING_ASSETS_BASE}/tonwhales.png`,
    tonkeeper: `${STAKING_ASSETS_BASE}/tonkeeper.png`
};
