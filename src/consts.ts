// ДОКА — константы проекта и база знаний (клиентский маркетинг и SEO)
// Source of truth: домен, контакты, лестница цен, FAQ. Не дублировать в llms/страницах.

export const SITE_UVP = "Интеллектуальная система автоматизации ВЭД-логистики и таможенного декларирования";

export const SITE_DESCRIPTION =
  "ДОКА — автономная система автоматизации ВЭД-логистики. Автоматический разбор инвойсов, подбор кодов ТН ВЭД ЕАЭС трёхступенчатым ИИ-контролем (Юрист, Инспектор, Координатор), расчёт таможенных рисков и выгрузка готовых деклараций в Альта-ГТД и 1С:ERP. Работает на серверах компании без выноса данных (152-ФЗ). Правообладатель ООО «ГК Фороней».";

export const SITE_KEYWORDS = [
  "ДОКА ВЭД",
  "автоматизация ВЭД",
  "таможенное декларирование",
  "ТН ВЭД ЕАЭС",
  "распознавание инвойсов",
  "Альта-ГТД интеграция",
  "1С ERP ВЭД",
  "проверка таможенных рисков",
  "защита от КТС",
  "XML декларация",
  "автономная система ВЭД на предприятии",
];

/** Единый канонический origin (без trailing slash). Синхрон с astro.config site. */
export const SITE_CANONICAL_BASE = "https://дока.рус";

/** Сеть сайтов: продукт · правообладатель (Аксёнов) · архитектор (Наумов) */
export const NETWORK = {
  product: { label: "дока.рус", href: "https://дока.рус/", kicker: "Продукт ДОКА" },
  company: { label: "foroney.ru", href: "https://foroney.ru/", kicker: "Аксёнов · ГК «ФОРОНЕЙ»" },
  architect: { label: "aiprocesses.ru", href: "https://aiprocesses.ru/", kicker: "Наумов · архитектор" },
} as const;

export type RelatedKind = "insight" | "case" | "developer" | "method";

export type RelatedLink = {
  kind: RelatedKind;
  kicker: string;
  title: string;
  href: string;
};

/** Каталог перекрёстных ссылок: продукт · ГК · архитектор */
export const NETWORK_LINKS = {
  "foroney-xml": {
    kind: "insight" as const,
    kicker: "Инсайт · foroney.ru",
    title: "Как ДОКА готовит XML из инвойса",
    href: "https://foroney.ru/insights/doka-invoice-xml/",
  },
  "foroney-doka": {
    kind: "case" as const,
    kicker: "Кейс · foroney.ru",
    title: "ДОКА: инвойс → XML Альта-ГТД",
    href: "https://foroney.ru/projects/doka/",
  },
  "foroney-dpi": {
    kind: "insight" as const,
    kicker: "Инсайт · foroney.ru",
    title: "Скан ниже 300 DPI: OCR не спасёт",
    href: "https://foroney.ru/insights/doc-preparation/",
  },
  "foroney-asis": {
    kind: "insight" as const,
    kicker: "Инсайт · foroney.ru",
    title: "Чеклист as-is (перепечатка Наумова)",
    href: "https://foroney.ru/insights/as-is-checklist/",
  },
  "foroney-bpmn": {
    kind: "insight" as const,
    kicker: "Инсайт · foroney.ru",
    title: "Сначала BPMN, потом робот или ИИ",
    href: "https://foroney.ru/insights/bpmn-formal-chaos/",
  },
  "foroney-machine": {
    kind: "case" as const,
    kicker: "Кейс · foroney.ru",
    title: "Цифровая трансформация машиностроения",
    href: "https://foroney.ru/projects/digital-transformation-machine-building/",
  },
  "foroney-konakri": {
    kind: "case" as const,
    kicker: "Кейс · foroney.ru",
    title: "Мониторинг перегрузки в Конакри",
    href: "https://foroney.ru/projects/remote-monitoring-konakri/",
  },
  "foroney-local": {
    kind: "method" as const,
    kicker: "Услуга · foroney.ru",
    title: "Локальный ИИ на GPU завода",
    href: "https://foroney.ru/services/local-ai/",
  },
  "foroney-home": {
    kind: "developer" as const,
    kicker: "Разработчик · foroney.ru",
    title: "Аксёнов Юрий Васильевич — автор ДОКА",
    href: "https://foroney.ru/",
  },
  "foroney-naumov": {
    kind: "insight" as const,
    kicker: "Инсайт · foroney.ru",
    title: "Наумов: сначала as-is, потом модель",
    href: "https://foroney.ru/insights/what-is-apre/",
  },
  "aip-doka-case": {
    kind: "case" as const,
    kicker: "Кейс · aiprocesses.ru",
    title: "ДОКА: инвойс → XML в Альта-ГТД",
    href: "https://aiprocesses.ru/cases/doka-ved/",
  },
  "aip-about": {
    kind: "developer" as const,
    kicker: "Архитектор · aiprocesses.ru",
    title: "Наумов Павел Владимирович — архитектор ДОКА",
    href: "https://aiprocesses.ru/about/",
  },
  "aip-asis": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "Чеклист as-is: что спросить до ИИ",
    href: "https://aiprocesses.ru/insights/as-is-checklist/",
  },
  "aip-local": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "Локальный ИИ: когда нужен, а когда мода",
    href: "https://aiprocesses.ru/insights/local-ai-when-needed/",
  },
  "aip-apre": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "Что такое реконструкция процессов с ИИ",
    href: "https://aiprocesses.ru/insights/what-is-apre/",
  },
  "aip-paper": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "Почему ИИ на регламенте не взлетает",
    href: "https://aiprocesses.ru/insights/why-ai-on-paper-fails/",
  },
  "aip-audit": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "Как устроен AI-аудит предприятия",
    href: "https://aiprocesses.ru/insights/enterprise-ai-audit/",
  },
  "aip-foroney": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "ГК «ФОРОНЕЙ» и продукт ДОКА",
    href: "https://aiprocesses.ru/insights/gk-foroney/",
  },
  "aip-doka": {
    kind: "insight" as const,
    kicker: "Инсайт · aiprocesses.ru",
    title: "ДОКА: как устроен контур ВЭД",
    href: "https://aiprocesses.ru/insights/doka-ved/",
  },
  "aip-aist": {
    kind: "case" as const,
    kicker: "Кейс · aiprocesses.ru",
    title: "КТПП: чертёж → техмаршрут в 1С",
    href: "https://aiprocesses.ru/cases/aist/",
  },
} as const;

