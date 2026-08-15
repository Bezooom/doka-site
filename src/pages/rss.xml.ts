import type { APIRoute } from "astro";
import { SITE_UVP, SITE_DESCRIPTION, SITE_CANONICAL_BASE } from "../consts";

export const GET: APIRoute = async () => {
  const base = SITE_CANONICAL_BASE;
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>ДОКА — ${SITE_UVP}</title>
 <description>${SITE_DESCRIPTION}</description>
 <link>${base}/</link>
 <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
 <pubDate>${new Date().toUTCString()}</pubDate>
 <item>
  <title>Бесплатный экспресс-разбор 5 инвойсов за 24 часа</title>
  <description>Пришлите до 5 файлов. Экспертный разбор кодов ТН ВЭД, рисков КТС и потенциала автоматизации.</description>
  <link>${base}/razbor/</link>
 </item>
 <item>
  <title>Кейс: 32-страничные инвойсы — от PDF до XML в Альта-ГТД</title>
  <description>Разбор плотных инвойсов, ИИ-консилиум, Графа 31 и экспорт XML для Альта-ГТД.</description>
  <link>${base}/cases/doka/</link>
 </item>
 <item>
  <title>ГК «ФОРОНЕЙ»: правообладатель ДОКА и локальный ИИ</title>
  <description>ООО «ГК Фороней», Санкт-Петербург. Внедрение контура, роботизация, материалы foroney.ru.</description>
  <link>${base}/foroney/</link>
 </item>
 <item>
  <title>Локальный ИИ ГК «ФОРОНЕЙ»: GraphRAG и SGLang</title>
  <description>Материал с foroney.ru: модели на GPU завода, 152-ФЗ, тот же контур, что стоит под ДОКА.</description>
  <link>${base}/materials/local-ai/</link>
 </item>
 <item>
  <title>Наумов П.В. — архитектор ДОКА</title>
  <description>Метод as-is на aiprocesses.ru: факт процесса → модель → пилот в контуре.</description>
  <link>${base}/aiprocesses/</link>
 </item>
 <item>
  <title>Чеклист as-is до пилота</title>
  <description>Семь блоков вопросов Наумова. Оригинал на aiprocesses.ru.</description>
  <link>${base}/materials/as-is/</link>
 </item>
 <item>
  <title>Сначала процесс, потом модель</title>
  <description>Пересказ метода архитектора: реконструкция as-is и почему ИИ на регламенте не взлетает.</description>
  <link>${base}/materials/process/</link>
 </item>
</channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
