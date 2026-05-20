/**
 * Creates kk.json locales from ru-RU with Kazakh phrase replacements.
 * Run: node scripts/create-kk-locale.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'packages/locales/src');

/** Longest phrases first — order matters */
const PHRASES = [
    ['Добавить кошелёк', 'Әмиян қосу'],
    ['Добавить кошелек', 'Әмиян қосу'],
    ['Создать новый кошелёк или добавить существующий.', 'Жаңа әмиян жасаңыз немесе бар әмиянды қосыңыз.'],
    ['Создать новый кошелёк или\xa0добавить\xa0существующий.', 'Жаңа әмиян жасаңыз немесе бар әмиянды қосыңыз.'],
    ['Создать новый кошелёк', 'Жаңа әмиян жасау'],
    ['Создать новый кошелек', 'Жаңа әмиян жасау'],
    ['Новый кошелёк', 'Жаңа әмиян'],
    ['Новый кошелек', 'Жаңа әмиян'],
    ['Импорт кошелька', 'Әмиянды импорттау'],
    ['Существующий кошелёк', 'Бар әмиян'],
    ['Подключить Signer', 'Signer қосу'],
    ['Подключить Ledger', 'Ledger қосу'],
    ['Аккаунт для просмотра', 'Қарау әмияны'],
    ['Другие варианты', 'Басқа опциялар'],
    ['Аппаратные кошельки', 'Аппараттық әмияндар'],
    ['Настройки', 'Баптаулар'],
    ['Получить', 'Алу'],
    ['Отправить', 'Жіберу'],
    ['Обменять', 'Айырбастау'],
    ['Купить', 'Сатып алу'],
    ['Продать', 'Сату'],
    ['Отмена', 'Бас тарту'],
    ['Отменить', 'Бас тарту'],
    ['Продолжить', 'Жалғастыру'],
    ['Подтвердить', 'Растау'],
    ['Подтвердить и отправить', 'Растау және жіберу'],
    ['Загрузка', 'Жүктелуде'],
    ['Готово', 'Дайын'],
    ['Успешно', 'Сәтті'],
    ['Неуспешно', 'Сәтсіз'],
    ['Комиссия', 'Комиссия'],
    ['Получатель', 'Алушы'],
    ['Отправитель', 'Жіберуші'],
    ['Комментарий', 'Түсініктеме'],
    ['Сумма', 'Сома'],
    ['Баланс', 'Баланс'],
    ['Токены', 'Токендер'],
    ['Коллекции', 'Жинақтар'],
    ['Браузер', 'Браузер'],
    ['Язык', 'Тіл'],
    ['Русский', 'Орысша'],
    ['Казахский', 'Қазақша'],
    ['Английский', 'Ағылшынша'],
    ['Системный', 'Жүйелік'],
    ['Сегодня', 'Бүгін'],
    ['Вчера', 'Кеше'],
    ['Кошельки', 'Әмияндар'],
    ['Кошелёк', 'Әмиян'],
    ['кошелёк', 'әмиян'],
    ['кошелек', 'әмиян'],
    ['кошелька', 'әмияны'],
    ['кошельку', 'әмиянға'],
    ['кошельком', 'әмиянмен'],
    ['кошельки', 'әмияндар'],
    ['Добавить', 'Қосу'],
    ['Удалить', 'Жою'],
    ['Сохранить', 'Сақтаңыз'],
    ['Енгіз', 'Енгізіңіз'],
    ['Сақта', 'Сақтаңыз'],
    ['Тексер', 'Тексеріңіз'],
    ['Құпия сөз', 'Құпиясөз'],
    ['құпия сөз', 'құпиясөз'],
    ['Сіздің баланс', 'Баланс'],
    ['Транзакция сәтті болды', 'Транзакция сәтті аяқталды'],
    ['Қателік', 'Қате кетті'],
    ['Желі таңдау', 'Желіні таңдаңыз'],
    ['Құпия сөзді растау', 'Құпиясөзді растау'],
    ['Скопировать', 'Көшіру'],
    ['Скопировано', 'Көшірілді'],
    ['Поиск', 'Іздеу'],
    ['Подробнее', 'Толығырақ'],
    ['Позже', 'Кейінірек'],
    ['Назад', 'Артқа'],
    ['Выйти', 'Шығу'],
    ['Войти', 'Кіру'],
    ['Подключить', 'Қосу'],
    ['Открыть', 'Ашу'],
    ['Закрыть', 'Жабу'],
    ['Обновить', 'Жаңарту'],
    ['Проверить', 'Тексеру'],
    ['Внимание', 'Назар аударыңыз'],
    ['Ошибка', 'Қате'],
    ['Предупреждение', 'Ескерту'],
    ['Безопасность', 'Қауіпсіздік'],
    ['Уведомления', 'Хабарландырулар'],
    ['Поддержка', 'Қолдау'],
    ['Версия', 'Нұсқа'],
    ['Стейкинг', 'Стейкинг'],
    ['Обмен', 'Айырбастау'],
    ['История', 'Тарих'],
    ['Активность', 'Белсенділік'],
    ['Подписка', 'Жазылым'],
    ['Tonkeeper', 'Qazaq Wallet'],
    ['Тонкипер', 'Qazaq Wallet'],
    ['Тонкипер — кошелек для TON', 'Qazaq Wallet — TON әмияны'],
    ['Tonkeeper — wallet for TON', 'Qazaq Wallet — TON әмияны']
];

