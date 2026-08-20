import { useMemo, useState } from "preact/hooks";

function formatMoney(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function RoiCalculator() {
  const [invCount, setInvCount] = useState(40);
  const [itemsCount, setItemsCount] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(1200);

  const { hours, money } = useMemo(() => {
    const manualMinutes = 30 + itemsCount * 10;
    const dokaMinutes = 5 + itemsCount * 1.2;
    const savedMinutes = Math.max(0, manualMinutes - dokaMinutes);
    const hours = Math.round((savedMinutes * invCount) / 60);
    const money = Math.round(hours * 12 * hourlyRate);
    return { hours, money };
  }, [invCount, itemsCount, hourlyRate]);

  return (
    <div
      class="doka-card"
      style="padding: 28px; background: linear-gradient(135deg, #122A42 0%, #0F172A 100%); color: #FFFFFF; border: 1px solid rgba(221,107,32,0.4); box-shadow: var(--shadow-doka-lg); border-radius: var(--radius-doka-lg);"
    >
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
        <div>
          <span class="doka-badge doka-badge-orange" style="margin-bottom: 8px;">Эффект в цифрах</span>
          <h3 style="font-size: 1.5rem; font-weight: 700; color: #FFFFFF; margin: 0;">Калькулятор экономии ресурсов ВЭД</h3>
          <p style="font-size: 0.875rem; color: #94A3B8; margin-top: 4px;">Рассчитайте сокращение затрат вашей компании при автоматизации ДОКА</p>
        </div>
        <div style="background: rgba(221, 107, 32, 0.15); border: 1px solid #DD6B20; padding: 6px 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 12px; color: #ED8936;">
          Метрика: -85% времени
        </div>
      </div>

      <div class="roi-calc-grid">
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 8px;">
              <span style="color: #CBD5E1;">Инвойсов и спецификаций в месяц:</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: #ED8936;">{invCount} шт</span>
            </div>
            <input
              type="range"
              min={5}
              max={200}
              value={invCount}
              step={5}
              style="width: 100%; accent-color: #DD6B20; cursor: pointer;"
              aria-label="Инвойсов и спецификаций в месяц"
              onInput={(e) => setInvCount(Number((e.currentTarget as HTMLInputElement).value))}
            />
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 8px;">
              <span style="color: #CBD5E1;">Среднее число позиций в документе:</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: #ED8936;">{itemsCount} позиций</span>
            </div>
            <input
              type="range"
              min={3}
              max={100}
              value={itemsCount}
              step={1}
              style="width: 100%; accent-color: #DD6B20; cursor: pointer;"
              aria-label="Среднее число позиций в документе"
              onInput={(e) => setItemsCount(Number((e.currentTarget as HTMLInputElement).value))}
            />
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 8px;">
              <span style="color: #CBD5E1;">Ставка специалиста ВЭД (в час):</span>
              <span style="font-family: var(--font-mono); font-weight: 700; color: #ED8936;">{formatMoney(hourlyRate)} ₽/час</span>
            </div>
            <input
              type="range"
              min={600}
              max={3000}
              value={hourlyRate}
              step={100}
              style="width: 100%; accent-color: #DD6B20; cursor: pointer;"
              aria-label="Ставка специалиста ВЭД в час"
              onInput={(e) => setHourlyRate(Number((e.currentTarget as HTMLInputElement).value))}
            />
          </div>
        </div>

        <div style="padding: 4px 0 0; display: flex; flex-direction: column; justify-content: space-between; gap: 16px;">
          <div>
            <div style="font-size: 12px; font-family: var(--font-mono); color: #FBD38D; margin-bottom: 14px; font-weight: 600; letter-spacing: 0.03em;">Ориентировочный эффект</div>

            <div style="margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <div style="font-size: 0.8125rem; color: #CBD5E1;">Экономия рабочего времени</div>
              <div style="font-size: 1.85rem; font-weight: 700; color: #6EE7B7; font-family: var(--font-mono);">{hours} часов / мес</div>
            </div>

            <div style="margin-bottom: 16px;">
              <div style="font-size: 0.8125rem; color: #CBD5E1;">Финансовая выгода в год (ФОТ)</div>
              <div style="font-size: 2rem; font-weight: 700; color: #FDBA74; font-family: var(--font-mono);">{formatMoney(money)} ₽ / год</div>
            </div>

            <p style="font-size: 12px; color: #CBD5E1; line-height: 1.45; margin: 0;">
              Дополнительно: подсветка рисков КТС и ошибок кодирования до подачи (ст. 16.2 КоАП). Не гарантия нулевых доначислений — финальная ответственность у декларанта.
            </p>
          </div>

          <a href="/razbor/" class="doka-btn doka-btn-primary" style="width: 100%; text-align: center;">Запросить разбор 5 файлов</a>
        </div>
      </div>
    </div>
  );
}