export type NetworkLinkId = keyof typeof NETWORK_LINKS;

export function pickNetwork(...ids: NetworkLinkId[]): RelatedLink[] {
  return ids.map((id) => NETWORK_LINKS[id]);
}

/** Дефолтный блок «читать на других сайтах» */
export const RELATED_READING: RelatedLink[] = pickNetwork(
  "foroney-xml",
  "foroney-doka",
  "foroney-dpi",
  "aip-asis",
  "aip-doka",
  "aip-doka-case",
  "foroney-home",
  "aip-about",
);

/** Контекстные подборки: не один и тот же список на всех страницах */
export const RELATED_BY_PAGE = {
  home: pickNetwork("foroney-xml", "foroney-doka", "aip-asis", "aip-doka", "foroney-home", "aip-about"),
  method: pickNetwork("foroney-xml", "aip-asis", "aip-paper", "foroney-dpi", "aip-doka"),
  cases: pickNetwork("foroney-doka", "foroney-dpi", "aip-doka", "aip-aist", "foroney-machine"),
  about: pickNetwork("foroney-home", "aip-about", "aip-asis", "aip-foroney", "foroney-naumov"),
  foroney: pickNetwork("foroney-xml", "foroney-doka", "foroney-local", "aip-foroney", "aip-about"),
  architect: pickNetwork("aip-asis", "aip-local", "aip-apre", "aip-doka", "aip-doka-case", "foroney-home", "foroney-naumov"),
  materials: pickNetwork("aip-asis", "aip-local", "foroney-xml", "foroney-local", "aip-doka", "aip-doka-case"),
} as const;

