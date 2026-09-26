# Positioning & Design Handoff Cheat Sheet — CSE-2340

**Week 4, Classes 1 and 2**
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## Part 1 — Reading a design

| Read | Notes |
|---|---|
| Spacing | Padding inside, margin between. Alt (Option) + hover measures a gap |
| Type | Family, size, weight, line height |
| Colour | **Copy the hex.** Never eyedrop from a screenshot, compression shifts it |
| Radius and border | Card corners, badge corners, border width |
| Size | Fixed width, or does it stretch? Look for a max-width |
| Breakpoints | Is there a mobile frame as well as a desktop one? |

### Exporting assets

| Format | Use for | Note |
|---|---|---|
| SVG | Logos, icons, simple shapes | Scales perfectly, tiny file |
| PNG | Images needing transparency | Export at 2x |
| JPG | Photographs | Smaller than PNG, no transparency |
| WebP | Photographs on modern sites | Smallest, supported everywhere now |

**Why 2x:** a phone packs two or three device pixels into one CSS pixel, so a 1x
image looks soft. Export at 2x and set the CSS width to the 1x value.

Lowercase file names, hyphens not spaces, keep them in `images/`, and compress
photos before committing. A 4MB hero image costs you marks even if it looks
right.

---

## Part 2 — The five position values

| Value | In the flow? | Measured from | Use for |
|---|---|---|---|
| `static` | Yes | Nothing, offsets are **ignored** | The default |
| `relative` | Yes, keeps its space | Its own normal spot | Nudging; creating a context |
| `absolute` | **No** | Nearest positioned ancestor | Badges, captions, overlays |
| `fixed` | **No** | The viewport | Back-to-top, floating buttons |
| `sticky` | Yes | Its scroll threshold | Headers, section labels |

`top`, `right`, `bottom`, `left` and `z-index` only work on a **positioned**
element. On `static` they do nothing at all.

---

## The one pattern to memorise

```css
.card {
  position: relative;      /* creates the positioning context */
}

.card__badge {
  position: absolute;      /* measured from .card, not the page */
  top: 12px;
  right: 12px;
}
```

An absolutely positioned element searches **up** through its ancestors for the
first one that is positioned. If it finds none, it uses the whole document.

So the question is never *"where did my badge go"* but **"which ancestor is it
measuring from?"**

### Full-width overlay

```css
.card__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;        /* left + right together = full width, no width needed */
}
```

---

## sticky

```css
.site-header {
  position: sticky;
  top: 0;                              /* REQUIRED, a threshold */
  z-index: 10;
  background-color: #003366;           /* REQUIRED, must be opaque */
}
```

Two failures account for almost every sticky bug:

1. **No `top` value.** Sticky with no threshold does nothing.
2. **An ancestor has `overflow: hidden`.** This silently kills sticky.

`sticky` vs `fixed`:

- sticky keeps its space in the flow; fixed does not
- sticky stops at the end of its parent; fixed never stops
- a sticky header pushes content down; a fixed one overlaps it

---

## z-index

```css
/* Agree a scale and stay inside it */
/*  2   badge, caption
    10  sticky header
    20  floating button
    30  modal overlay
    40  toast message  */
```

**Two rules people forget:**

1. `z-index` does nothing without `position` (outside flex and grid children).
2. **A parent with its own `z-index` traps its children.** A child can never
   rise above its parent's level, which is why `9999` sometimes changes nothing.

If `z-index` is not working: check `position` first, then check whether an
ancestor has its own `z-index`.

---

## When NOT to position

| Task | Use |
|---|---|
| Two columns side by side | Flexbox or Grid |
| Centring a box | Flexbox, or `margin: 0 auto` |
| A row of cards | Flexbox |
| A badge on a card corner | **Positioning** |
| A caption over an image | **Positioning** |
| A sticky header | **Positioning** |

**The test:** does it need to sit **on top of** something? Position it. Does it
need to sit **next to** something? Flexbox or Grid.

Absolute positioning does not respond to screen size. A layout built from it
breaks on a phone.

---

## The bugs you will actually hit

| Symptom | Cause |
|---|---|
| My badge flew to the page corner | The parent has no `position: relative` |
| `top` / `left` do nothing | The element is still `static` |
| Sticky is not sticking | No `top` value, or an ancestor has `overflow: hidden` |
| `z-index` is ignored | Not positioned, or an ancestor's z-index traps it |
| Content scrolls through my header | The sticky header's background is transparent |
| It breaks on a phone | You positioned something that needed Flexbox or Grid |

---

## The debugging method

1. **Inspect** the element.
2. **Read the computed `position`** in the Computed tab. Most positioning bugs
   are an element that was never positioned.
3. **Find the rule** in the Styles panel.
4. **Test the fix live** in DevTools, then edit the file.
