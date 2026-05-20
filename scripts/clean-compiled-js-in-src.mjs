import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dirs = [
    path.join(root, 'packages/core/src'),
    path.join(root, 'packages/uikit/src'),
    path.join(root, 'packages/locales')
];

const skipDirNames = new Set(['node_modules', 'dist']);

let removed = 0;
for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const walk = (d) => {
        for (const name of fs.readdirSync(d)) {
            const p = path.join(d, name);
            const st = fs.statSync(p);
            if (st.isDirectory()) {
                if (!skipDirNames.has(name)) walk(p);
            }
            else if (name.endsWith('.js')) {
                fs.unlinkSync(p);
                removed++;
            }
        }
    };
    walk(dir);
}
console.log(`Removed ${removed} .js files`);
