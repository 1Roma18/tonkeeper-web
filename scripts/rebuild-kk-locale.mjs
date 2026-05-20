/**
 * Full rebuild of kk.json from ru-RU.json with Kazakh UI copy.
 * Run: node scripts/rebuild-kk-locale.mjs
 * Then: cd packages/locales && yarn build && cd ../../apps/web && yarn locales
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { EXTRA_PHRASES, WEB_OVERRIDES } from './kk-phrase-map.mjs';
import { KK_UI_OVERRIDES } from './kk-ui-overrides.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'packages/locales/src');

/** Base phrases from create-kk-locale (import inline to avoid circular deps) */
const BASE_PHRASES = [
    ['Добавить кошелёк', 'Әмиян қосу'],
    ['Добавить кошелек', 'Әмиян қосу'],
    [
        'Создать новый кошелёк или добавить существующий.',
        'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз.'
    ],
    ['Создать новый кошелёк', 'Жаңа әмиян ашу'],
    ['Новый кошелёк', 'Жаңа әмиян'],
    ['Импорт кошелька', 'Бар әмиянды кіргізу'],
    ['Настройки', 'Баптаулар'],
    ['Получить', 'Алу'],
    ['Отправить', 'Жіберу'],
    ['Купить', 'Сатып алу'],
    ['Продолжить', 'Жалғастыру'],
    ['Подтвердить', 'Растау'],
    ['Подтвердить и отправить', 'Растау және жіберу'],
    ['Сохранить', 'Сақтаңыз'],
    ['Отмена', 'Бас тарту'],
    ['Комиссия', 'Комиссия'],
    ['Токены', 'Токендер'],
    ['Құпия сөз', 'Құпиясөз'],
    ['құпия сөз', 'құпиясөз']
];

const PHRASES = [...EXTRA_PHRASES, ...BASE_PHRASES].sort((a, b) => b[0].length - a[0].length);

const WORD_ORDER = [
    [/^Сатып алу (.+)$/i, '$1 сатып алу'],
    [/^Алу (.+)$/i, '$1 алу'],
    [/^Жіберу (.+)$/i, '$1 жіберу']
];

const EXACT_FIXES = {
    Скрытые: 'Жасырын',
    Сохранить: 'Сақтаңыз',
    Сақтау: 'Сақтаңыз',
    Пароль: 'Құпиясөз',
    Все: 'Барлығы'
};

function normalize(text) {
    return text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}

function applyPhrases(text) {
    if (typeof text !== 'string') return text;
    let out = normalize(text);
    for (const [from, to] of PHRASES) {
        if (out.includes(from)) out = out.split(from).join(to);
    }
    for (const [re, repl] of WORD_ORDER) {
        out = out.replace(re, repl);
    }
    if (EXACT_FIXES[out] !== undefined) return EXACT_FIXES[out];
    return out;
}

function getOverride(path) {
    if (KK_UI_OVERRIDES[path] !== undefined) return KK_UI_OVERRIDES[path];
    return undefined;
}

function walk(obj, path = '') {
    if (typeof obj === 'string') {
        const override = getOverride(path);
        if (override !== undefined) return override;
        return applyPhrases(obj);
    }
    if (Array.isArray(obj)) return obj.map((v, i) => walk(v, `${path}[${i}]`));
    if (obj && typeof obj === 'object') {
        const next = {};
        for (const [k, v] of Object.entries(obj)) {
            const childPath = path ? `${path}.${k}` : k;
            next[k] = walk(v, childPath);
        }
        return next;
    }
    return obj;
}

function applyWebFlat(kk) {
    for (const [k, v] of Object.entries(WEB_OVERRIDES)) {
        if (Object.prototype.hasOwnProperty.call(kk, k)) kk[k] = v;
    }
    if (kk.pro?.battery) {
        const b = kk.pro.battery;
        if (b.battery_capabilities_description) {
            b.battery_capabilities_description =
                'Qazaq Wallet арқылы айырбастау, токендерді жіберу және TON стейкингінен шығару.';
        }
        if (b.nft_empty_header) b.nft_empty_header = 'Сатып алуларыңыз осында болады';
    }
    return kk;
}

function applyTonkeeperExtras(kk) {
    kk.import_add_wallet = 'Әмиян қосу';
    kk.import_add_wallet_description =
        'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз.';
    kk.import_new_wallet = 'Жаңа әмиян ашу';
    kk.import_new_wallet_description = 'Жаңа әмиян ашыңыз';
    kk.import_existing_wallet = 'Бар әмиянды кіргізу';
    kk.import_existing_wallet_description =
        '24 сөзден тұратын құпия сид-фразамен кіргізіңіз';
    kk.add_wallet = 'Әмиян қосу';
    kk.exchange_title = 'TON сатып алу';
    kk.nft_single_nft = 'Жеке NFT';
    kk.staking_enter_amount = 'Соманы енгізіңіз';
    kk.staking_earnings_section_title = 'Жылдық күтілетін табыс';
    kk.staking_rewards_after_stake = 'Салғаннан кейін';
    kk.staking_tonstakers_notice =
        'Стейкинг үшінші тарап смарт-контракттарына негізделген. Qazaq Wallet тұрақтылық пен нәтижеге жауап бермейді.';
    if (kk.language?.languagesList) {
        kk.language.languagesList.kk = 'Қазақша';
        kk.language.list_item = { title: 'Тіл', value: 'Қазақша' };
    }
    if (kk.start_screen) {
        kk.start_screen.caption = 'Жаңа әмиян ашыңыз немесе бар әмиянды кіргізіңіз';
        kk.start_screen.create_wallet_button = 'Жаңа әмиян ашу';
        kk.start_screen.import_wallet_button = 'Бар әмиянды кіргізу';
    }
    return kk;
}

function rebuild(namespace) {
    const ruPath = path.join(src, namespace, 'ru-RU.json');
    const kkPath = path.join(src, namespace, 'kk.json');
    const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));
    let kk = walk(ru);
    if (namespace === 'tonkeeper-web') {
        kk = applyWebFlat(kk);
    } else {
        kk = applyTonkeeperExtras(kk);
    }
    fs.writeFileSync(kkPath, JSON.stringify(kk, null, 2) + '\n', 'utf8');
    console.log('Rebuilt', kkPath);
}

rebuild('tonkeeper');
rebuild('tonkeeper-web');
console.log('Done. Run: yarn workspace @tonkeeper/locales build');
