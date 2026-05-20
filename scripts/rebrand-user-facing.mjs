/**
 * Rebrand user-visible "Tonkeeper" strings in locale JSON values (not keys).
 * Does NOT modify LICENSE, NOTICE, or source file copyright headers.
 * Run: node scripts/rebrand-user-facing.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const localeSrc = path.join(root, 'packages/locales/src');

const TARGET_FILES = [
    'tonkeeper/en.json',
    'tonkeeper/ru-RU.json',
    'tonkeeper/kk.json',
    'tonkeeper-web/en.json',
    'tonkeeper-web/ru-RU.json',
    'tonkeeper-web/kk.json'
];

const REPLACEMENTS = [
    ['Tonkeeper Pro', 'Qazaq Wallet Pro'],
    ['Tonkeeper PRO', 'Qazaq Wallet Pro'],
    ['Tonkeeper pro', 'Qazaq Wallet Pro'],
    ['Tonkeeper', 'Qazaq Wallet'],
    ['tonkeeper', 'Qazaq Wallet']
];

function rebrandString(text) {
    if (typeof text !== 'string') return text;
    let out = text;
    for (const [from, to] of REPLACEMENTS) {
        out = out.split(from).join(to);
    }
    return out;
}

function walk(obj) {
    if (typeof obj === 'string') return rebrandString(obj);
    if (Array.isArray(obj)) return obj.map(walk);
    if (obj && typeof obj === 'object') {
        const next = {};
        for (const [k, v] of Object.entries(obj)) {
            next[k] = walk(v);
        }
        return next;
    }
    return obj;
}

let count = 0;
for (const rel of TARGET_FILES) {
    const filePath = path.join(localeSrc, rel);
    if (!fs.existsSync(filePath)) continue;
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const next = walk(raw);
    fs.writeFileSync(filePath, JSON.stringify(next, null, 2) + '\n', 'utf8');
    console.log('Rebranded', rel);
    count++;
}
console.log(`Done. ${count} locale files updated.`);
