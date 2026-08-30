# Accessibility Checklist — CSE-2340 Software Development 1

**Week 2, Class 2**
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

This checklist is used to mark every mini project and the mid-term practical.
Run through it before you submit anything.

---

## The four questions

| Question | What it covers |
|---|---|
| Can I **see** it? | Contrast, text size, zoom |
| Can I **hear** it? | Headings, landmarks, labels, alt text |
| Can I **use** it? | Keyboard, focus, real controls |
| Can I **understand** it? | Link text, error messages, plain language |

---

## The ten-point checklist

### Structure

- [ ] **1.** Exactly one `<h1>`, and heading levels never skip going down (h1 → h2 → h3, never h1 → h4)
- [ ] **2.** `<header>`, `<nav>`, `<main>` and `<footer>` are present, and there is exactly one `<main>`
- [ ] **3.** `<html lang="en">` is set

### Images

- [ ] **4.** Every `<img>` has an `alt` attribute
  - Informative image → describe what it shows
  - Decorative image → `alt=""` (empty, but the attribute is still there)
  - Image inside a link or button → describe the **action**, not the picture

### Forms

- [ ] **5.** Every input has a `<label>` whose `for` matches the input's `id`
  - Test: click the label text. If the cursor jumps into the box, it works.
- [ ] **6.** Groups of radio buttons or checkboxes are wrapped in `<fieldset>` with a `<legend>`
- [ ] **7.** All radio buttons in one group share the same `name`

### Keyboard

- [ ] **8.** Every control can be reached and operated with `Tab`, `Enter` and `Space` alone
  - Real `<button>`, `<a>`, `<input>` and `<select>` elements do this for free
  - A `<div>` with an onclick does not
- [ ] **9.** Focus is always visible. `outline: none` is never used without a replacement

### Colour

- [ ] **10.** Text contrast is at least **4.5 : 1** (3 : 1 for text 24px and larger), and no information is carried by colour alone

---

## How to check in five minutes

1. **Keyboard test (60 seconds).** Put the mouse down. Press `Tab` from the top of the page. Can you reach and use everything? Can you always see where you are?
2. **Label click test (30 seconds).** Click every label. The cursor should jump into its input.
3. **Heading test (30 seconds).** Read your headings aloud as a list. Does the order make sense as a table of contents?
4. **Lighthouse (2 minutes).** F12 → Lighthouse tab → tick only Accessibility → Analyze page load.
5. **Contrast (1 minute).** In DevTools, click a text colour swatch and read the contrast ratio.

---

## Important warning about automatic tools

A Lighthouse score of 100 does **not** mean your page is accessible.

Automatic tools find roughly a third of real problems. A tool can check that an `alt` attribute exists; it cannot tell you whether `alt="image1"` is useful. It can check that headings exist; it cannot tell you whether their order makes sense.

The keyboard test and reading your own alt text are the checks that actually matter.

---

## Keyboard reference

| Key | What it should do |
|---|---|
| `Tab` | Move to the next interactive control |
| `Shift + Tab` | Move to the previous control |
| `Enter` | Follow a link, press a button, submit a form |
| `Space` | Tick a checkbox, press a button |
| `Arrow keys` | Move within a radio group or an open select |
| `Esc` | Close a dialog or dropdown |

---

## Quick fixes for the five most common problems

| Problem | Fix |
|---|---|
| `<div onclick="...">` used as a button | Replace with `<button type="button">` |
| `alt` attribute missing | Add one. Use `alt=""` if the image is decorative |
| `placeholder` used instead of a label | Add a real `<label for="...">`. Keep the placeholder as an extra hint |
| `outline: none` in the CSS | Replace it: `outline: 3px solid #E39A18; outline-offset: 2px;` |
| Pale grey text | Darken the text until the ratio reaches 4.5 : 1 |

---

## Useful references

- MDN — HTML: A good basis for accessibility
- web.dev — Learn Accessibility
- WebAIM Contrast Checker
- WAVE browser extension
- Chrome DevTools — Lighthouse and the Accessibility panel
