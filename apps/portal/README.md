# Future Portal Extraction

The client/admin portal is temporarily mounted inside `apps/website` so the site
and portal can be shipped as a single app for now.

When you are ready to split it back out, the code to extract lives under:

- `apps/website/src/app/portal`
- `apps/website/src/styles/portal.css`
- `apps/website/src/styles/portal-theme.css`

This folder remains as the future home for a standalone `portal.lindico.us` app.
