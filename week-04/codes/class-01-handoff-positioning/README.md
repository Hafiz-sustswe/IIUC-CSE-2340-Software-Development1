# Class 1 — Design Handoff and CSS Positioning

## Files

- `positioning-demo.html` + `positioning-demo.css` — seven live demonstrations:
  the five `position` values, the relative-parent/absolute-child pattern, and
  z-index including the trapped-child trap.
- `design-spec.md` — the written version of the handoff used in C2.

## Run it

Open `positioning-demo.html` with Live Server, **and scroll**. Several examples
only make sense while the page is moving: the sticky header, the sticky section
labels, and the fixed back-to-top button.

## What to look at

| Section | What it shows |
|---|---|
| 1 | `static` ignores `top` and `left` entirely |
| 2 | `relative` moves but keeps its original space |
| 3 | The same absolute box with and without a positioned parent |
| 4 | `fixed` ignores scrolling |
| 5 | `sticky` sticks, then stops at the end of its parent |
| 6 | The pattern you will actually use: relative card, absolute badge and caption |
| 7 | z-index, and why `9999` sometimes does nothing |

## The rule to remember

```css
.card        { position: relative; }   /* creates the context */
.card__badge { position: absolute; top: 12px; right: 12px; }
```

An absolutely positioned element measures from **the nearest positioned
ancestor**. If there is none, it measures from the whole document. So the
question is never "where did my badge go" but "which ancestor is it measuring
from?"

## Try these

The CSS file ends with five experiments. The most instructive:

> Add `overflow: hidden` to `main`. What happens to the sticky labels?

That silently breaks `position: sticky`, and it is the second most common sticky
bug after a missing `top` value.

## Using design-spec.md

In C2 you take these measurements from the design file yourself. Use this
document to **check** your numbers afterwards, not to skip the measuring.
