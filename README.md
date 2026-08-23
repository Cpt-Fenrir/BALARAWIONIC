# BALARAW Mobile Lab 1

Ionic-Angular mobile prototype for ITWS07 Laboratory Activity 1. It adapts two existing public BALARAW capstone modules:

1. Artwork Discovery
2. Exhibition Discovery

The prototype uses static sample data plus copied public images, logo, colors, and typography from the BALARAW capstone. The Laravel backend, database, and login are not required.

## Open in Visual Studio Code

Open this file:

```text
BALARAW-Mobile-Lab1.code-workspace
```

Or open the entire `BALARAW-Mobile-Lab1` folder.

## Run the project

Open the Visual Studio Code terminal and run:

```powershell
npm install
npm start
```

The browser should open at:

```text
http://localhost:4200
```

You may also press `Ctrl+Shift+B` and select `BALARAW: Run Mobile Prototype`.

## Useful commands

```powershell
npm start
npm run build
npm test -- --watch=false
npm run lint
```

To use the Ionic CLI explicitly, run it directly instead of through an
`ionic:serve` npm script:

```powershell
npx @ionic/cli@7.2.1 serve
```

## Requirements

- Node.js 22.12 or newer, or Node.js 24
- npm
- Visual Studio Code

## Main routes

- `/home`
- `/artworks`
- `/artworks/:id`
- `/exhibitions`
- `/exhibitions/:id`

## Important folders

- `src/app/services/catalog.service.ts` - static data and filtering logic
- `src/app/components` - reusable artwork card, exhibition card, status chip, and mobile navigation
- `src/app/pages` - artwork and exhibition list/detail pages
- `src/assets/balaraw` - optimized copies of the capstone's public BALARAW logo, gallery photos, and featured-work images
- `LAB1-DEMO-GUIDE.md` - presentation and rubric guide

The four featured artwork images, public-preview titles, artist names, logo, and gallery photography come from `C:\xampp\htdocs\CAPSTONE\katha_art_system\public`. Missing public-preview details use clear placeholders such as `Price on request`; exhibition schedules remain Lab 1 sample data. The source capstone is not changed when this standalone app runs.