/** Пересказы чужих материалов на этом домене (канон остаётся у автора) */
export const LOCAL_MATERIALS = [
  {
    slug: "local-ai",
    source: "foroney" as const,
    kicker: "Материал ГК «ФОРОНЕЙ»",
    title: "Локальный ИИ на предприятии",
    description: "GraphRAG, SGLang, Qwen на GPU завода. Тот же контур, что стоит под ДОКА.",
    original: "https://foroney.ru/services/local-ai/",
    originalLabel: "foroney.ru/services/local-ai/",
  },
  {
    slug: "as-is",
    source: "aiprocesses" as const,
    kicker: "Материал архитектора",
    title: "Чеклист as-is до пилота",
    description: "Семь блоков вопросов Наумова: границы, роли, теневые контуры, данные.",
    original: "https://aiprocesses.ru/insights/as-is-checklist/",
    originalLabel: "aiprocesses.ru/insights/as-is-checklist/",
  },
  {
    slug: "process",
    source: "aiprocesses" as const,
    kicker: "Материал архитектора",
    title: "Сначала процесс, потом модель",
    description: "Реконструкция as-is и почему чат поверх регламента не взлетает.",
    original: "https://aiprocesses.ru/insights/what-is-apre/",
    originalLabel: "aiprocesses.ru/insights/what-is-apre/",
  },
] as const;

/** OG / Twitter preview (absolute URL) — реальный UI, не abstract gradient */
export const SITE_OG_IMAGE = `${SITE_CANONICAL_BASE}/screens/doka-split-view-council.jpg`;
export const SITE_OG_IMAGE_ALT =
  "Интерфейс ДОКА: разбор инвойса и ИИ-консилиум (Юрист, Инспектор, Координатор)";

export const HERO = {
  /** SEO / <title> и H1 на лендинге — исход, не боль */
  headline: "Инвойс 40 страниц → XML в Альта-ГТД за минуты",
  h1: "Инвойс 40 страниц → XML в Альта-ГТД за минуты",
  pain: "4 часа в Альте на один инвойс. Один неверный код ТН ВЭД — КТС и простой.",
  lead: "Спецификация, коды ТН ВЭД ЕАЭС с обоснованием, риски КТС и проект XML — за 3–5 минут. Три эксперта на ваших серверах (152-ФЗ). Старт — разбор 5 файлов за 24 часа, 0 ₽.",
  cta: {
    label: "Разбор 5 файлов — 0 ₽",
    href: "/razbor/",
  },
  secondaryCta: {
    label: "Как это работает",
    href: "/method/",
  },
};

/** Боли для главной (editorial list, без icon-tiles) */
export const PAIN_POINTS = [
  {
    title: "Инвойсы 30–50 страниц и ручной перенос в Альта-ГТД",
    body: "Плотные PDF и сканы: декларант днями переносит позиции, сверяет веса и суммы.",
  },
  {
    title: "Коды поставщика ≠ ТН ВЭД ЕАЭС",
    body: "Ошибка в одной цифре — доначисления, штрафы по ст. 16.2 КоАП РФ, споры с инспектором.",
  },
  {
    title: "КТС и простой на СВХ",
    body: "Расхождения по цене или описанию всплывают при подаче — груз стоит, пока правят декларацию.",
  },
  {
    title: "Нельзя отдать инвойсы в облачный ИИ",
    body: "Коммерческая тайна и 152-ФЗ: публичные сервисы для закрытого контура неприемлемы.",
  },
  {
    title: "Зоопарк: OCR / Альта / 1С без конвейера",
    body: "Данные перекладывают руками между программами — нет сквозного пути «PDF → XML → учёт».",
  },
  {
    title: "Сборка XML с нуля",
    body: "Валидация схемы и ручная сборка декларации съедают до 70% времени специалиста на поставку.",
  },
];

/** Сегменты ЛПР */
export const AUDIENCES = [
  {
    role: "Руководитель ВЭД / CDTO",
    hook: "ФОТ, сроки поставок, пилот без покупки «всего ИИ»",
    outcome: "−85% часов на разбор, оплата по этапам, on-prem контур",
  },
  {
    role: "Декларант / таможенный представитель",
    hook: "Рутина, Графа 31, обоснование кода, XML в Альта",
    outcome: "Готовая спецификация + комментарий по рискам до подачи",
  },
  {
    role: "СБ / ИБ / compliance",
    hook: "Утечка инвойсов, 152-ФЗ, ГОЗ, NDA",
    outcome: "Данные на ваших серверах, без внешнего API по умолчанию",
  },
];

export const CTA = {
  label: "Получить экспресс-разбор 5 инвойсов",
  href: "/razbor/",
  description: "Отправьте 5 файлов инвойсов — получите экспертную проверку подбора кодов ТН ВЭД, расчёт пошлин и XML-проект декларации за 24 часа.",
};