function applyPhrases(text) {
    if (typeof text !== 'string') return text;
    let out = text;
    for (const [from, to] of PHRASES) {
        out = out.split(from).join(to);
    }
    return out;
}

function walk(obj) {
    if (typeof obj === 'string') return applyPhrases(obj);
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

function createKk(namespace) {
    const ruPath = path.join(src, namespace, 'ru-RU.json');
    const kkPath = path.join(src, namespace, 'kk.json');
    const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));
    const kk = walk(ru);

    if (namespace === 'tonkeeper-web') {
        kk.appName = 'Qazaq Wallet';
        kk.appTitle = 'Qazaq Wallet — TON әмияны';
        kk.appExtensionDescription = 'The Open Network желісіндегі әмияныңыз';
        kk.aside_add_wallet = 'Әмиян қосу';
        kk.aside_settings = 'Баптаулар';
        kk.aside_dashboard = 'Басқару панелі';
        kk.aside_discover = 'Қолданбалар';
        kk.add_wallet_modal_mam_title = 'Жаңа мульти-әмиян';
        kk.add_wallet_modal_mam_subtitle =
            'Бір құпия сөзбен бірнеше әмиянды басқарыңыз';
        kk.import_existing_wallet_description_extended =
            '24 немесе 12 құпия сөзбен әмиянды импорттау';
    }

    if (namespace === 'tonkeeper') {
        kk.import_add_wallet = 'Әмиян қосу';
        kk.import_add_wallet_description =
            'Жаңа әмиян жасаңыз немесе бар әмиянды қосыңыз.';
        kk.import_new_wallet = 'Жаңа әмиян';
        kk.import_new_wallet_description = 'Жаңа әмиян жасау';
        kk.import_existing_wallet = 'Әмиянды импорттау';
        kk.import_existing_wallet_description =
            '24 сөзден тұратын құпия кілтпен әмиян қосу';
        kk.add_wallet = 'Әмиян қосу';
        if (kk.language?.languagesList) {
            kk.language.languagesList.kk = 'Қазақша';
            kk.language.list_item = {
                title: 'Тіл',
                value: 'Қазақша'
            };
        }
        if (kk.start_screen) {
            kk.start_screen.caption = 'Жаңа әмиян жасаңыз немесе бар әмиянды қосыңыз';
            kk.start_screen.create_wallet_button = 'Жаңа әмиян жасау';
            kk.start_screen.import_wallet_button = 'Бар әмиянды қосу';
        }
        if (kk.unused?.add_wallet_modal) {
            const m = kk.unused.add_wallet_modal;
            m.title = 'Әмиян қосу';
            m.subtitle = 'Жаңа әмиян жасаңыз немесе бар әмиянды қосыңыз.';
            if (m.create) {
                m.create.title = 'Жаңа әмиян';
                m.create.subtitle = 'Жаңа әмиян жасау';
            }
            if (m.import) {
                m.import.title = 'Бар әмиян';
                m.import.subtitle = '24 сөзден тұратын құпия кілтпен импорттау';
            }
            if (m.signer) {
                m.signer.title = 'Signer қосу';
            }
            if (m.ledger) {
                m.ledger.title = 'Ledger қосу';
            }
            if (m.watch_only) {
                m.watch_only.title = 'Қарау әмияны';
            }
        }
    }

    fs.writeFileSync(kkPath, JSON.stringify(kk, null, 2) + '\n', 'utf8');
    console.log('Wrote', kkPath);
}

createKk('tonkeeper');
createKk('tonkeeper-web');
console.log('Done. Run: yarn workspace @tonkeeper/locales build');
