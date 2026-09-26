# Tailwind CSS v4 Cheat Sheet — CSE-2340

**Week 4, Classes 3 and 4**
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

Every class here is one CSS declaration you already know. This is shorthand, not
a new technology.

---

## The two rules that cause most problems

**1. The scale is steps of 4px, not pixels.**
`p-4` is **16px**, not 4px. `p-1` is 4px, `p-6` is 24px, `p-16` is 64px.

**2. Every prefix is min-width.**
An unprefixed class applies from the phone upwards. `md:flex-row` says nothing
about a phone; it applies from 768px up. Tailwind is mobile-first and gives you
no choice, which is exactly the habit from Week 3.

---

## Setup (v4)

| Option | Command / tag | Use for |
|---|---|---|
| Browser script | `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>` | Learning, class exercises |
| CLI | `npm install tailwindcss @tailwindcss/cli` then `npx @tailwindcss/cli -i src/input.css -o dist/output.css --watch` | A plain HTML project |
| Vite plugin | `npm install tailwindcss @tailwindcss/vite`, add `tailwindcss()` to `vite.config.js` | **Mini Project 2** and React later |

Your CSS entry file is one line:

```css
@import "tailwindcss";
```

With the browser script, custom tokens go in a style tag instead:

```html
<style type="text/tailwindcss">
  @theme { --color-iiuc-navy: #003366; }
</style>
```

### v3 tutorials will not work

Tailwind v4 removed the config file and the directives. If a tutorial shows any
of these, it predates v4:

- `tailwind.config.js`
- `@tailwind base; @tailwind components; @tailwind utilities;`
- `cdn.tailwindcss.com`
- a `content: []` array

---

## Theme tokens

```css
@theme {
  --color-iiuc-navy: #003366;
  --font-display: Arial, Helvetica, sans-serif;
}
```

A token named `--color-iiuc-navy` automatically produces `bg-iiuc-navy`,
`text-iiuc-navy`, `border-iiuc-navy` and so on.

This is the Week 3 `:root` custom properties idea, with one addition: the name
becomes a class.

---

## Spacing (the 4px scale)

| Class | Value | | Class | Value |
|---|---|---|---|---|
| `p-1` | 4px | | `p-6` | 24px |
| `p-2` | 8px | | `p-8` | 32px |
| `p-3` | 12px | | `p-10` | 40px |
| `p-4` | 16px | | `p-12` | 48px |
| `p-5` | 20px | | `p-16` | 64px |

| Pattern | Meaning |
|---|---|
| `p-4` | padding, all sides |
| `px-5` / `py-3` | padding left+right / top+bottom |
| `pt-8` `pr-4` `pb-2` `pl-6` | one side |
| `m-4` `mt-6` `mb-2` | margin, same pattern |
| `mx-auto` | `margin-left: auto; margin-right: auto`, centres a block |
| `gap-5` | gap between flex or grid items |

---

## Sizing

| Class | Meaning |
|---|---|
| `w-full` | `width: 100%` |
| `w-11/12` | `width: 91.666%` |
| `w-[92%]` | arbitrary value, use sparingly |
| `max-w-5xl` | a max width (64rem) |
| `h-36` | a fixed height from the scale |
| `min-h-screen` | full viewport height |

**The container recipe from Week 3**, in three classes:

```html
<div class="mx-auto w-11/12 max-w-5xl">
```

---

## Text

| Class | Property |
|---|---|
| `text-sm` `text-base` `text-lg` `text-xl` `text-3xl` | font-size |
| `font-normal` `font-bold` | font-weight |
| `leading-tight` `leading-relaxed` | line-height |
| `text-center` `text-left` | text-align |
| `underline` `no-underline` | text-decoration |
| `text-slate-700` `text-white` | color |

---

## Colour

Named colours with shades from **50** (nearly white) to **950** (nearly black),
with 500 in the middle: `slate`, `gray`, `sky`, `amber`, `red`, `green` and more.

```html
bg-white   bg-slate-100   text-slate-500   border-slate-300
bg-black/55        <!-- 55% opacity -->
```

---

## Flexbox

| CSS | Tailwind |
|---|---|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `justify-content: space-between` | `justify-between` |
| `align-items: center` | `items-center` |
| `flex-wrap: wrap` | `flex-wrap` |
| `gap: 1.25rem` | `gap-5` |

```html
<header class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
```

---

## Grid

| CSS | Tailwind |
|---|---|
| `display: grid` | `grid` |
| `grid-template-columns: repeat(3, 1fr)` | `grid-cols-3` |
| `gap: 1.25rem` | `gap-5` |

```html
<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
```

---

## Responsive prefixes

| Prefix | Applies from | Typical use |
|---|---|---|
| (none) | all screens | the phone layout |
| `sm:` | 640px | rarely needed |
| `md:` | 768px | tablet |
| `lg:` | 1024px | laptop |
| `xl:` | 1280px | large screens |

---

## States

```html
<a class="text-sky-200
          hover:text-amber-400
          focus:text-amber-400
          focus:outline-3 focus:outline-amber-400 focus:outline-offset-2">
```

**Write `hover:` and `focus:` together, every time.** Tailwind makes it very easy
to write `hover:` and stop, and a hover-only link is invisible to keyboard users.

Other useful ones: `even:bg-slate-50` for zebra striping, `sr-only` to hide
something visually but keep it for screen readers, `focus:not-sr-only` to reveal
a skip link when it receives focus.

---

## Positioning (straight from C1)

| CSS | Tailwind |
|---|---|
| `position: relative` | `relative` |
| `position: absolute` | `absolute` |
| `position: sticky; top: 0` | `sticky top-0` |
| `position: fixed` | `fixed` |
| `top: 0.75rem; right: 0.75rem` | `top-3 right-3` |
| `left: 0; right: 0` | `inset-x-0` |
| `z-index: 10` | `z-10` |

The rules are identical to C1, including the traps: a sticky header still needs
an opaque background, and an absolute child still needs a positioned parent.

---

## The bugs you will actually hit

| Symptom | Cause |
|---|---|
| `p-4` is bigger than expected | The scale is steps of 4px |
| My `md:` class does the opposite | Every prefix is min-width |
| `justify-between` does nothing | The parent has no `flex` |
| `grid-cols-3` is ignored | The element has no `grid` |
| My custom colour does nothing | The token is not in `@theme`, or is spelled differently |
| Keyboard users get no feedback | You wrote `hover:` and forgot `focus:` |
| Horizontal scrollbar at 360px | A fixed width such as `w-[420px]` |
| The tutorial does not match | It is a v3 tutorial |

**Debugging method:** select the element in DevTools and read its class list. A
class that generated no CSS simply does not exist, exactly like a misspelt CSS
property. The Styles panel shows nothing for it.