export const NAV = [
  { label: "Разбор", href: "/razbor/" },
  { label: "Услуги", href: "/services/" },
  { label: "Метод", href: "/method/" },
  { label: "Кейсы", href: "/cases/" },
  { label: "Контакты", href: "/contact/" },
];

export const COMPANY = {
  name: "ООО «ГК Фороней»",
  phone: "+7 981 167-16-07",
  phoneHref: "tel:+79811671607",
  email: "foroney@foroney.ru",
  url: "https://foroney.ru/",
  telegram: "https://foroney.ru/contact",
  telegramHandle: "@foroney_ru",
};

/**
 * Заявка: FormSubmit AJAX → COMPANY.email.
 * Первый POST с нового домена шлёт на ящик письмо «Confirm your email» —
 * пока его не подтвердить, заявки не приходят.
 * Если FormSubmit молчит — форма открывает mailto с текстом заявки.
 */
export const LEAD_FORM = {
  endpoint: `https://formsubmit.co/ajax/${COMPANY.email}`,
  mailto: `mailto:${COMPANY.email}`,
  telegram: "https://t.me/foroney_ru",
  maxFiles: 5,
  maxFileMb: 8,
};

/** Автор ДОКА — краткая справка; подробности на личном сайте */
export const AUTHOR = {
  name: "Наумов Павел Владимирович",
  shortName: "Павел Наумов",
  eyebrow: "Разработчик",
  role: "Архитектор системы ДОКА",
  roleShort: "архитектор ДОКА",
  tag: "С 2009 в системах",
  personalSite: "https://aiprocesses.ru/",
  personalAbout: "https://aiprocesses.ru/about/",
  siteLabel: "aiprocesses.ru",
  aboutLabel: "aiprocesses.ru/about →",
  photo: "/images/authors/naumov.webp",
  phone: COMPANY.phone,
  phoneHref: COMPANY.phoneHref,
  email: COMPANY.email,
  bio:
    "Больше семнадцати лет в системах и процессах: ФНС, Водоканал Санкт-Петербурга, ЦТСС, завод «Буревестник». Разбираю, как предприятие работает на деле, и помогаю поставить ИИ туда, где есть данные, хозяин процесса и понятный смысл.",
  career: [
    { years: "2009–2011", org: "ФНС РФ", active: false },
    { years: "2011–2012", org: "Водоканал", active: false },
    { years: "2013–2021", org: "ЦТСС", active: false },
    { years: "2021+", org: "Буревестник CDTO", active: true },
  ],
};

export const CO_AUTHOR = {
  name: "Аксёнов Юрий Васильевич",
  shortName: "Юрий Аксёнов",
  eyebrow: "Разработчик",
  role: "Автор системы ДОКА · руководитель ГК «ФОРОНЕЙ»",
  roleShort: "автор ДОКА",
  tag: "15 лет в производстве",
  personalSite: "https://foroney.ru/",
  personalAbout: "https://foroney.ru/insights/",
  siteLabel: "foroney.ru",
  aboutLabel: "foroney.ru/insights →",
  photo: "/images/authors/aksenov.webp",
  bio:
    "Имеет 15-летний стаж в управлении производством, автоматизации и цифровой трансформации. Занимал руководящие должности на предприятиях машиностроения, обладает глубоким пониманием бизнеса — от формирования себестоимости единицы продукции до разработки стратегии развития. Специализируется на внедрении автоматизированных решений.",
  career: [] as { years: string; org: string; active: boolean }[],
};

/** Порядок на сайте: Аксёнов (foroney.ru), затем Наумов (aiprocesses.ru). */
export const DEVELOPERS = [CO_AUTHOR, AUTHOR] as const;

export const COPYRIGHT_HOLDER = {
  name: "ООО «ГК Фороней»",
  url: "https://foroney.ru/",
};

export const CERT_ID = "2026681995";
export const CERT_URL = "/2026681995.eod.pdf";

