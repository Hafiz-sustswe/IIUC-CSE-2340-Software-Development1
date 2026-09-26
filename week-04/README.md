# Week 4 — Design Handoff, Positioning and Tailwind CSS

**CSE-2340 Software Development 1** · Autumn 2026
Instructor: Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## This week in one line

Stop inventing the design and start reading one, learn to lift an element out of the flow, then rebuild it all with Tailwind utilities.

---

## Classes

| Class | Type | Topic |
|---|---|---|
| C1 | Class | Design handoff using Figma or Pixso: frames, spacing, measurements and asset export; CSS positioning: relative, absolute, fixed, sticky; practical z-index use |
| C2 | Practice | Read a prepared design handoff and implement positioning requirements |
| C3 | Class | Tailwind CSS v4: setup, typography, spacing, responsive flex/grid; live build of a responsive Tailwind page |
| C4 | Practice | Reproduce and modify a responsive Tailwind page |

C1+C2 share one deck; C3+C4 share another.

**CLO alignment:** C1, C3 → CLO1 (PO1), CLO3 (PO5) · C2, C4 → CLO2 (PO3), CLO3 (PO5)

---

## Before C1

Create a free **Figma** or **Pixso** account. View access on a shared file is
enough; you never need edit rights to build from a design.

Nothing to install for C3 and C4: those files load Tailwind from a browser
script.

---

## What is in this folder

```
week-04/
├── codes/
│   ├── class-01-handoff-positioning/
│   │   ├── positioning-demo.html/.css   seven live demos of position and z-index
│   │   └── design-spec.md               the written version of the C2 handoff
│   ├── class-02-positioning-practice/
│   │   ├── exercises.md
│   │   ├── starter/                     BROKEN ON PURPOSE — six positioning bugs
│   │   └── solution/                    all six fixed, marked FIX n
│   ├── class-03-tailwind/
│   │   ├── utilities-demo.html          one section per slide
│   │   ├── index.html                   the Week 3 page rebuilt with utilities
│   │   └── setup-notes.md               the three setup paths, and the v3/v4 trap
│   └── class-04-tailwind-practice/
│       ├── exercises.md                 four exercises
│       ├── starter/                     BROKEN ON PURPOSE — six class-name bugs
│       └── solution/                    all six fixed, marked FIX n
└── study-materials/
    ├── slides/                          C1+C2 deck, C3+C4 deck
    └── handouts/
        ├── positioning-cheatsheet.md
        ├── handoff-notes-template.md
        ├── tailwind-cheatsheet.md
        └── tailwind-notes-template.md
```

---

## How to run the code

```bash
cd week-04/codes/class-03-tailwind
```

Open with Live Server. Tailwind loads from a browser script, so nothing needs
installing. Press `F12`, then `Ctrl+Shift+M`, and test at 360px, 768px and
1024px.

**Compare `class-03-tailwind/index.html` with
`week-03/codes/class-03-specificity-cascade/index.html` and its `styles.css`.**
It is the same page. The CSS has moved into the class attributes, and every class
maps to a declaration you wrote by hand two weeks ago.

---

## What you should be able to do after this week

- Take real measurements out of a design file instead of guessing
- Export assets at the right format and scale
- Use `relative`, `absolute`, `fixed` and `sticky` correctly
- Explain what a positioning context is, and why `z-index: 9999` sometimes fails
- Set up Tailwind v4 three ways, and know which one Mini Project 2 needs
- Read the spacing and colour scales
- Build responsive flex and grid layouts with utilities
- Know when **not** to position something

---

## Two rules that cause most Tailwind problems

**1. The scale is steps of 4px, not pixels.**
`p-4` is **16px**, not 4px. `p-16` is 64px.

**2. Every prefix is min-width.**
An unprefixed class applies from the phone upwards. `md:flex-row` says nothing
about a phone; it applies from 768px up.

---

## The positioning rule to memorise

