import { useRef, useState } from "preact/hooks";

export type LeadFormProps = {
  submitUrl: string;
  mailtoHref: string;
  telegramHref: string;
  inbox: string;
  maxFiles: number;
  maxFileMb: number;
  phone: string;
  phoneHref: string;
};

export default function LeadForm({
  submitUrl,
  mailtoHref,
  telegramHref,
  inbox,
  maxFiles,
  maxFileMb,
  phone,
  phoneHref,
}: LeadFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const maxBytes = maxFileMb * 1024 * 1024;

  function applyFiles(list: FileList | File[]) {
    const all = Array.from(list);
    if (all.length > maxFiles) {
      setFiles(all.slice(0, maxFiles));
      setFileError("Можно приложить не больше " + maxFiles + " файлов.");
      return;
    }
    const tooBig = all.find((f) => f.size > maxBytes);
    if (tooBig) {
      setFiles(all);
      setFileError("«" + tooBig.name + "» больше " + maxFileMb + " МБ. Сожмите файл или уберите его.");
      return;
    }
    setFiles(all);
    setFileError("");
  }

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function onDropZoneKey(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFilePicker();
    }
  }

  function openMailtoFallback(name: string, contact: string, company: string, note: string) {
    const fileNames = files.map((f) => f.name).join(", ") || "без файлов";
    const text = [
      "Заявка на экспресс-разбор 5 инвойсов (ДОКА)",
      "",
      "Имя: " + name,
      "Контакт: " + contact,
      "Компания: " + (company || "—"),
      "Страница: " + window.location.href,
      "Файлы: " + fileNames,
      "",
      note || "—",
      "",
      "Файлы приложите к этому письму вручную — через ссылку они не уходят.",
    ].join("\n");
    window.location.href =
      mailtoHref +
      "?subject=" + encodeURIComponent("Заявка на разбор инвойсов (ДОКА)") +
      "&body=" + encodeURIComponent(text);
  }

  async function onSubmit(e: Event) {
    e.preventDefault();
    setStatus("");
    setStatusError(false);

    const form = e.currentTarget as HTMLFormElement;
    const honey = form.querySelector<HTMLInputElement>('input[name="_honey"]');
    if (honey && honey.value) {
      setSuccess(true);
      return;
    }

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const contact = (form.elements.namedItem("contact") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const note = (form.elements.namedItem("note") as HTMLTextAreaElement).value.trim();

    if (!name || !contact) {
      setStatus("Укажите имя и телефон или email.");
      setStatusError(true);
      return;
    }

    if (fileError) {
      setStatus(fileError);
      setStatusError(true);
      return;
    }

    const body = new FormData();
    body.append("_subject", "Заявка на экспресс-разбор 5 инвойсов (ДОКА)");
    body.append("_template", "table");
    body.append("_captcha", "false");
    body.append("name", name);
    body.append("contact", contact);
    body.append("company", company || "—");
    body.append("note", note || "—");
    body.append("page", window.location.href);
    files.forEach((file, i) => {
      body.append("attachment" + (i + 1), file, file.name);
    });
    if (!files.length) {
      body.append("files", "(файлы не приложены)");
    }

    setSending(true);
    setStatus("Отправляем заявку…");

    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => ({} as Record<string, unknown>));
      const msg = String(data.message || data.error || "");
      const needsActivate = /activat|confirm|verify|подтверд/i.test(msg);

      if (needsActivate) {
        setStatus(
          "На " + inbox + " ушло письмо активации FormSubmit. Откройте его и нажмите Confirm — после этого заявка с сайта начнёт доходить. Сейчас открою черновик письма, чтобы заявка не потерялась.",
        );
        setStatusError(true);
        openMailtoFallback(name, contact, company, note);
        return;
      }
      if (!res.ok || data.success === false || data.success === "false") {
        throw new Error(msg || "Не удалось отправить заявку.");
      }
      setSuccess(true);
      setStatus("");
    } catch {
      setStatus(
        "Автоотправка не прошла. Откроется черновик письма на " + inbox +
          " — приложите файлы вручную. Или напишите в Telegram / позвоните.",
      );
      setStatusError(true);
      openMailtoFallback(name, contact, company, note);
    } finally {
      setSending(false);
    }
  }

  const filePreview = fileError
    ? fileError
    : files.length
      ? "К отправке (" + files.length + "): " + files.map((f) => f.name).join(", ")
      : "";

  return (
    <div class="doka-card lead-card">
      <div class="lead-intro">
        <div class="lead-intro-row">
          <span class="doka-badge doka-badge-orange">Бесплатный демо-разбор (0 ₽)</span>
          <span class="lead-nda">Конфиденциально · NDA</span>
        </div>
        <h3 class="lead-title">Получить экспресс-разбор 5 инвойсов за 24 часа</h3>
        <p class="lead-desc">
          Заявка уходит на {inbox}. До {maxFiles} файлов (PDF, скан, XLSX), каждый до {maxFileMb} МБ.
          Если автоотправка ещё не активирована — откроется черновик письма.
        </p>
      </div>

      <form class="lead-form" noValidate hidden={success} onSubmit={onSubmit}>
        <input type="text" name="_honey" class="lead-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div>
          <label class="doka-label" htmlFor="form-name">Ваше имя *</label>
          <input type="text" id="form-name" name="name" class="doka-input" placeholder="Иван Петров (Декларант / Руководитель ВЭД)" required />
        </div>

        <div class="form-contacts-row">
          <div>
            <label class="doka-label" htmlFor="form-contact">Телефон или Email *</label>
            <input type="text" id="form-contact" name="contact" class="doka-input" placeholder="+7 (812) 000-00-00 или email@company.ru" required />
          </div>
          <div>
            <label class="doka-label" htmlFor="form-company">Компания / Отрасль</label>
            <input type="text" id="form-company" name="company" class="doka-input" placeholder="ООО ИмпортПром, Машиностроение" />
          </div>
        </div>

        <div>
          <label class="doka-label" htmlFor="form-files">Файлы для разбора (до {maxFiles})</label>
          <div
            class={dragOver ? "lead-drop is-drag" : "lead-drop"}
            role="button"
            tabIndex={0}
            aria-controls="form-files"
            onClick={openFilePicker}
            onKeyDown={onDropZoneKey}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              if (e.dataTransfer?.files.length) applyFiles(e.dataTransfer.files);
            }}
          >
            <div class="lead-drop-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </div>
            <div class="lead-drop-title">Перетащите или выберите файлы</div>
            <div class="lead-drop-hint">PDF, PNG, JPG, XLSX · до {maxFiles} шт. · до {maxFileMb} МБ каждый</div>
            <input
              ref={fileInputRef}
              type="file"
              id="form-files"
              name="files"
              multiple
              accept=".pdf,.png,.jpg,.jpeg,.xlsx,.xls,.doc,.docx"
              hidden
              onChange={(e) => applyFiles((e.currentTarget as HTMLInputElement).files || [])}
            />
          </div>
          <div class={fileError ? "lead-files is-error" : "lead-files"} aria-live="polite">{filePreview}</div>
        </div>

        <div>
          <label class="doka-label" htmlFor="form-note">Комментарий к задаче (опционально)</label>
          <textarea id="form-note" name="note" class="doka-input" rows={2} placeholder="Не читаются сканы, путаница с кодами ТН ВЭД, задержки на таможне..."></textarea>
        </div>

        <button type="submit" class="doka-btn doka-btn-primary lead-submit" disabled={sending}>
          <span>{sending ? "Отправляем…" : "Отправить заявку"}</span>
        </button>

        <p class={statusError ? "lead-status is-error" : "lead-status"} role="status" aria-live="polite">{status}</p>

        <p class="lead-legal">
          Отправляя форму, вы соглашаетесь с <a href="/privacy/">политикой конфиденциальности</a>.
        </p>
      </form>

      <div class="lead-success" hidden={!success}>
        <p class="lead-success-title">Заявка отправлена</p>
        <p class="lead-success-body">
          Мы получили обращение. Ответ по разбору — в течение 24 часов на указанные контакты.
        </p>
      </div>

      <div class="lead-direct">
        <span>Прямая связь:</span>
        <div class="doka-cluster">
          <a href={`mailto:${inbox}`} class="doka-btn doka-btn-outline lead-direct-btn">{inbox}</a>
          <a href={telegramHref} target="_blank" rel="noopener noreferrer" class="doka-btn doka-btn-outline lead-direct-btn">Telegram</a>
          <a href={phoneHref} class="doka-btn doka-btn-outline lead-direct-btn">{phone}</a>
        </div>
      </div>
    </div>
  );
}
