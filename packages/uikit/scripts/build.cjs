const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

fs.rmSync(path.join(root, 'dist'), { recursive: true, force: true });

execSync('tsc', { cwd: root, stdio: 'inherit' });

const assetsSrc = path.join(root, 'src', 'components', 'staking', 'assets');
const assetsDest = path.join(root, 'dist', 'components', 'staking', 'assets');
fs.mkdirSync(path.dirname(assetsDest), { recursive: true });
fs.cpSync(assetsSrc, assetsDest, { recursive: true });