```css
.card        { position: relative; }   /* creates the context */
.card__badge { position: absolute; top: 12px; right: 12px; }
```

An absolutely positioned element searches **up** for the nearest positioned
ancestor. If it finds none, it measures from the whole document. The question is
never *"where did my badge go"* but **"which ancestor is it measuring from?"**

In Tailwind the same thing is `relative` on the card and
`absolute top-3 right-3` on the badge. Same rules, same traps, shorter names.

---

## Assignments

| Class | Part 1 (in class, 2 marks) | Part 2 (home, 3 marks) |
|---|---|---|
| C1+C2 | Card with positioned badge and working sticky header; resize to 360px; show `measurements.md` beside the design file | All four exercises, a `position: fixed` back-to-top button, `handoff-notes.md` |
| C3+C4 | Page shown at 360px, 768px and 1024px, naming the class controlling each; Tab to a link and show the focus style | All modifications and six fixes; rebuild one Week 3 page with a **Vite** Tailwind setup; `tailwind-notes.md` |

**C1+C2 rubric**

| Criterion | Marks |
|---|---|
| Six measurements recorded and matched in the CSS | 1.5 |
| Badge and caption correctly positioned | 1.5 |
| Sticky header works, opaque, with a sensible z-index | 1.0 |
| All six planted bugs fixed | 1.0 |

**C3+C4 rubric**

| Criterion | Marks |
|---|---|
| Page reproduced with utilities only | 1.5 |
| Correct responsive behaviour at all three widths | 1.5 |
| All six planted bugs fixed | 1.0 |
| Week 3 page rebuilt with a Vite setup | 1.0 |

---

## The rule for C2

**Reproduce, do not redesign.** If you think the design is wrong, write it down
in `handoff-notes.md` and build it as given. Noticing gaps and recording them is
a real professional habit, and a real handoff is always incomplete somewhere.

---

## A warning about Tailwind tutorials

Tailwind v4 removed the config file and the `@tailwind` directives. Nearly every
video online still shows **v3**. If a tutorial has any of these, it is out of
date and the setup will not work:

- `tailwind.config.js`
- `@tailwind base; @tailwind components; @tailwind utilities;`
- `cdn.tailwindcss.com`
- a `content: []` array

v4 is one line: `@import "tailwindcss";` plus an optional `@theme` block.

---

## Common problems this week

| Problem | Fix |
|---|---|
| My badge flew to the page corner | The parent has no `position: relative` |
| `top` / `left` do nothing | The element is still `position: static` |
| Sticky is not sticking | No `top` value, or an ancestor has `overflow: hidden` |
| Content scrolls through my header | The sticky header's background is transparent |
| `justify-between` does nothing | The parent has no `flex` |
| `grid-cols-3` is ignored | The element has no `grid` |
| My custom colour class does nothing | The token is not in `@theme` |
| Horizontal scrollbar at 360px | A fixed width such as `w-[420px]` |

**The Tailwind debugging method:** select the element in DevTools and read its
**class list**. A class that generated no CSS simply does not exist, exactly like
a misspelt CSS property.

---

## References for this week

- [MDN — position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [MDN — Understanding z-index and stacking contexts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
- [Figma — Inspect designs](https://help.figma.com/hc/en-us/articles/360055203533)
- [Tailwind CSS — Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS — Installing with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind CSS — Theme variables](https://tailwindcss.com/docs/theme)
- [Tailwind CSS — Responsive design](https://tailwindcss.com/docs/responsive-design)
- [Squoosh — image compression](https://squoosh.app/)

---

## Next week

Week 5 covers responsive deployment, image optimisation and JavaScript
fundamentals, and the course turns from appearance to behaviour.

**Mini Project 2** is due Week 5, C4: your own responsive design, built with
Tailwind, deployed. You produced a design in C1–C2 and learned the tool in
C3–C4, so MP2 is those two halves joined together. It must use the **Vite**
setup, not the browser script.
