# Class 2 — Design Handoff Practice

Practice class. You are given a design and you build it, then you fix a page
that somebody else broke.

## Files

```
class-02-positioning-practice/
├── exercises.md      the four exercises and the debugging method
├── starter/          BROKEN ON PURPOSE — six positioning bugs
│   ├── index.html    correct HTML. Do not change it
│   └── styles.css    all six bugs live here
└── solution/         all six fixed, each marked FIX n
    ├── index.html
    └── styles.css
```

## Start here

1. Open the shared design file (Figma or Pixso).
2. Read `exercises.md`.
3. Do Exercise 1, the six measurements, before writing any CSS.
4. Open `starter/index.html` with Live Server when you reach Exercise 4.

## The rule for today

**Reproduce, do not redesign.** If something in the design looks wrong to you,
write it down in `handoff-notes.md` and build it as given. Noticing gaps and
recording them is a real professional habit.

## The pattern behind four of the six bugs

Before anything else, check the computed `position` value in DevTools. Four of
the six bugs are an element that was never positioned in the first place, so
`top`, `left` and `z-index` were all being ignored.

## Checking your measurements

`../class-01-handoff-positioning/design-spec.md` is the written version of the
design. Use it to **check** your numbers after Exercise 1, not to skip the
measuring.
