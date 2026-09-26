# Class 4 — Tailwind Practice

Practice class. Four exercises: reproduce a page, make it responsive, modify it,
then fix six broken class attributes.

## Files

```
class-04-tailwind-practice/
├── exercises.md      the four exercises
├── starter/          BROKEN ON PURPOSE — six bugs, all in class attributes
└── solution/         all six fixed, each marked FIX n
```

## Run it

Open either file with Live Server. Tailwind loads from the browser script, so
there is nothing to install.

Press `F12`, then `Ctrl+Shift+M` for device mode, and test at 360px, 768px and
1024px.

## The debugging method for Tailwind

With handwritten CSS you read the stylesheet. With Tailwind you **read the class
list** on the element.

1. Select the element in DevTools.
2. Read its classes one by one.
3. A class that generated no CSS does not exist. It is either misspelt, or it is
   a layout utility whose display utility is missing.

Four of the six planted bugs are a **missing** class, not a wrong one.
`justify-between` does nothing without `flex`; `grid-cols-3` does nothing
without `grid`.

## The two things students get wrong

**1. The scale is steps, not pixels.** `p-4` is **16px**.

**2. Every prefix is min-width.** No prefix means the phone and upwards.
`md:flex-row` says nothing about how a phone looks; it applies from 768px up.

## A note on setup

These files use the browser script, which compiles Tailwind in the page. That is
fine for learning and for these exercises.

**Mini Project 2 must use the Vite setup.** A CDN-compiled page is slow and is
not how anything ships. See `../class-03-tailwind/setup-notes.md`.
