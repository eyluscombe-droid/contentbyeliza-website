# contentbyeliza-website

Single-page marketing site for Content by Eliza, a UGC creator.

## Architecture
Deliberately minimal: **one hand-written `index.html`** at the repo root with inline `<style>` and `<script>`. No framework, no bundler, no package.json, no build step. Do not introduce one without asking — it would break the deploy workflow and the site does not need it.

- `index.html` — the entire site
- `videos/` — portfolio mp4s and their poster jpgs
- `assets/` — hero portrait and other images
- `og-image.png` — Open Graph share image (1200×630)
- `CNAME` — custom domain (`contentbyeliza.co.uk`)
- `.github/workflows/deploy.yml` — GitHub Pages, uploads repo root on push to `main`

Because Pages serves the repo root directly, **all asset paths must be root-relative** (`videos/foo.mp4`, not `/videos/foo.mp4` or `./`).

## Conventions
- Colors, type and spacing come from the CSS custom properties in `:root`. Use `var(--charcoal)` etc. — never hardcode a hex.
- Two fonts only: `Cormorant Garamond` for headings and display numerals, `DM Sans` for everything else.
- Icons are inline SVG, stroked not filled. No icon library.
- Cards are square-cornered; only video tiles (8px) and circular buttons are rounded.
- Section backgrounds alternate `--white` / `--cream`, with `--pink-pale` reserved for the contact section. Do not add new background colors.
- `.fade-up` on an element opts it into the scroll-reveal animation.
- Compact CSS, one concern per rule. Keep the existing comment banners (`/* PORTFOLIO */`) as section markers.

## Known gaps
- `assets/eliza.jpg` (hero portrait) is not committed — the hero section shows a placeholder note until it is added.
- The contact form's Formspree action still contains the literal `YOUR_FORM_ID`.
- The "Book a discovery call" calendar is a mock — confirming a slot fires an `alert()` and reaches no real calendar. Replace with a Cal.com or Calendly embed before promoting it.

## Testing
Open `index.html` directly in a browser, or `python3 -m http.server` from the repo root. Check the 980px and 600px breakpoints, and that clicking one video tile pauses any other that is playing.