// Продуктовая лестница внедрения ПО «ДОКА» — единый прайс для сайта и llms
export const SERVICES_STAIRCASE = [
  {
    id: "lead-magnet",
    name: "Экспресс-разбор 5 файлов",
    price: "0 ₽",
    duration: "24 часа",
    limit: "для новых клиентов",
    deliverables: "Выдача готовой спецификации 5 инвойсов, точные коды ТН ВЭД, расчёт пошлин и тестовый XML-проект для Альта-ГТД.",
    result: "Наглядная демонстрация точности распознавания и подбора кодов на реальных документах компании.",
    link: "/razbor/",
    isPrimary: true
  },
  {
    id: "pilot-launch",
    name: "Тестовый пилот на номенклатуре",
    price: "от 250 000 ₽",
    duration: "2–3 недели",
    deliverables: "Запуск автономного контура на массиве ваших инвойсов (до 1000 позиций), калибровка правил ТН ВЭД под вашу номенклатуру. Железо: пилот на сервере заказчика или временном стенде (обсуждается отдельно).",
    result: "Подтверждённая экономия порядка 85% рабочего времени декларантов и расчёт точности перед полным внедрением.",
    link: "/services/#pilot-launch"
  },
  {
    id: "enterprise-deploy",
    name: "Внедрение в контур Enterprise",
    price: "от 650 000 ₽",
    duration: "3–6 недель",
    deliverables: "Развёртывание On-Premises (152-ФЗ), интеграция с Альта-ГТД / 1С:ERP, регламенты. В стоимость ПО и внедрения не входят сервер, GPU, СХД — отдельный CAPEX/аренда заказчика.",
    result: "Автоматизированный конвейер декларирования от PDF до подачи на вашей инфраструктуре.",
    link: "/services/#enterprise-deploy"
  },
  {
    id: "support-fts",
    name: "Поддержка & Базы ФТС",
    price: "по договору",
    duration: "подписка",
    deliverables: "Регулярное обновление справочников ТН ВЭД ЕАЭС, решений ЕЭК, ценовых профилей рисков и техподдержка 24/7.",
    result: "Актуальность нормативной базы и контроль рисков корректировок таможенной стоимости (КТС).",
    link: "/services/#support-fts"
  }
];

/** Прозрачность по CAPEX: on-prem без «скрытого» железа */
export const INFRA_NOTE = {
  title: "Железо и инфраструктура — отдельная статья",
  body: "Лицензия и работы по внедрению ДОКА не включают серверы, GPU, СХД и стойку. On-Premises: под vision-модели и пакетную обработку инвойсов нужны вычислительные ресурсы. Если у вас уже есть подходящий хост — используем его. Если нет — фиксируем требования и смету на закупку или аренду: это CAPEX/OPEX заказчика, не «бесплатный бонус» к ПО.",
  bullets: [
    "ПО + внедрение + интеграция — в прайсе ДОКА",
    "Сервер / GPU / диск / сеть — бюджет инфраструктуры заказчика",
    "Требования к железу — после оценки объёма документов (пилот / enterprise)",
  ],
};

/** Каталог кейсов и сценариев применения */
export const CASE_STUDIES = [
  {
    slug: "doka",
    title: "32-страничные инвойсы: от PDF до XML в Альта-ГТД",
    description:
      "Сверхплотные инвойсы поставок оборудования без кодов ТН ВЭД. Консилиум сформировал Графу 31, отсёк ложные субпозиции и подготовил XML-проект.",
    tag: "Инвойсы & ТН ВЭД",
    tags: ["32 страницы", "ТН ВЭД", "Альта-ГТД"],
    kpi: "3–4 ч → ~5–6 мин",
    industry: "Дистрибуция оборудования",
  },
  {
    slug: "tnved-obosnovanie",
    title: "Графа 31 и отказ от ложных кодов: сервер и коммутатор",
    description:
      "Классификация ИТ-номенклатуры: обоснование кода, пошлина/НДС, явный отказ от альтернатив 8471* — аргументация для инспектора.",
    tag: "Классификация ТН ВЭД",
    tags: ["Графа 31", "обоснование", "КТС"],
    kpi: "Код + почему не другой",
    industry: "ИТ и электроника",
  },
  {
    slug: "alta-xml",
    title: "XML-проект декларации без ручной сборки схемы",
    description:
      "От проверенной спецификации к файлу для Альта-ГТД: schema-валидация, меньше рутины на XML, декларант проверяет и подаёт.",
    tag: "Альта-ГТД / XML",
    tags: ["XML", "Альта-ГТД", "валидация"],
    kpi: "Экспорт в рабочий контур",
    industry: "Таможенный контур",
  },
  {
    slug: "onprem-152",
    title: "On-Premises: инвойсы не уходят в публичное облако",
    description:
      "Закрытый контур под 152-ФЗ: локальный разбор, NDA на пилоте, без SaaS-демо «загрузите в интернет». Железо — отдельная статья CAPEX.",
    tag: "Безопасность",
    tags: ["152-ФЗ", "On-Prem", "железо"],
    kpi: "Данные у вас",
    industry: "Enterprise / compliance",
  },
  {
    slug: "precursors-avia",
    title: "Прекурсоры авиахимии: особый порядок ПП-681",
    description:
      "МЭК, толуол и ацетон в инвойсе MRO. Система не выпускает их как обычную химию: табл. II, лицензия, журнал учёта, высокий риск.",
    tag: "Комплаенс / прекурсоры",
    tags: ["ПП-681", "авиахимия", "лицензия"],
    kpi: "Не «обычный растворитель»",
    industry: "Авиационный MRO",
  },
];

