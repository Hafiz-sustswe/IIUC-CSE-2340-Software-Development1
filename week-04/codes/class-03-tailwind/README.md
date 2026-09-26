# Class 3 — Tailwind CSS v4

## Files

- `utilities-demo.html` — one section per slide: the spacing scale, the colour
  scale, text, Flexbox, Grid, responsive prefixes, states, and the card pattern
  from C1 rewritten as utilities.
- `index.html` — the full responsive page built live in class. No separate
  stylesheet, only an `@theme` block.
- `setup-notes.md` — the three setup paths, the v4 changes, and what to use for
  Mini Project 2.

## Run it

Open either file with Live Server. Nothing to install. Press `F12`, then
`Ctrl+Shift+M` for device mode, and test at 360px, 768px and 1280px.

**Resize the window slowly** while looking at section 6 of the demo. Watching
the column count change as `md:` and `lg:` take effect is the fastest way to
understand the prefix system.

## The two things students get wrong

**1. The scale is steps, not pixels.**
`p-4` is **16px**, not 4px. One step is 4px, so `p-1` is 4px, `p-2` is 8px and
`p-6` is 24px.

**2. Every prefix is min-width.**
An unprefixed class applies to **all** screens starting from the phone. A
prefixed class applies from that width **upwards**. So:

```html
<div class="flex flex-col md:flex-row">
```

means "a column on a phone, a row from 768px up". Tailwind is mobile-first and
does not offer you a choice, which is exactly the habit from Week 3.

## Compare with Week 3

Open `index.html` here beside
`week-03/codes/class-03-specificity-cascade/index.html` and its `styles.css`.

The output is the same page. The CSS has moved into the class attributes, and
every class maps to a declaration you wrote by hand two weeks ago.

## A warning about tutorials

Tailwind v4 removed the config file and the `@tailwind` directives. Nearly every
video online still shows v3. Check the version before following anything, and
see `setup-notes.md`.
