/**
 * Apply Qazaq Wallet UI glossary to kk locale sources (tonkeeper + tonkeeper-web).
 * Run: node scripts/patch-kk-glossary.mjs
 * Then: cd packages/locales && yarn build && cd ../../apps/web && yarn locales
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = [
    path.join(root, 'packages/locales/src/tonkeeper/kk.json'),
    path.join(root, 'packages/locales/src/tonkeeper-web/kk.json')
];

/** Exact string replacements (Russian/English leftovers → Kazakh) */
const replacements = [
    ['Начать', 'Бастау'],
    ['Рекордная скорость', 'Жоғары жылдамдық'],
    [
        'Благодаря уникальной архитектуре TON, TON-транзакции проходят за секунды.',
        'TON архитектурасының арқасында транзакциялар секундтар ішінде орындалады.'
    ],
    [
        'Благодаря уникальной архитектуре TON, TON-транзакции проходят за секунды.',
        'TON архитектурасының арқасында транзакциялар секундтар ішінде орындалады.'
    ],
    ['Сквозная защита', 'Толық қорғаныс'],
    [
        'Qazaq Wallet хранит криптографические ключи на устройстве. Транзакции обрабатываются на децентрализованном блокчейне без рисков централизованных бирж.',
        'Qazaq Wallet криптографиялық кілттерді құрылғыда сақтайды. Транзакциялар орталықтандырылмаған блокчейнде өңделеді.'
    ],
    ['Жаңа әмиян жасаңыз немесе бар әмиянды қосыңыз.', 'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз.'],
    ['Create a new wallet or add an existing one.', 'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз.'],
    ['Create a new wallet or add an existing one.', 'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз.'],
    ['Confirm and Send', 'Растау және жіберу'],
    ['Confirm sending', 'Жіберуді растау'],
    ['Confirm', 'Растау'],
    ['Fee', 'Комиссия'],
    ['Address', 'Мекенжай'],
    ['Address copied', 'Мекенжай көшірілді'],
    ['Settings', 'Баптаулар'],
    ['Send', 'Жіберу'],
    ['Receive', 'Алу'],
    ['Received', 'Алынды'],
    ['Failed', 'Қате кетті'],
    ['Success', 'Сәтті аяқталды'],
    ['Success!', 'Сәтті аяқталды!'],
    ['Enter your\nrecovery phrase', 'Құпия сид-фразаны\nенгізіңіз'],
    ['Enter your password', 'Құпиясөзді енгізіңіз'],
    ['Your recovery phrase', 'Құпия сид-фраза (24 сөз)'],
    ['Back up your wallet manually by writing down the recovery phrase.', 'Қалпына келтіру фразасын сақтаңыз.'],
    ['Total balance', 'Жалпы баланс'],
    ['Balance', 'Баланс'],
    ['Transaction history', 'Транзакциялар тарихы'],
    ['Add Wallet', 'Әмиян қосу'],
    ['Set up wallet', 'Әмиянды баптау'],
    ['Перевод', 'Аударым'],
    ['Растау и отправить', 'Растау және жіберу'],
    ['Растау и отправить', 'Растау және жіберу'],
    ['Комиссия', 'Комиссия'],
    ['Недостаточно средств', 'Қаражат жеткіліксіз'],
    ['Insufficient balance', 'Қаражат жеткіліксіз'],
    ['Sending failed', 'Жіберу сәтсіз аяқталды'],
    ['Authentication failed', 'Аутентификация сәтсіз'],
    ['Done', 'Дайын'],
    ['Import Wallet', 'Бар әмиянды кіргізу'],
    ['New Wallet', 'Жаңа әмиян ашу']
];

/** Nested key paths → Kazakh (dot notation for deep set) */
const keyPaths = {
    'intro_continue_btn': 'Бастау',
    'settings_title': 'Баптаулар',
    'confirm': 'Растау',
    'confirm_sending_fee': 'Комиссия',
    'confirm_sending_submit': 'Растау және жіберу',
    'success': 'Сәтті аяқталды!',
    'transaction_fee': 'Комиссия',
    'staking_balance_label': 'Жалпы баланс',
    'add_wallet': 'Әмиян қосу',
    'import_add_wallet_description': 'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз.',
    'activity.failed_transaction': 'Қате кетті',
    'activity.empty_transaction_title': 'Транзакциялар тарихы осында көрсетіледі',
    'wallet.send_btn': 'Жіберу',
    'wallet.receive_btn': 'Алу'
};

function deepSet(obj, dotted, value) {
    const parts = dotted.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];
        if (cur[p] == null || typeof cur[p] !== 'object') cur[p] = {};
        cur = cur[p];
    }
    cur[parts[parts.length - 1]] = value;
}

function walkReplaceStrings(node) {
    if (typeof node === 'string') {
        let s = node;
        for (const [from, to] of replacements) {
            if (s === from || s.includes(from)) s = s.split(from).join(to);
        }
        return s;
    }
    if (Array.isArray(node)) return node.map(walkReplaceStrings);
    if (node && typeof node === 'object') {
        const out = {};
        for (const [k, v] of Object.entries(node)) {
            out[k] = walkReplaceStrings(v);
        }
        return out;
    }
    return node;
}

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.warn('Skip missing', file);
        continue;
    }
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    let json = walkReplaceStrings(data);
    for (const [pathKey, value] of Object.entries(keyPaths)) {
        deepSet(json, pathKey, value);
    }
    if (file.includes('tonkeeper-web')) {
        json.appName = 'Qazaq Wallet';
        json.appTitle = 'Qazaq Wallet — TON әмияны';
    }
    fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
    console.log('Updated', file);
}

console.log('Done. Rebuild locales: yarn workspace @tonkeeper/locales build');