export const PILLARS = [
  {
    title: "Команда виртуальных ИИ-экспертов",
    description:
      "3 независимых алгоритмических эксперта (Юрист, Инспектор, Координатор) проводят перекрёстную проверку инвойса, решений ЕЭК и базы прецедентов ФТС.",
  },
  {
    title: "Распознавание сложных документов и сканов",
    description:
      "Визуальный анализатор извлекает данные из многостраничных инвойсов, спецификаций и MSDS с сохранением структуры таблиц и артикулов.",
  },
  {
    title: "Защита коммерческой тайны (152-ФЗ)",
    description:
      "Данные не покидают периметр вашей компании. Система разворачивается локально на ваших серверах без зависимости от внешних облаков.",
  },
  {
    title: "Интеграция с Альта-ГТД и 1С:ERP",
    description:
      "Экспорт проверенной спецификации и XML-декларации в Альта-ГТД, Контур.Декларант и учётные базы 1С:ERP / 1С:УТ.",
  },
];

export const METHOD_STEPS = [
  {
    num: "01",
    title: "Извлечение данных из многостраничных PDF",
    description:
      "Алгоритм распознаёт таблицы, сканы, спецификации и инвойсы без сдвига строк и потери артикулов.",
  },
  {
    num: "02",
    title: "Трёхступенчатая ИИ-экспертиза товаров",
    description:
      "Юрист проверяет нетарифные ограничения, Инспектор подбирает код ТН ВЭД по базе решений ФТС, Координатор формирует итоговый вердикт.",
  },
  {
    num: "03",
    title: "Расчёт таможенных платежей и рисков КТС",
    description:
      "Привязка ставок пошлин, НДС 20%, сопоставление со средневзвешенными ценовыми профилями риска таможни.",
  },
  {
    num: "04",
    title: "Формирование XML-декларации и экспорт",
    description:
      "Генерация XML-проектов для таможенных программ (Альта-ГТД / Контур.Декларант) и выгрузка спецификации в 1С:ERP.",
  },
];

export const LONG_LETTER = `Система ДОКА создавалась как ответ на реальную проблему декларантов, импортёров и директоров по ВЭД-логистике. При обработке поставок из Китая, Турции и стран Ближнего Востока инвойсы приходят на 30–50 страниц с плотными таблицами, где коды ТН ВЭД либо отсутствуют, либо указаны в зарубежном формате.

Ручной перенос тысяч позиций в Альта-ГТД и поиск кодов занимает от нескольких часов до дней на одну поставку. Ошибка в одном знаке кода приводит к доначислениям, корректировке таможенной стоимости (КТС), задержке груза на СВХ и штрафам по ст. 16.2 КоАП РФ.

ДОКА решает эту задачу системно: мы не используем публичные облачные нейросети, которые выносят коммерческие данные наружу. В ДОКА работает автономная команда из трёх виртуальных экспертов (Юрист, Инспектор, Координатор), опирающаяся на базу решений ФТС РФ и правила ЕЭК. Система устанавливается локально в закрытом контуре вашей компании.

Отправьте 5 файлов инвойсов на бесплатный разбор — в течение 24 часов вы получите табличную спецификацию с классификацией кодов ТН ВЭД, расчётом пошлин и сформированным XML-файлом для Альта-ГТД.`;

