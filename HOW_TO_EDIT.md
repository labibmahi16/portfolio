# How to edit your portfolio (beginner guide)

Your project folder: `E:\portfolio-site`

## 1. Start the site on your computer
Open the folder in VS Code, open the Terminal (Ctrl + `), then run:

    npm run dev

Open http://localhost:5173. Leave it running — every time you SAVE a file (Ctrl+S) the page updates by itself.

## 2. Add photos
Photos live in the `public/images` folder. Drag & drop files into it from File Explorer
(or into the VS Code sidebar). The NAME must match what the site expects:

| Photo                | Put it here                                   | Name                                 |
|----------------------|-----------------------------------------------|--------------------------------------|
| Your portrait        | public/images/                                | profile.jpg                          |
| Project screenshots  | public/images/projects/                       | digital-cams.jpg, hangout-finder.jpg, poshur-hat.jpg |
| Photography gallery  | public/images/gallery/                        | 1.jpg, 2.jpg ... 6.jpg               |

Tips
- Use .jpg. If your file is .png, change the extension in `src/data.js` too (e.g. "/images/profile.png").
- Shrink photos first (under ~500 KB) at https://squoosh.app so the site loads fast.
- To add a 7th gallery photo: save it as 7.jpg, then in `src/data.js` find `export const gallery`
  and add:  { src: "/images/gallery/7.jpg", caption: "Frame 07" },
- Make captions meaningful: replace "Frame 07" with e.g. "Dhanmondi Lake, sunset".

## 3. Change text, links, projects, skills
Open `src/data.js`. Everything is in clearly named blocks:
- profile  -> name, intro, roles that type in the hero
- links    -> email, GitHub, LinkedIn, Facebook, Instagram
- photography -> your photography Instagram (gallery banner)
- skills, projects, research, timeline, achievements, interests

To ADD an item: copy one whole { ... }, paste it right after (keep the comma), edit the text.
To REMOVE an item: delete its whole { ... } block including the comma.
Keep the quotes "like this" and the commas — if the page goes blank after saving, you probably
deleted a quote or comma. Press Ctrl+Z to undo.

## 4. Hide a whole section
In `src/App.jsx` delete the line for it (e.g. <Gallery />).
Also remove its name from the `items` list at the top of `src/components/Nav.jsx`.

## 5. Put your changes on the internet
Stop checking and run these in the terminal (first time only: git init, git remote add ...):

    git add .
    git commit -m "Update portfolio"
    git push

Vercel notices the push and updates your live site in about a minute.
