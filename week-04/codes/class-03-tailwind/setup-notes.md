# Tailwind CSS v4 — Setup Notes

**CSE-2340 Software Development 1** · Week 4, Class 3
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

Three ways to set up Tailwind. Use the first for learning, the third for
Mini Project 2.

---

## First, a warning about tutorials

Tailwind v4 changed the setup completely. Almost every YouTube video and blog
post still shows **v3**, which had:

- a `tailwind.config.js` file
- `@tailwind base; @tailwind components; @tailwind utilities;`
- the old CDN at `cdn.tailwindcss.com`
- a `content: []` array listing your files

**None of those are used in v4.** If a tutorial shows them, it is out of date
and the setup will not work. Check the version before you follow anything.

In v4 the whole configuration is one line of CSS plus an optional `@theme`
block.

---

## Option 1 — Browser script (learning only)

No install. Works with Live Server. This is what the class files use.

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<style type="text/tailwindcss">
  @theme {
    --color-iiuc-navy: #003366;
  }
</style>
```

Note the `type="text/tailwindcss"` on the style tag. A normal `<style>` tag will
not work for `@theme`.

**Do not use this for a real project.** It compiles Tailwind in the browser on
every page load, which is slow, and it is not how anything ships.

---

## Option 2 — CLI (a plain HTML project)

```bash
npm install tailwindcss @tailwindcss/cli
```

Create `src/input.css`:

```css
@import "tailwindcss";

@theme {
  --color-iiuc-navy: #003366;
}
```

Run the watcher while you work:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

Link the built file in your HTML:

```html
<link rel="stylesheet" href="dist/output.css">
```

---

## Option 3 — Vite plugin (use this for Mini Project 2)

```bash
npm create vite@latest my-project
cd my-project
npm install
npm install tailwindcss @tailwindcss/vite
```

`vite.config.js`:

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

`src/style.css`:

```css
@import "tailwindcss";

@theme {
  --color-iiuc-navy: #003366;
}
```

Then:

```bash
npm run dev      # development server
npm run build    # production build into dist/
```

No `postcss.config.js`, no autoprefixer, no config file. The plugin handles it.

This is also the setup React uses from Week 11, so learning it now pays twice.

---

## What `@theme` does

```css
@theme {
  --color-iiuc-navy: #003366;
}
```

A token named `--color-iiuc-navy` automatically produces `bg-iiuc-navy`,
`text-iiuc-navy`, `border-iiuc-navy` and so on.

This is the same idea as the `:root` custom properties you wrote in Week 3. The
one addition is that the token name becomes a class.

---

## Deploying a Vite project

```bash
npm run build
```

That produces a `dist/` folder. Deploy **that folder**, not your source.

- **Netlify / Vercel:** build command `npm run build`, publish directory `dist`
- **GitHub Pages:** you must set `base` in `vite.config.js` to your repository
  name, or every asset path will be wrong

Test the built site locally before you deploy:

```bash
npm run preview
```

A page that works with `npm run dev` but breaks after deployment is almost
always a `base` path problem.

---

## Checklist for Mini Project 2

- [ ] Vite setup, not the browser script
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` shows the site working
- [ ] `node_modules/` is in `.gitignore`
- [ ] `dist/` deployed and reachable at a live URL
