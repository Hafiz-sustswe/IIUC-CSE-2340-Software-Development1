# Class 3 — Specificity, Cascade and the Live Build

## Files

- `specificity-demo.html` + `specificity-demo.css` — nine worked examples.
  **Every rule in the CSS is annotated with its specificity**, written as
  `ids-classes-elements`. This file is meant to be *inspected*, not admired.
- `index.html` + `styles.css` — the complete static page built live in class.
  Semantic HTML, tokens in `:root`, Flexbox and Grid, mobile-first CSS, and
  `:hover`/`:focus` styled together everywhere.

## How to use the demo file

Open `specificity-demo.html` with Live Server, then for each example:

1. **Predict the winner before you look.**
2. Right click the element and choose **Inspect**.
3. Read the Styles panel from the top — the winning rule is first.
4. Find the rules that lost. They are struck through.
5. Ask the real question: *which rule is beating this one, and why?*

Example 9 has four competing rules on one paragraph. Work out all four
specificities on paper before you inspect it. The answer is in a comment at the
bottom of the CSS — do not read it first.

## The rules worth remembering

```
The cascade asks three questions, in this order:
  1. Importance   — !important, then inline styles
  2. Specificity  — ids, then classes, then elements
  3. Source order — the later rule wins
```

Specificity is **compared left to right, not summed**. `1-0-0` beats `0-99-0`.

## The live build

`index.html` is the shape of Mini Project 1: semantic landmarks, an external
stylesheet, Flexbox for one-directional rows, Grid for the gallery, mobile-first
media queries, and accessible focus states.

Note that every selector in `styles.css` is **flat**: `.card`, `.btn`,
`.btn:hover`. No nesting three levels deep, no ids, no `!important`. That is the
first half of the class applied in practice.

## Try these

Both files end with a "Try this yourself" block. The most useful one:

> In example 5, remove `!important`. What takes over, and why?
