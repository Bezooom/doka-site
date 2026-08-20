import { useState } from "preact/hooks";

const DOCS = [
  {
    tab: "Инвойс №6881 (Без кодов)",
    title: "COMMERCIAL INVOICE",
    highlight: "POS 1: CHOLINE CHLORIDE 75% DRY | QTY: 20 000 KG",
    lawyerStatus: "ЕЭК №54",
    lawyerFinding: "Поставщик не указал коды ТН ВЭД. Найдены риски неверной декларации материалоемких уплотнителей.",
    inspectorStatus: "База ФТС",
    inspectorFinding: "Отклонено ложное совпадение 'бумага экструдированная'. Присвоен точный код ТН ВЭД: 4016 93 000 5.",
    inspectorBadge: "ТН ВЭД подобран",
    coordinatorStatus: "Оценка рисков",
    coordinatorFinding: "Эксперты единогласно утвердили код ТН ВЭД. Требуется подтверждение сертификата соответствия.",
    badgeText: "Риск КТС (0 ошибок)",
    badgeClass: "doka-badge-risk-high",
    codeLabel: "Код ТН ВЭД: 4016 93 000 5 (Шумоизоляция резины)",
  },
  {
    tab: "Спецификация (23 поз)",
    title: "SPECIFICATION DELL EMC",
    highlight: "POS 1..23: SWITCHES & RACK SERVERS | QTY: 23 UN",
    lawyerStatus: "Структура таблицы",
    lawyerFinding: "Сверхплотная многоколоночная таблица. Распознавание включено в визуальном режиме.",
    inspectorStatus: "Визуальный анализ",
    inspectorFinding: "Распознаны 23 позиции оборудования с чертежными артикулами без сдвигов строк.",
    inspectorBadge: "ТН ВЭД подобран",
    coordinatorStatus: "Пошлины ЕАЭС",
    coordinatorFinding: "Все 23 позиции привязаны к ставкам пошлин. Сгенерирован готовый XML-проект.",
    badgeText: "Средний Риск (23 поз)",
    badgeClass: "doka-badge-risk-med",
    codeLabel: "Код ТН ВЭД: 8481 80 739 9 (Арматура)",
  },
  {
    tab: "Мульти-инвойс (32 стр)",
    title: "INVOICE 32 PAGES",
    highlight: "MULTI-PAGE PACKING LIST | 32 PAGES TOTAL",
    lawyerStatus: "Многостраничный контур",
    lawyerFinding: "Обработаны 32 страницы инвойса за ~5–6 минут. Сопоставление пошлин и НДС 20% по позициям.",
    inspectorStatus: "Спецификация",
    inspectorFinding: "Обнаружено 3 расхождения в весах брутто/нетто. Автоматическая корректировка.",
    inspectorBadge: "ТН ВЭД подобран",
    coordinatorStatus: "Альта-ГТД экспорт",
    coordinatorFinding: "Готово к экспортной загрузке в Альта-ГТД и 1С:ERP без участия человека.",
    badgeText: "Авто-проверка OK",
    badgeClass: "doka-badge-risk-low",
    codeLabel: "Коды ТН ВЭД проверены (32 поз.)",
  },
] as const;

const FileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export default function AgentCouncilVisualizer() {
  const [idx, setIdx] = useState(0);
  const data = DOCS[idx];

  return (
    <div class="doka-mac-window" style="background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 10px; box-shadow: var(--shadow-doka-md); overflow: hidden; position: relative; width: 100%;">
      <div style="background: #F1F5F9; border-bottom: 1px solid #E2E8F0; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; font-family: var(--font-mono);">
        <div style="display: flex; gap: 7px; align-items: center;">
          <span style="width: 11px; height: 11px; border-radius: 50%; background: #FF5F56; display: inline-block;"></span>
          <span style="width: 11px; height: 11px; border-radius: 50%; background: #FFBD2E; display: inline-block;"></span>
          <span style="width: 11px; height: 11px; border-radius: 50%; background: #27C93F; display: inline-block;"></span>
        </div>

        <div style="background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 6px; padding: 4px 20px; font-size: 12px; color: #475569; display: flex; align-items: center; gap: 6px;">
          <span style="color: #059669;">🔒</span>
          <span style="font-weight: 500;">doka.local/v1/council-verify</span>
        </div>

        <span style="font-size: 11px; background: #E0E7FF; color: #3730A3; border: 1px solid #C7D2FE; padding: 2px 10px; border-radius: 4px; font-weight: 600;">
          ОНЛАЙН
        </span>
      </div>

      <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 10px 16px; display: flex; gap: 10px; align-items: center;" id="doc-selector-buttons">
        {DOCS.map((doc, i) => (
          <button
            type="button"
            class={i === idx ? "council-doc-btn active" : "council-doc-btn"}
            aria-pressed={i === idx ? "true" : "false"}
            onClick={() => setIdx(i)}
          >
            <FileIcon />
            <span>{doc.tab}</span>
          </button>
        ))}
      </div>

      <div style="display: grid; grid-template-columns: 180px 1fr; gap: 18px; padding: 20px;" class="mac-body-grid">
        <div style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 8px; padding: 14px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; height: 300px;" class="mini-doc-preview">
          <div class="scan-laser-line"></div>

          <div style="font-family: var(--font-mono); font-size: 11px; color: #334155; line-height: 1.4;">
            <div style="font-weight: 700; font-size: 12px; color: #0F172A; border-bottom: 1px solid #CBD5E1; padding-bottom: 5px; margin-bottom: 10px;">
              {data.title}
            </div>
            <div style="margin-bottom: 6px;"><strong>SELLER:</strong> EASTMAN BV</div>
            <div style="margin-bottom: 6px;"><strong>DATE:</strong> 26.01.2022</div>
            <div style="margin-bottom: 10px;"><strong>INCOTERMS:</strong> FCA GENT</div>
            <div style="background: #FEF3C7; border: 1px solid #FDE68A; padding: 6px; border-radius: 4px; color: #92400E; font-size: 11px; line-height: 1.35;">
              {data.highlight}
            </div>
          </div>

          <div style="border-top: 1px solid #CBD5E1; padding-top: 8px; font-size: 11px; font-family: var(--font-mono); color: #064E3B; display: flex; align-items: center; gap: 6px; font-weight: 600;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #059669;"></span>
            <span>OCR OK</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; justify-content: space-between;" class="expert-pipeline">
          <div class="pipeline-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="background: #F3E8FF; color: #7C3AED; padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 12px;">⚖️ Юрист</span>
                <span style="font-size: 11px; color: #64748B; font-family: var(--font-mono);">{data.lawyerStatus}</span>
              </div>
              <span style="font-size: 11px; background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; padding: 2px 8px; border-radius: 999px; font-weight: 600;">✓ Проверено</span>
            </div>
            <div style="font-size: 12.5px; color: #1E293B; line-height: 1.45;">
              {data.lawyerFinding}
            </div>
          </div>

          <div class="pipeline-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="background: #FFF7ED; color: #DD6B20; padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 12px;">🔍 Инспектор</span>
                <span style="font-size: 11px; color: #64748B; font-family: var(--font-mono);">{data.inspectorStatus}</span>
              </div>
              <span style="font-size: 11px; background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; padding: 2px 8px; border-radius: 999px; font-weight: 600;">{data.inspectorBadge}</span>
            </div>
            <div style="font-size: 12.5px; color: #1E293B; line-height: 1.45;">
              {data.inspectorFinding}
            </div>
          </div>

          <div class="pipeline-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="background: #ECFDF5; color: #059669; padding: 3px 8px; border-radius: 4px; font-weight: 700; font-size: 12px;">🛡️ Координатор</span>
                <span style="font-size: 11px; color: #64748B; font-family: var(--font-mono);">{data.coordinatorStatus}</span>
              </div>
              <span style="font-size: 11px; background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; padding: 2px 8px; border-radius: 999px; font-weight: 600;">✓ Риски: 0%</span>
            </div>
            <div style="font-size: 12.5px; color: #1E293B; line-height: 1.45;">
              {data.coordinatorFinding}
            </div>
          </div>
        </div>
      </div>

      <div style="background: #0B132B; color: #FFFFFF; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; font-family: var(--font-mono); font-size: 12.5px;">
        <div style="display: flex; align-items: center; gap: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block; flex-shrink: 0;" class="doka-pulse-dot is-live" title="Статус симуляции"></span>
          <span style="color: #F1F5F9; font-weight: 600;">{data.codeLabel}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
          <span class={`doka-badge ${data.badgeClass}`} style="font-size: 11px; padding: 4px 10px;">{data.badgeText}</span>
          <a href="/method/" style="background: #DD6B20; color: #FFFFFF; text-decoration: none; padding: 6px 14px; border-radius: 6px; font-weight: 700; font-size: 11.5px;">
            XML Альта-ГТД →
          </a>
        </div>
      </div>
    </div>
  );
}