export const FAQ = [
  {
    question: "Что представляет собой система ДОКА?",
    answer:
      "ДОКА — автономная система автоматизации ВЭД-логистики и таможенного декларирования. Она автоматизирует распознавание многостраничных инвойсов, подбор кодов ТН ВЭД ЕАЭС, оценку таможенных рисков и генерацию XML-деклараций для Альта-ГТД и 1С:ERP.",
  },
  {
    question: "Как подобрать код ТН ВЭД по инвойсу автоматически?",
    answer:
      "ДОКА извлекает позиции из PDF/скана, Инспектор предлагает код ТН ВЭД ЕАЭС с обоснованием (в т.ч. почему отброшены альтернативы), Юрист сверяет ограничения, Координатор сводит риски. Итог — спецификация и комментарий для декларанта, не «чёрный ящик».",
  },
  {
    question: "Как работает команда виртуальных ИИ-экспертов?",
    answer:
      "Каждый документ проверяют 3 независимых ИИ-специалиста: Юрист (нормы и ограничения), Инспектор (поиск и обоснование кода ТН ВЭД) и Координатор (оценка рисков КТС). Перекрёстная проверка снижает ошибки, типичные при ручной работе одного специалиста.",
  },
  {
    question: "Можно ли автоматизировать декларирование без облака (on-prem, 152-ФЗ)?",
    answer:
      "Да. ДОКА разворачивается On-Premises на серверах компании. Вычисления и базы работают локально; инвойсы не передаются во внешние публичные API. Это основной сценарий для коммерческой тайны, 152-ФЗ и закрытых контуров. NDA — по запросу на этапе экспресс-разбора.",
  },
  {
    question: "Как выгрузить XML-декларацию в Альта-ГТД?",
    answer:
      "После разбора и проверки позиций ДОКА формирует XML-проект декларации со schema-валидацией для импорта в Альта-ГТД (также ориентация на Контур.Декларант). Финальную проверку перед подачей выполняет декларант.",
  },
  {
    question: "С какими таможенными и учётными программами интегрируется ДОКА?",
    answer:
      "ДОКА формирует файлы декларирования, совместимые с Альта-ГТД, Контур.Декларант, а также выгружает спецификации в 1С:ERP, 1С:Управление торговлей и SAP.",
  },
  {
    question: "Как система справляется со сложными или нечёткими сканами?",
    answer:
      "Для нетиповых или размытых документов используется визуальный анализатор геометрии таблиц: данные считываются с изображения с сохранением структуры строк и артикулов.",
  },
  {
    question: "Сколько времени занимает разбор инвойса?",
    answer:
      "Вместо 3–4 часов ручной работы специалиста ДОКА обрабатывает многостраничный инвойс за 3–5 минут и готовит проверенный проект XML-декларации (на тестовых прогонах — порядка 5–6 минут на 32-страничный документ).",
  },
  {
    question: "С чего начать и что входит в бесплатный разбор 5 файлов?",
    answer:
      "До 5 файлов инвойсов → за 24 часа демо-выдача распознавания, анализ сложности кодов ТН ВЭД, расчёт пошлин и XML для Альта-ГТД. Желательно обезличить контрагентов; NDA — по запросу. Дальше — пилот на номенклатуре (от 250 000 ₽), затем Enterprise on-prem (от 650 000 ₽).",
  },
  {
    question: "Сколько стоит автоматизация таможенного декларирования?",
    answer:
      "Ориентиры: экспресс-разбор 0 ₽; тестовый пилот от 250 000 ₽ (2–3 недели); внедрение Enterprise on-prem от 650 000 ₽ (3–6 недель); поддержка и базы ФТС — по договору. Точная смета после пилота на вашей номенклатуре.",
  },
  {
    question: "Кто является правообладателем и авторами ДОКА?",
    answer:
      'Правообладатель — ООО «ГК Фороней» (https://foroney.ru/). Авторы — Аксёнов Юрий Васильевич (15 лет в управлении производством, автоматизации и цифровой трансформации; автор ДОКА) и Наумов Павел Владимирович (архитектор ДОКА, https://aiprocesses.ru/about/). Свидетельство Роспатента №' + CERT_ID + '.',
  },
  {
    question: "Помогает ли ДОКА избежать штрафов и корректировок таможенной стоимости (КТС)?",
    answer:
      "Система подсвечивает риски неверного кодирования и КТС до подачи декларации: сверка описания товара с номенклатурой и ведомственными решениями ФТС. Это снижает вероятность ошибки, но не заменяет ответственность декларанта / таможенного представителя.",
  },
  {
    question: "Нужно ли публичное SaaS-демо с загрузкой инвойсов в интернет?",
    answer:
      "Публичного облачного демо с выносом ваших инвойсов нет — это сознательное ограничение безопасности. Вместо него: бесплатный экспресс-разбор 5 файлов в контролируемом контуре, NDA по запросу, далее пилот on-prem.",
  },
  {
    question: "Входит ли сервер и GPU в стоимость внедрения ДОКА?",
    answer:
      "Нет. Стоимость ПО, пилота и внедрения — это работы и лицензия. Сервер, GPU, СХД, сеть и стойка — отдельная статья CAPEX/аренды заказчика. Если железо уже есть и подходит по нагрузке — используем его; если нет — выдаём требования и смету на закупку или аренду после оценки объёма документов.",
  },
];

