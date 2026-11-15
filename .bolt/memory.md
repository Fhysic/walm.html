# Project memory

## Product intent & audience

- Pixel-accurate, responsive React + Tailwind replica of a provided screenshot featuring the official Walmart branding.
- Functions as a gift/offer landing page driving visitors to an affiliate offer URL.

## Brand personality & voice

- Retail/gift giveaway tone; Walmart-inspired visual identity.

## Visual design & UX direction

- Stack: Vite + React + Tailwind CSS; JSX, React hooks, Lucide React icons.
- Use official Walmart spark logo asset (user-supplied file) in the header instead of a drawn mark.
- CTA button must be functional: redirects to `https://giftclick.org/?offer_id=1913&aff_id=14721`.
- Claim notification UX: rotatory carousel showing randomized U.S. names/cities and claim times; appears every 3–5 seconds, visible briefly, hidden between appearances (not persistent).
- Responsive layout expected; pixel-accurate to reference screenshot.

## Decisions, constraints & rationale

- No extra UI/icon packages beyond Lucide React unless explicitly requested.
- Import project modules via `@/` alias (maps to `src/`), not deep relative paths.
- Affiliate offer link is the fixed redirect target for the CTA.
- Notification timing randomized within 3–5s window to avoid constant presence and feel less spammy.

## Open questions & assumptions

- Assumed offer URL should open in same/new tab via direct redirect; exact tab behavior not specified.
- Assumed notification content format (name + city + amount) from prior context; exact fields not re-specified.
- Official logo file name/path assumed to be provided in project assets.