# Class 1 — Flexbox, Grid and Responsive Design

## Files

- `layout-demo.html` + `layout-demo.css` — one demonstration per slide:
  `justify-content`, `align-items`, `flex-direction`, `flex-wrap`, the `flex`
  shorthand, Grid columns, `auto-fit` + `minmax`, and the nav bar pattern.
- `index.html` + `styles.css` — the responsive page built live in class.
  Flexbox for the header and cards, Grid for the gallery, mobile-first with two
  breakpoints.

## Run it

Open the folder in VS Code, right click `index.html`, choose **Open with Live
Server**.

Then press `F12` and `Ctrl+Shift+M` for device mode. Test at **360px**, **768px**
and **1280px**, then drag the window edge slowly and watch where the layout
changes.

## Use the DevTools overlays

In the Elements panel, a small **flex** or **grid** badge appears next to any
container. Click it. The browser draws the axes, the gaps and the grid lines
directly on the page. Most students have never noticed this, and it ends
`justify-content` confusion instantly.

## The two lines worth memorising

```css
/* Cards that wrap by themselves — no media query */
.card { flex: 1 1 280px; }

/* A gallery whose column count works itself out — no media query */
.gallery { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
```

## Try these

At the bottom of `styles.css` there are four experiments. The last one is the
most useful: move the 768px media query **above** the base rules and work out
why the page breaks.
