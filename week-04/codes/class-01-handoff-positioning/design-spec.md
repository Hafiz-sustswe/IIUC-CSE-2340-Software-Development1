# Design Handoff — Course Card Component

**CSE-2340 Software Development 1** · Week 4
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

This is the written version of the design you are given in C2. In a real job you
would read these values out of Figma or Pixso yourself. Use this file only to
check your measurements **after** you have taken them.

---

## Frames

| Frame | Width |
|---|---|
| Mobile | 360px |
| Tablet | 768px |
| Desktop | 1280px |

---

## Colours

| Token | Hex | Used for |
|---|---|---|
| `--navy` | `#003366` | Header background, headings |
| `--navy-2` | `#0A4A85` | Hover states |
| `--amber` | `#E39A18` | Badge background, focus ring |
| `--ink` | `#3D4A57` | Body text |
| `--muted` | `#6B7A88` | Meta text |
| `--line` | `#D6DEE6` | Borders |
| `--bg` | `#F7F9FB` | Page background |
| `--white` | `#FFFFFF` | Card background |

Copy these hex values. Do not eyedrop them from a screenshot, because image
compression shifts the colour.

---

## Type

| Element | Family | Size | Weight | Line height |
|---|---|---|---|---|
| Page title | Arial | 32px | bold | 1.3 |
| Card heading | Arial | 18px | bold | 1.3 |
| Body | Arial | 16px | normal | 1.6 |
| Meta / caption | Arial | 14px | normal | 1.5 |
| Badge | Arial | 12px | bold | 1 |

---

## Spacing

| Where | Value |
|---|---|
| Card padding | 20px |
| Gap between cards | 20px |
| Gap between card heading and body text | 8px |
| Page container padding | 24px |
| Header vertical padding | 14px |

---

## Card

| Property | Value |
|---|---|
| Background | `--white` |
| Border | 1px solid `--line` |
| Corner radius | 8px |
| Media area height | 140px |
| Minimum card width | 280px |

## Badge

| Property | Value |
|---|---|
| Position | absolute, 12px from the top, 12px from the right |
| Background | `--amber` |
| Text colour | `#3A2700` |
| Padding | 4px 10px |
| Corner radius | 999px (fully rounded) |

## Caption over the image

| Property | Value |
|---|---|
| Position | absolute, pinned to bottom, left and right |
| Background | `rgba(0, 0, 0, 0.55)` |
| Text colour | `#FFFFFF` |
| Padding | 8px 10px |

## Sticky header

| Property | Value |
|---|---|
| Position | sticky, top 0 |
| Background | `--navy`, fully opaque |
| z-index | 10 |

---

## Behaviour

| Width | Cards per row |
|---|---|
| 360px | 1 |
| 768px | 2 |
| 1280px | 3 |

Achieve this with `flex: 1 1 280px` and wrapping, not with a media query.

---

## z-index scale

Agree on a scale and stay inside it. Never write `9999`.

| Level | Used for |
|---|---|
| 2 | Badge, caption |
| 10 | Sticky header |
| 20 | Back-to-top button |
| 30 | Modal overlay (not used in this exercise) |

---

## Notes for the developer

- The badge must sit above the caption where they overlap.
- The sticky header must not let page text show through it.
- The card must keep its rounded corners even though the image fills the top.
- Focus states are not shown in the design file. Use the amber ring at 3px with
  a 2px offset, as in Week 3.

A real handoff is always incomplete in places like that last point. When you
find a gap, decide sensibly and **write it down**. That is what
`handoff-notes.md` is for.
