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
</channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