/** HowTo steps for schema.org (method / GEO) */
export const HOWTO_INVOICE_TO_XML = {
  name: "Как ДОКА готовит XML-декларацию из инвойса",
  description:
    "Четыре шага: извлечение данных из PDF, трёхступенчатая ИИ-экспертиза, расчёт платежей и рисков КТС, экспорт XML в Альта-ГТД.",
  steps: METHOD_STEPS.map((s) => ({
    name: s.title,
    text: s.description,
  })),
};

export const GEO = {
  region: "RU",
  placename: "Россия",
  position: "55.7558;37.6176",
  icbm: "55.7558,37.6176",
};

/** Site-wide JSON-LD building blocks (stable @id for GEO entity linking) */
export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_CANONICAL_BASE}/#organization`,
    name: "ООО «ГК Фороней»",
    url: "https://foroney.ru/",
    email: COMPANY.email,
    telephone: COMPANY.phone,
    sameAs: [NETWORK.company.href, NETWORK.architect.href, `${SITE_CANONICAL_BASE}/foroney/`],
    brand: {
      "@type": "Brand",
      name: "ДОКА",
    },
  };
}

export function buildSoftwareJsonLd() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_CANONICAL_BASE}/#software`,
    name: "ДОКА — Интеллектуальная система автоматизации ВЭД-логистики",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Linux, Enterprise Server",
    offers: SERVICES_STAIRCASE.map((s) => {
      const digits = s.price.replace(/[^\d]/g, "");
      const offer: Record<string, unknown> = {
        "@type": "Offer",
        name: s.name,
        description: s.deliverables,
        priceCurrency: "RUB",
        url: s.link.startsWith("http") ? s.link : `${SITE_CANONICAL_BASE}${s.link.split("#")[0]}`,
        availability: "https://schema.org/InStock",
      };
      if (digits) offer.price = digits;
      else offer.priceSpecification = { "@type": "PriceSpecification", description: s.price };
      return offer;
    }),
    author: [
      {
        "@type": "Person",
        name: "Аксёнов Юрий Васильевич",
        jobTitle: "Автор системы ДОКА",
        description:
          "15-летний стаж в управлении производством, автоматизации и цифровой трансформации. Руководящие должности на предприятиях машиностроения; себестоимость, стратегия развития, внедрение автоматизированных решений.",
      },
      {
        "@type": "Person",
        name: "Наумов Павел Владимирович",
        jobTitle: "Архитектор системы ДОКА",
        url: "https://aiprocesses.ru/about/",
        sameAs: ["https://aiprocesses.ru/"],
      },
    ],
    copyrightHolder: { "@id": `${SITE_CANONICAL_BASE}/#organization` },
    description: SITE_DESCRIPTION,
    url: `${SITE_CANONICAL_BASE}/`,
    image: SITE_OG_IMAGE,
  };
}

export function buildHowToJsonLd() {
  return {
    "@type": "HowTo",
    "@id": `${SITE_CANONICAL_BASE}/method/#howto`,
    name: HOWTO_INVOICE_TO_XML.name,
    description: HOWTO_INVOICE_TO_XML.description,
    step: HOWTO_INVOICE_TO_XML.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildFaqJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_CANONICAL_BASE}/faq/#faq`,
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_CANONICAL_BASE}/#website`,
    name: "ДОКА ВЭД",
    url: `${SITE_CANONICAL_BASE}/`,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_CANONICAL_BASE}/#organization` },
    inLanguage: "ru-RU",
  };
}
