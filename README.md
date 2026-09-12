# AbhiRam Fresh Mart — marketing & legal site

A dark, animated "digital night market" themed static site (no build step,
no framework — just HTML/CSS/JS) with:

- A live-style price/status ticker, ambient drifting gradient blobs, a
  hero load-in sequence, and a phone mockup that tilts with your cursor.
- Die-cut "price tag" style cards for features and sample screens.

- `site/index.html` — landing page: hero, "Download the app" button, sample
  screens, and a table of privacy policy / terms links for all four apps.
- `site/legal/customer/privacy/` and `site/legal/customer/terms/` — real
  content, pulled from the customer app's own `PrivacyPolicyPage.jsx` and
  `termsContent.js`.
- `site/legal/admin/`, `site/legal/vendor/`, `site/legal/rider/` —
  "coming soon" placeholder pages at the **final URLs** you'll use once
  those apps exist, so you can wire them into each app's Play Console
  listing in advance and just fill in the content later.
- `site/downloads/` — where your signed release APK goes (see the note
  inside that folder).

## 1. Before you deploy — two placeholders left

Company name, support email, and address are already filled in everywhere
(AbhiRam FreshMart / abhiramfreshmartvmr@gmail.com / Vinjamur, 524228, AP,
India). Two remain, only in `site/legal/customer/terms/index.html`,
because they need real answers only you have:

- `[GRIEVANCE_OFFICER_NAME]` — required under India's Consumer Protection
  (E-Commerce) Rules, 2020. Any responsible person's name works.
- `[CITY]` — the city whose courts would have jurisdiction over a dispute
  (commonly wherever the business is registered).

```bash
grep -rn "\[" site/ --include=*.html
```

This content was drafted to match what the app actually does, not generic
boilerplate — but it is still a starting draft, not legal advice. Have it
reviewed before you rely on it.

## 2. Deploy to Render

Render deploys static sites from a Git repository — there's no drag-and-drop
upload, so push this folder to GitHub (or GitLab) first:

1. Create a new GitHub repo and push this folder's contents to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Go to https://dashboard.render.com → **New** → **Static Site**.
3. Connect the repo you just pushed.
4. Render should auto-detect `render.yaml` in the repo root and pre-fill:
   - **Build command:** (empty)
   - **Publish directory:** `site`
   If it doesn't auto-detect, set those two fields manually.
5. Click **Create Static Site**. Render gives you a URL like
   `https://abhiram-fresh-mart-site.onrender.com`.
6. (Optional) Add a custom domain under the site's **Settings → Custom
   Domains** once it's live.

Every push to `main` auto-redeploys.

## 3. URLs to give Google Play

Once deployed, your Play Console **Privacy policy** field (and the same
field for the vendor/rider/admin apps, when you set those up) takes:

```
https://<your-render-url>/legal/customer/privacy/
https://<your-render-url>/legal/vendor/privacy/
https://<your-render-url>/legal/rider/privacy/
https://<your-render-url>/legal/admin/privacy/
```

These resolve publicly with no login or install required, which is what
Play requires. The terms pages live at the matching `/terms/` path if you
need to link those anywhere too (e.g. in each app's own in-app "Terms"
screen, or your Play Store listing description).

## 4. Adding the real content later

When the vendor, rider, or admin apps are ready:

1. Write that app's privacy policy / terms the same way the customer
   app's were derived — from what that app's code actually collects and
   does, not a generic template.
2. Replace the `.placeholder-box` content in the matching file under
   `site/legal/<app>/privacy/index.html` or `.../terms/index.html` with
   the real sections (copy the structure from
   `site/legal/customer/privacy/index.html`).
3. Update the status column in `site/index.html`'s ledger from
   "Coming soon" to "Published" (remove the `pending` class from that
   `.ledger-row`).
4. Commit and push — Render redeploys automatically, and the URL you
   already gave Play Console doesn't change.

## 5. Adding the signed APK download

See `site/downloads/PUT_YOUR_APK_HERE.txt`.
"# abhiram-fresh-mart-site" 
