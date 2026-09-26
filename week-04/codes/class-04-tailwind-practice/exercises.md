# Week 4, Class 4 — Practice Exercises

**CSE-2340 Software Development 1** · Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

Everything today is done with utility classes. There is no CSS file in these
exercises at all.

---

## Setup

Every page here loads Tailwind with the browser script:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

That is fine for learning. **Mini Project 2 must use the Vite setup instead.**
See `../class-03-tailwind/setup-notes.md`.

Custom tokens go in a style tag, not a config file:

```html
<style type="text/tailwindcss">
  @theme { --color-iiuc: #003366; }
</style>
```

Note the `type="text/tailwindcss"`. A normal `<style>` tag will not work.

---

## Exercise 1 — Reproduce the page (12 minutes)

Build a page with utilities only:

- A sticky header, opaque, with nav links
- A centred container: `mx-auto`, a max width, page padding
- Three course cards in a grid
- A badge positioned on each card corner

**Use the scale.** Padding and gaps from the 4px scale (`p-4`, `p-5`, `gap-5`).
Colours from the 50–950 range. No arbitrary values such as `p-[23px]` unless
nothing on the scale fits.

Start from this shell:

```html
<div class="mx-auto w-11/12 max-w-5xl py-8">
  <div class="grid gap-5">   <!-- add the column classes in Exercise 2 -->
```

**Work in this order:** layout first (flex or grid, gap), then spacing, then
colour and type, then states. If you start with colours you will restyle
everything twice when the layout changes.

---

## Exercise 2 — Make it responsive (8 minutes)

| Width | Required behaviour |
|---|---|
| 360px | One column. Header stacked. No horizontal scrollbar |
| 768px | Two columns. Header becomes a row, spread apart |
| 1024px | Three columns. Larger page heading |

The unprefixed class is the phone:

```html
<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
```

**Write the mapping as an HTML comment** in your file: which class handles which
width. If you cannot say it, you have copied it rather than understood it.

---

## Exercise 3 — Modify it (8 minutes)

1. **Add a theme token.** Define `--color-iiuc` in `@theme` and use `bg-iiuc` on
   the header.
2. **Add both states.** `hover:` and `focus:` on every link and button. Test
   with the Tab key only, no mouse.
3. **Add a new section.** A two-column block: text on the left, a placeholder on
   the right from `md` and up. One column on a phone.

---

## Exercise 4 — Fix the broken page (8 minutes)

Open `starter/index.html`. Six bugs, every one of them in a class attribute.

| # | Symptom | Question to ask |
|---|---|---|
| 1 | The cards never become a row | Read the prefix. Which width is it for? |
| 2 | `gap` and `justify-between` do nothing | Is the container a flex container at all? |
| 3 | `grid-cols-3` is ignored | Same family of problem as bug 2 |
| 4 | The heading colour does not apply | Does that colour token exist? |
| 5 | Keyboard users get no feedback | One prefix is missing from each link |
| 6 | Horizontal scrollbar at 360px | A fixed width where a responsive one belongs |

**The method changes slightly with Tailwind.** Instead of reading a stylesheet,
select the element in DevTools and **read its class list**. A class that
generated no CSS simply does not exist, exactly like a misspelt CSS property.
The Styles panel shows nothing for it, and that silence is the clue.

Open `solution/index.html` only after fixing at least four. Then compare: select
both files in VS Code, right click, **Compare Selected**.

---

## Checklist before you leave

- [ ] The page matches the three required widths
- [ ] You can name the class that controls each breakpoint
- [ ] Tab to a link shows a visible focus style
- [ ] No horizontal scrollbar at 360px
- [ ] At least four of the six bugs fixed
- [ ] Committed and pushed
