# Flexbox, Grid & Responsive Cheat Sheet — CSE-2340

**Week 3, Classes 1 and 2**
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## The one rule that prevents most confusion

**Layout properties go on the CONTAINER, not on the items.**

```css
.row { display: flex; }        /* ✅ on the parent */
.item { display: flex; }       /* ❌ does nothing useful */
```

When a layout does nothing at all, check the parent first.

---

## Flexbox — one direction

### Container properties

| Property | What it does | Common values |
|---|---|---|
| `display: flex` | Makes this a flex container. Its direct children become items | — |
| `flex-direction` | Which way the main axis runs | `row` (default), `column` |
| `justify-content` | Position along the **main** axis | `flex-start`, `center`, `flex-end`, `space-between`, `space-around` |
| `align-items` | Position along the **cross** axis | `stretch` (default), `center`, `flex-start`, `flex-end` |
| `gap` | Space **between** items, none on the outside | `16px`, `20px` |
| `flex-wrap` | Allow a second line | `nowrap` (default), `wrap` |

### Item properties

| Property | What it does |
|---|---|
| `flex: 1` | Grow to fill leftover space, shrink if needed |
| `flex: 2` | Take twice the share of `flex: 1` |
| `flex: 0 0 240px` | Do not grow, do not shrink, stay 240px |
| `flex: 1 1 280px` | Grow and shrink, but never narrower than 280px |
| `align-self` | Override `align-items` for this one item |

### The axis rule

The **main axis** follows `flex-direction`.

- `flex-direction: row` → main axis is horizontal, `justify-content` moves things left and right
- `flex-direction: column` → main axis is **vertical**, and `justify-content` now moves things up and down

Almost every Flexbox problem is someone using `justify-content` when they meant
`align-items`.

### Patterns you will use constantly

```css
/* Nav bar: title left, links right, on one line */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

/* Vertical centring — two lines, and it used to be the hardest thing in CSS */
.box { display: flex; align-items: center; }

/* A row of cards that wraps by itself — no media query */
.card-row { display: flex; flex-wrap: wrap; gap: 20px; }
.card { flex: 1 1 280px; }
```

---

## Grid — two directions

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

| Value | Meaning |
|---|---|
| `1fr 1fr 1fr` | Three equal columns |
| `repeat(3, 1fr)` | The same thing, written shorter |
| `2fr 1fr` | The first column is twice as wide |
| `240px 1fr` | A fixed sidebar and a flexible main area |

### The `fr` unit

`fr` means one share of the **leftover** space. Unlike `%`, it already accounts
for the `gap`, which is why percentages so often overflow and `fr` does not.

### The one grid line worth memorising

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
```

- `auto-fit` — fit as many columns as will comfortably fit
- `minmax(260px, 1fr)` — never narrower than 260px, otherwise share equally
- **Result:** four columns on a laptop, two on a tablet, one on a phone, with
  **no media query at all**

For galleries, card lists and product grids this single declaration is usually
the whole job.

---

## Flexbox or Grid?

| Use Flexbox when | Use Grid when |
|---|---|
| Items sit in one line or column | You need rows **and** columns at once |
| A nav bar: title left, links right | A gallery or card grid |
| A row of buttons | A whole page skeleton |
| Vertically centring something | You want the layout to decide the sizes |
| The content decides the sizes | |

You will use both on the same page, and that is correct. Typical structure:
**Grid for the page skeleton, Flexbox inside each area.**

If you cannot decide, ask: *am I arranging along one line, or filling a table of
slots?*

---

## Responsive — mobile-first

### The viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it a phone pretends to be 980px wide and shrinks the whole page. No CSS
can fix this.

### Mobile-first means: base styles have no media query

```css
/* BASE = phone. The simplest layout needs no query at all. */
.card-row { display: block; }

/* Then ADD for bigger screens */
@media (min-width: 768px) {
  .card-row { display: flex; gap: 20px; }
}
```

You add complexity instead of undoing it. Old phones never download rules they
cannot use.

### Breakpoints

| Name | Query | Range |
|---|---|---|
| Phone | base, no query | up to 767px |
| Tablet | `@media (min-width: 768px)` | 768–1023px |
| Laptop | `@media (min-width: 1024px)` | 1024px and up |

**Two breakpoints is enough.** Add one where *your* layout actually breaks, not
at a famous number from a blog post.

Use `min-width` only. Mixing `min-width` and `max-width` in one stylesheet is
where students lose an hour.

### Media queries go at the BOTTOM

Later rules win over earlier ones with the same specificity. A media query above
the base rules is overwritten by them.

---

## Testing

1. `F12` → `Ctrl+Shift+M` for device mode
2. Test at **360px**, **768px** and **1280px**
3. Drag the window edge slowly and watch where it breaks
4. Check for a horizontal scrollbar at 360px — there should be none

---

## DevTools for layout

| Where | What it gives you |
|---|---|
| **flex** / **grid** badge in Elements | Click it to draw the axes, gaps and tracks on the page |
| Styles panel | Greyed-out media queries are the ones not currently applying |
| Device mode | `Ctrl+Shift+M` |
| Computed tab | The final value after all rules |

---

## The bugs you will actually hit

| Symptom | Cause |
|---|---|
| Flexbox does nothing | `display: flex` is on the child. It belongs on the parent |
| `justify-content` is not working | You wanted `align-items`. Check which axis |
| Items squash instead of wrapping | `flex-wrap: wrap` is missing — `nowrap` is the default |
| The grid has one column | `display: grid` is set but `grid-template-columns` is not |
| The grid ignores `auto-fit` | `minmax` is missing |
| Phone layout is tiny and zoomed out | The viewport meta tag is missing |
| My media query is ignored | It sits above the base rules, or you mixed `min-` and `max-width` |
| Works at 1280px, breaks at 360px | You wrote desktop-first. Start from the phone and add upwards |
