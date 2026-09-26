# Week 4, Class 2 — Practice Exercises

**CSE-2340 Software Development 1** · Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

The rule for today: **reproduce, do not redesign.** If you think the design is
wrong, note it in `handoff-notes.md` and build it anyway. Arguing with a design
is a conversation for the designer, not a licence to change it.

---

## Exercise 1 — Read the design (8 minutes)

Open the shared design file in Figma or Pixso. Create `measurements.md` and
record these six values **before you write any CSS**.

| # | Measure | How |
|---|---|---|
| 1 | Card padding | Select the card, read the padding in the inspect panel |
| 2 | Gap between cards | Select one card, hold Alt (Option), hover the next |
| 3 | Heading size and weight | Select the heading, read size, weight and line height |
| 4 | Body text colour | Copy the hex from the panel. **Do not eyedrop a screenshot** |
| 5 | Corner radius | On the card and on the badge |
| 6 | Badge offset | Distance from the card's top and right edges |

Coding while measuring is how you end up with 23px padding in one place and 25px
in another. Write the list first.

---

## Exercise 2 — Build the card (12 minutes)

Build three course cards in a wrapping Flexbox row.

**Requirements**

- Semantic markup: `article`, `h2`, `p`, `a`
- Use **your measured values**, not invented ones
- Put the colours in `:root` as custom properties
- `flex: 1 1 280px` so the row wraps without a media query

```css
:root {
  --card-pad: /* your measured value */;
  --card-gap: /* your measured value */;
  --radius:   /* your measured value */;
}
```

**Do not** position anything yet. That is Exercise 3.
**Do not** change colours because you prefer others.
**Do not** round 23px up to 24px without noting it in `handoff-notes.md`.

---

## Exercise 3 — The positioned parts (10 minutes)

Add these three, in order, **testing after each one**.

### 1. Badge on the card corner

`position: relative` on the card, `position: absolute` on the badge, at your
measured offset. If the badge jumps to the corner of the page, you forgot the
first half.

### 2. Caption over the image

Absolute, pinned to `bottom`, `left` and `right`, with a semi-transparent
background. Setting both `left: 0` and `right: 0` makes it full width without
needing `width: 100%`.

### 3. Sticky header

`position: sticky`, `top: 0`, an **opaque** background, and a sensible
`z-index`. A transparent sticky header lets the page text scroll through it.

**After each part:** scroll the page, resize to 360px, and Tab through it. Three
changes at once means three interacting bugs and no idea which caused what.

---

## Exercise 4 — Fix the broken page (8 minutes)

Open `starter/`. Six positioning bugs are planted in `styles.css`. The HTML is
correct, so do not change it.

| # | Symptom | Question to ask |
|---|---|---|
| 1 | The NEW badge sits in the corner of the page | Which ancestor is it measuring from? |
| 2 | `top` and `left` do nothing on the Popular tag | Is the element positioned at all? |
| 3 | The header does not stick | Which position value pins an element at a threshold? |
| 4 | Page text scrolls through the header | Look at the header's background |
| 5 | The caption is behind the image | One property, and it needs a friend |
| 6 | `z-index: 9999` still does not work | Does an ancestor have its own z-index? |

Bug 6 is the stacking-context trap from C1. A child can never rise above the
level of the parent that contains it, so raising the child's number changes
nothing.

Open `solution/` only after you have fixed at least four. Then compare: select
both stylesheets in VS Code, right click, **Compare Selected**.

---

## The debugging method

1. **Inspect** the element.
2. **Read the computed `position`** in the Computed tab. Four of the six bugs
   above are simply an element that was never positioned.
3. **Find the rule** in the Styles panel.
4. **Test the fix live** in DevTools, then edit the file.

---

## Checklist before you leave

- [ ] `measurements.md` written, with six values
- [ ] Card CSS matches your own measurements
- [ ] Badge positioned against the card, not the page
- [ ] Sticky header works and is opaque
- [ ] At least four of the six bugs fixed
- [ ] No horizontal scrollbar at 360px
- [ ] Focus still visible when tabbing
- [ ] Committed and pushed
