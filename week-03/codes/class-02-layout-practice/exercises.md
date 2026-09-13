# Week 3, Class 2 — Practice Exercises

**CSE-2340 Software Development 1** · Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

Work through these in order. Ask for help when you have been stuck for more than
three minutes — but bring the flex or grid overlay with you when you ask.

---

## The method

1. **Inspect** — right click the element, choose Inspect, confirm the correct
   element is highlighted.
2. **Open the overlay** — click the small `flex` or `grid` badge next to the
   container in the Elements panel. The axes, gaps and tracks are drawn on the
   page.
3. **Find the rule** — in the Styles panel, find which rule set the value. Rules
   in a media query that does not apply are greyed out.
4. **Test live** — change it in DevTools first. If it works, copy that one line
   into your file.

Before asking for help, be able to say **which element is the container** and
**which axis** you think is wrong. That question answers itself most of the time.

---

## Exercise 1 — Fix the broken layout (12 minutes)

**Files:** `starter/index.html` and `starter/styles.css`

Seven bugs are in the CSS. **Exactly one is in the HTML.**

| # | Symptom | Question to ask yourself |
|---|---|---|
| 1 | The nav links are still stacked vertically | Which element is the container here? |
| 2 | Title and links jammed together on the left | Which axis, and which property? |
| 3 | Links sit above the title, not beside it | Cross axis this time |
| 4 | Cards squash instead of wrapping | What is the default value of `flex-wrap`? |
| 5 | No space between the cards | Do not reach for `margin` |
| 6 | The gallery is one column at every size | `gap` alone does not make a grid |
| 7 | The column count never changes on resize | The `auto-fit` line from C1 |
| 8 | On a phone the page is tiny and zoomed out | Not in the CSS. Read the `<head>` |

Record every fix in `fixes.md` as you go — one line each: what was wrong, what
you changed, and whether it was a container or an item property.

Open `solution/` only after you have found at least six.

---

## Exercise 2 — Grid gallery (8 minutes)

Build a gallery from this markup:

```html
<section class="gallery">
  <article class="tile">Week 1</article>
  <article class="tile">Week 2</article>
  <article class="tile">Week 3</article>
  <article class="tile">Week 4</article>
  <article class="tile">Week 5</article>
  <article class="tile">Week 6</article>
</section>
```

**Requirements**

- Tiles are never narrower than 240px
- The column count changes by itself when you resize
- A 20px gap in both directions
- **No media query at all**

**Answer these as CSS comments in your file**

- How many columns do you see at 1280px? At 800px? At 375px?
- What happens if you change `240px` to `400px`?
- Why does this need no media query?

**Done when** dragging the browser edge changes the column count smoothly, with
no overflow and no horizontal scrollbar.

---

## Exercise 3 — Make it responsive (8 minutes)

Take the page from Exercise 1 and make it behave at three sizes.

| Width | Required behaviour |
|---|---|
| 360px | Everything in one column, header stacked |
| 768px | Header becomes a row, cards in two columns |
| 1280px | Container capped, cards in three or four columns |

**Rules**

- Mobile-first: the base styles have **no** media query
- Maximum **two** breakpoints
- Use `min-width` only — never mix `min-width` and `max-width` in one stylesheet

```css
/* Start here. Base = phone. Then add. */
header { display: flex; flex-direction: column; gap: 8px; }

@media (min-width: 768px) {
  /* your job */
}
```

---

## Exercise 4 — Rebuild the target (stretch, 7 minutes)

Build a page matching the target on the slide: a dark header with the site name
on the left and links on the right, then six cards in a grid, then a footer.

**Requirements**

- Flexbox for the header
- Grid for the six cards
- Three columns on a laptop, two on a tablet, one on a phone
- Semantic HTML, written by you — no `div` soup

**This is Mini Project 1.** MP1 asks for exactly this: semantic HTML, CSS, a
responsive layout, deployed. Finish this well and MP1 is mostly done.

---

## Checklist before you leave

- [ ] At least six of the eight bugs fixed
- [ ] You can explain one fix using the flex or grid overlay
- [ ] The page has no horizontal scrollbar at 360px
- [ ] Focus is still visible when you press Tab
- [ ] `fixes.md` started
- [ ] Committed and pushed
