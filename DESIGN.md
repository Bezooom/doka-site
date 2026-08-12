# DESIGN.md — DOKA Sales Portal (Impeccable-aligned)

Design system for the ДОКА product site. Aligns with [Impeccable](https://github.com/pbakaus/impeccable) anti-slop rules. Source of truth for tokens: `src/styles/doka.css`. Product facts: `src/consts.ts`.

---

## 1. Product surface

| | |
|---|---|
| **Type** | Brand / marketing (B2B enterprise sales) |
| **Audience** | Руководитель ВЭД, декларант, СБ/ИБ |
| **Tone** | Industrial, precise, calm confidence — отраслевая лексика, без «100% magic» |
| **Proof** | Real product screenshots, Rospatent cert, on-prem story |

---

## 2. Color (navy-tinted, no pure gray)

```css
--color-doka-primary: #122A42;
--color-doka-accent: #DD6B20;
--color-doka-accent-cta: #C05621 → #9A3412; /* primary button fill, AA white text */
--color-doka-ai: #7C3AED; /* AI status only — not chrome */
--color-doka-bg: #F8FAFC;
--color-doka-surface: #FFFFFF;
--color-doka-surface-muted: #F1F5F9;
--color-doka-border: #E2E8F0 / #CBD5E1;
--color-doka-text-main: #0F172A;
--color-doka-text-muted: #334155;
--color-doka-text-dim: #64748B;
--color-doka-success-ink: #064E3B; /* on soft green fills */
```

### Purple policy (intentional waiver)

AI purple (`#7C3AED`) is **only** for:

- badges / status of the multi-agent council  
- demo labels tied to “ИИ-эксперт”  

Do **not** use purple gradients on page backgrounds, primary CTAs, or hero chrome. Primary action = orange CTA gradient above.

---

## 3. Typography ramp

Fewer steps, ratio ≥ ~1.25 between major levels. **Russo One has no Cyrillic** — use only for Latin brand lockup “ДОКА” in footer/logo contexts.

| Role | Face | Size | Weight |
|------|------|------|--------|
| Hero H1 | IBM Plex Sans | `clamp(1.7rem, 3.2vw, 2.4rem)` | 700 |
| Section H2 | IBM Plex Sans | `clamp(1.5rem, 2.8vw, 2rem)` | 700 |
| Card / H3 | IBM Plex Sans | `1.05–1.15rem` | 700 |
| Body | IBM Plex Sans | `0.9375–1.0625rem` | 400/500 |
| Meta / mono | IBM Plex Mono | `0.75–0.875rem` (floor **11px** for UI labels) | 500/600 |
| Brand mark | Russo One | ~18px | 400 |

Body measure: **~52–65ch**.

---

## 4. Spacing & shape

- Grid: 4/8px (8, 12, 16, 20, 24, 32, 48, 56 section-y)
- Radii: `6px` control, `10px` card (`--radius-doka-lg`), pill badges `999px`
- Shadows: prefer **one of** hairline border **or** soft elevation — not thick side-tab + huge blur
- Section pad: ~48–64px desktop; less on mobile

---

## 5. Impeccable anti-slop checklist (enforced in P0–P2)

1. No untinted grays / pure black  
2. No card-ception (nested cards) — use surface shift + dividers  
3. No thick **side-tab** borders on cards  
4. No icon-tile feature grids (use numbered lists / editorial rows)  
5. No section-tag on every block (max 0–2 per page)  
6. No page-wide decorative tech grid (only demo/blueprint classes)  
7. No decorative pulse without `.is-live`  
8. No long ALL-CAPS CTA copy  
9. Primary CTA contrast ≥ WCAG AA  
10. No “100% accuracy” marketing claims  

Run: `npm run detect`

---

## 6. Kit classes (`doka.css`)

| Class | Use |
|-------|-----|
| `.container` | max-width page rail |
| `.section` / `.section-muted` | vertical rhythm |
| `.section-title` / `.section-subtitle` | headers |
| `.doka-btn` + `-primary` / `-outline` / `-navy` | actions |
| `.doka-badge` + variants | short labels |
| `.doka-card` | single-level cards |
| `.doka-callout-success` | green result strip |
| `.doka-stack` / `.doka-cluster` | flex layouts |
| `.doka-prose` | readable measure |
| `.doka-list-rows` | anti-card list pattern |
| `.doka-surface` | bordered panel without extra shadow |

Prefer kit + page CSS modules over long inline styles on new work.

---

## 7. Components

| Component | Role |
|-----------|------|
| `LeadForm.astro` | Lead magnet — honest mailto + file names in body |
| `RoiCalculator.astro` | Hours/₽ estimator (secondary on home) |
| `InvoiceParserDemo.astro` | Interactive product sim (below fold) |
| `AgentCouncilVisualizer.astro` | Council UI mock (method page) |
| `AuthorSignatureBadge.astro` | Trust / authors |
| `SecurityNoDemoBanner.astro` | Why no public cloud demo |

---

## 8. Motion

- Transitions: `0.15–0.25s ease`  
- Hover lift: `translateY(-2px)` only on interactive chrome  
- `prefers-reduced-motion: reduce` disables pulse/hover lift  

---

## 9. GEO / content tokens

- Canonical base: `SITE_CANONICAL_BASE` in `consts.ts`  
- OG image: product screenshot `SITE_OG_IMAGE`  
- JSON-LD builders: `buildOrganizationJsonLd`, `buildSoftwareJsonLd`, `buildHowToJsonLd`, `buildFaqJsonLd`  
- `public/llms.txt` + `llms-full.txt` must match prices/contacts in `consts.ts`
