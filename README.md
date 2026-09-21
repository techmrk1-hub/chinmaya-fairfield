# Chinmaya Mission Fairfield–New Haven

Public website for **Chinmaya Saraswati Ashram & Devi Temple** in Orange, Connecticut — a quieter, more corporate layout that still carries traditional temple language, gold ornament, and Gurudev’s voice.

## Live site (GitHub Pages)

The site is hosted on GitHub, not Vercel:

- Source: [github.com/techmrk1-hub/chinmaya-fairfield](https://github.com/techmrk1-hub/chinmaya-fairfield)
- Live: [techmrk1-hub.github.io/chinmaya-fairfield](https://techmrk1-hub.github.io/chinmaya-fairfield/)

Each push to `main` rebuilds the static site. A daily GitHub Action rebuilds it so new Google Sheet flyer rows appear without a manual deploy.

The repository is public because GitHub Pages on a free account only serves public repos.

## Run locally

```bash
git clone https://github.com/techmrk1-hub/chinmaya-fairfield.git
cd chinmaya-fairfield
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows you can run those same commands in [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

## Put flyers and photos on pages with Google Sheets

The live spreadsheet is already created in Drive:

[Chinmaya Saraswati Flyers](https://docs.google.com/spreadsheets/d/1xXWRZydO00Xbclo1goVAsED3adROA_Jr7esSl2I9HEA/edit)

The published CSV feed is connected. On GitHub Pages, new rows appear after the next daily rebuild (or after you run **Actions → Deploy to GitHub Pages → Run workflow**). Local `npm run dev` picks them up within about a minute.

### Every new flyer or photo

1. Upload the JPG/PNG to **Google Drive** (or collect it with a **Google Form** file-upload question that saves to this sheet).
2. Drive: Share → Anyone with the link can view.
3. Add a sheet row:

| Title | Date | Place | Image | Link | Summary | Featured | Page | Published |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Diwali 2026 | 2026-11-08 | Orange | `https://drive.google.com/file/d/…/view` | signup URL | short note | TRUE | events | TRUE |

**Page** column:

- `events` — Events page (default)
- `home` — home calendar (or set Featured to TRUE)
- `gallery` — Gallery
- `temple` — Temple & Ashram
- `bala-vihar` — Bala Vihar
- `about`, `priest`, `geeta-chanting`, `satsang` — reserved for those pages

If the published CSV cannot be read, the site falls back to the local sample flyers.

## Notes

- Contact and registration forms open a pre-filled message to `board@chinmayafairfield.org`.
- Donations still use the ashram’s PayPal hosted button.
