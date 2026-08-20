import { useEffect, useMemo, useState } from "preact/hooks";

type View = {
  id: string;
  label: string;
  src: string;
  alt: string;
  caption: string;
};

type Doc = {
  id: string;
  short: string;
  label: string;
  risk: string;
  riskTone: "ok" | "warn" | "bad";
  caseHref: string;
  caseLabel: string;
  views: View[];
};

const DOCS: Doc[] = [
  {
    id: "helionix",
    short: "Helionix",
    label: "ИТ · 2 позиции",
    risk: "Средний",
    riskTone: "warn",
    caseHref: "/cases/tnved-obosnovanie/",
    caseLabel: "Кейс: обоснование кодов",
    views: [
      {
        id: "switch",
        label: "Коммутатор",
        src: "/screens/doka-helionix-switch.jpg",
        alt: "ДОКА: инвойс Helionix, позиция коммутатора NX-S48, код 8517620002",
        caption: "Коммутатор NX-S48 → 8517620002. Отказ от 8537 и соседнего 8536.",
      },
      {
        id: "server",
        label: "Сервер",
        src: "/screens/doka-helionix-server.jpg",
        alt: "ДОКА: сервер Helionix RX-2208, код 8471500000",
        caption: "Сервер RX-2208 → 8471500000, не микросхемы 8542 и не мониторы 84716.",
      },
      {
        id: "analytics",
        label: "Консилиум",
        src: "/screens/doka-helionix-analytics.jpg",
        alt: "ДОКА: консилиум по Helionix, риск средний",
        caption: "Риск средний: в карточке нет контракта и Incoterms, хотя они есть на PDF.",
      },
    ],
  },
  {
    id: "aurelia",
    short: "Aurelia",
    label: "Корм / химия · 2 позиции",
    risk: "Низкий",
    riskTone: "ok",
    caseHref: "/cases/doka/",
    caseLabel: "Кейс: разбор инвойса",
    views: [
      {
        id: "item",
        label: "Графа 31",
        src: "/screens/doka-aurelia-item.jpg",
        alt: "ДОКА: холинхлорид Aurelia, Графа 31 и код 2309909601",
        caption: "Холинхлорид 75% на носителе → 2309909601. Бетаин → 2923900000.",
      },
      {
        id: "council",
        label: "Консилиум",
        src: "/screens/doka-aurelia-council.jpg",
        alt: "ДОКА: консилиум Aurelia, риск низкий, статус Одобрено",
        caption: "Юрист и координатор: глава совпадает с описанием, документ одобрен. Попросить весовые документы.",
      },
    ],
  },
  {
    id: "nordvolt",
    short: "Nordvolt",
    label: "Электро · 4 позиции",
    risk: "Низкий",
    riskTone: "ok",
    caseHref: "/cases/alta-xml/",
    caseLabel: "Кейс: XML в Альта",
    views: [
      {
        id: "list",
        label: "4 позиции",
        src: "/screens/doka-nordvolt-list.jpg",
        alt: "ДОКА: четыре позиции Nordvolt с кодами ТН ВЭД",
        caption: "Сервопривод, БП, автомат, трансформатор тока — 4/4 кода, риск низкий.",
      },
      {
        id: "item",
        label: "Карточка",
        src: "/screens/doka-nordvolt-item.jpg",
        alt: "ДОКА: карточка позиции Nordvolt с Графой 31",
        caption: "Готовая спецификация: можно сверять и выгружать XML-проект в Альта-ГТД.",
      },
      {
        id: "analytics",
        label: "Консилиум",
        src: "/screens/doka-nordvolt-analytics.jpg",
        alt: "ДОКА: консилиум Nordvolt, риск низкий",
        caption: "Консилиум подтверждает коды. Документ готов к проверке декларантом.",
      },
    ],
  },
  {
    id: "velaero",
    short: "Velaero",
    label: "Прекурсоры · 3 позиции",
    risk: "Высокий",
    riskTone: "bad",
    caseHref: "/cases/precursors-avia/",
    caseLabel: "Кейс: ПП-681",
    views: [
      {
        id: "items",
        label: "Позиции",
        src: "/screens/doka-velaero-items.jpg",
        alt: "ДОКА: три позиции прекурсоров Velaero, фильтр ПП-681",
        caption: "МЭК 2914120000, толуол 2902300000, ацетон 2914110000. Бейдж «Прекурсоры 3».",
      },
      {
        id: "council",
        label: "Консилиум",
        src: "/screens/doka-velaero-council.jpg",
        alt: "ДОКА: консилиум Velaero, высокий риск, особый порядок ПП-681",
        caption: "Не «обычный растворитель»: лицензия, журнал учёта, статус не «Одобрено».",
      },
    ],
  },
];

export default function InvoiceParserDemo() {
  const [docId, setDocId] = useState(DOCS[0].id);
  const [viewId, setViewId] = useState(DOCS[0].views[0].id);

  const doc = useMemo(() => DOCS.find((d) => d.id === docId) ?? DOCS[0], [docId]);
  const view = useMemo(() => doc.views.find((v) => v.id === viewId) ?? doc.views[0], [doc, viewId]);

  useEffect(() => {
    for (const d of DOCS) {
      for (const v of d.views) {
        const img = new Image();
        img.src = v.src;
      }
    }
  }, []);

  function selectDoc(id: string) {
    const next = DOCS.find((d) => d.id === id) ?? DOCS[0];
    setDocId(next.id);
    setViewId(next.views[0].id);
  }

  return (
    <div class="ipd">
      <div class="ipd-bar">
        <div class="ipd-docs" role="tablist" aria-label="Демо-инвойс">
          {DOCS.map((item) => {
            const on = item.id === doc.id;
            return (
              <button
                type="button"
                class={on ? "ipd-doc is-on" : "ipd-doc"}
                role="tab"
                aria-selected={on ? "true" : "false"}
                onClick={() => selectDoc(item.id)}
              >
                <span class="ipd-doc-name">{item.short}</span>
                <span class="ipd-doc-meta">{item.label}</span>
              </button>
            );
          })}
        </div>
        <div class="ipd-views" role="tablist" aria-label="Вкладка разбора">
          {doc.views.map((item) => {
            const on = item.id === view.id;
            return (
              <button
                type="button"
                class={on ? "ipd-view is-on" : "ipd-view"}
                role="tab"
                aria-selected={on ? "true" : "false"}
                onClick={() => setViewId(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <figure class="ipd-stage">
        <img
          src={view.src}
          alt={view.alt}
          width={1680}
          height={980}
          decoding="async"
          fetchPriority="high"
        />
        <figcaption class="ipd-cap">
          <span class={`ipd-risk ipd-risk-${doc.riskTone}`}>Риск: {doc.risk}</span>
          <span>{view.caption}</span>
          <a class="ipd-case" href={doc.caseHref}>{doc.caseLabel} →</a>
        </figcaption>
      </figure>
    </div>
  );
}
