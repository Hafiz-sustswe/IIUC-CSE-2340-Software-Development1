# Week 2 — HTML Patterns, Accessibility and CSS Foundations

**CSE-2340 Software Development 1** · Autumn 2026
Instructor: Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## This week in one line

Turn single HTML tags into the three patterns every real website uses, make them usable by everybody, and then style them properly.

---

## Classes

Under syllabus V3.8, **C1 and C3 are teaching classes** and **C2 and C4 are practice classes**.

| Class | Type | Topic |
|---|---|---|
| C1 | Class | Navigation, forms and tables: practical HTML patterns; accessibility essentials: landmarks, alt text, labels, heading order, keyboard navigation, focus and contrast |
| C2 | Practice | Build navigation, forms and tables; run an accessibility correction pass on the page |
| C3 | Class | CSS application methods, selectors, text properties and units; box model, margin, padding, width/height, display and backgrounds |
| C4 | Practice | Build and debug layouts using the box model, display and backgrounds |

**CLO alignment:** C1 → CLO1 (PO1), CLO2 (PO3), CLO3 (PO5) · C3 → CLO1 (PO1), CLO3 (PO5)

---

## What is in this folder

```
week-02/
├── codes/
│   ├── class-01-navigation-forms-tables/
│   │   ├── register.html        complete registration page (no CSS yet)
│   │   └── snippets.html        one demo per pattern, with deliberate bugs
│   ├── class-02-accessibility/
│   │   ├── before/index.html    BROKEN ON PURPOSE — twelve problems to find
│   │   └── after/index.html     the same page fixed, every change marked FIX n
│   ├── class-03-css-fundamentals/
│   │   ├── index.html           the C1 page plus ONE link line
│   │   ├── styles.css           the stylesheet built live, fully commented
│   │   └── snippets.html/.css   one demo per slide
│   └── class-04-layout-practice/
│       ├── exercises.md         four exercises and the debugging method
│       ├── starter/             BROKEN ON PURPOSE — eight bugs in styles.css
│       └── solution/            all eight fixed, each marked FIX n
└── study-materials/
    ├── slides/                  C1–C4 decks (.pptx and .pdf)
    └── handouts/
        ├── accessibility-checklist.md   the ten-point marking standard
        ├── audit-report-template.md     for the C2 home task
        ├── css-cheatsheet.md            everything from C3 in one page
        ├── box-model-debug-guide.md     the four-step debugging routine
        └── fixes-template.md            for the C4 home task
```

---

## How to run the code

```bash
cd week-02/codes/class-03-css-fundamentals
```

Open the folder in VS Code, right click `index.html`, choose **Open with Live Server**. Keep `styles.css` in the same folder or the link breaks.

**Compare `class-03-css-fundamentals/index.html` with `class-01-navigation-forms-tables/register.html`.** Select both in the VS Code explorer, right click, choose **Compare Selected**. Only the `<link>` line differs — everything you see on screen changed, and the structure did not. That is what semantic HTML buys you.

For the two broken folders (`class-02-accessibility/before/` and `class-04-layout-practice/starter/`), work on them yourself before opening the matching `after/` or `solution/` folder.

---

## What you should be able to do after this week

- Build a navigation menu that is consistent across pages and marks the current page
- Choose the right form control and group fields with `fieldset` and `legend`
- Build a data table with `caption`, `thead`/`tbody`, `th` and `scope`
- Check landmarks, heading order, alt text, labels, keyboard access, focus and contrast
- Link an external stylesheet and select elements by tag, class and id
- Control text, and choose between `px`, `%`, `em`, `rem` and `vh`
- Explain the box model and why `box-sizing: border-box` matters
- Use `display` and background properties correctly
- Debug a layout in DevTools instead of guessing

---

## Assignments

Every class has a Part 1 (in class, verified before you leave) and a Part 2 (home task, due before the next class). Each class is worth 5 marks.

### C1 — Navigation, Forms and Tables

**Part 1 (2 marks)** — Add two rows to the routine table; add a `tel` input with a proper label; show that clicking each label focuses its input.

**Part 2 (3 marks)** — Build `feedback.html` with two fieldsets, a radio group, a checkbox group, a select and a textarea, plus a results table with a caption and `scope` on every header cell. Link it from your nav.

### C2 — Accessibility Essentials

**Part 1 (2 marks)** — Fix at least four problems in `before/index.html`. Show the Lighthouse score before and after, and tab through the page with no mouse.

**Part 2 (3 marks)** — Audit your own `register.html` against the ten-point checklist, fix every failure, and write `audit-report.md`.

### C3 — CSS Fundamentals and the Box Model

**Part 1 (2 marks)** — Change the header background colour while keeping text contrast passing; add `:hover` **and** `:focus` styles to the Register button; show the focus style using only the Tab key.

**Part 2 (3 marks)** — Apply `styles.css` to every page you have built. Required: a `box-sizing` reset, a centred container with `max-width`, a styled nav, styled form controls and a styled table. All contrast must still pass 4.5 : 1, and both `:hover` and `:focus` must be styled on every link and button.

### C4 — Layout Practice

**Part 1 (2 marks)** — Show your fixed starter page with at least six of the eight bugs corrected, and explain one fix using the DevTools box model diagram.

**Part 2 (3 marks)** — Finish all eight fixes and Exercises 2–4, build the dashboard page, and write `fixes.md` describing each bug and its fix.

---

## Rubrics

**C3 — 5 marks**

| Criterion | Marks |
|---|---|
| External stylesheet linked and applied to all pages | 1.0 |
| `box-sizing` reset and a centred `max-width` container | 1.5 |
| Nav, form and table styled and readable | 1.5 |
| `:hover` and `:focus` both styled; contrast still passes | 1.0 |

**C4 — 5 marks**

| Criterion | Marks |
|---|---|
| Six or more of the eight planted bugs fixed | 1.5 |
| `display` drill correct, with the written explanation | 1.0 |
| Spacing and background exercise complete | 1.0 |
| Dashboard page built with correct box model use | 1.5 |

C1 and C2 rubrics are on their respective assignment slides.

---

## The ten-point accessibility checklist

Used to mark **every** mini project and the mid-term practical, starting now.

1. Exactly one `h1`, and heading levels never skip downwards
2. `header`, `nav`, `main` and `footer` present; exactly one `main`
3. `<html lang="en">` is set
4. Every image has an `alt` attribute (empty `alt=""` if decorative)
5. Every input has a `label` whose `for` matches its `id`
6. Field groups use `fieldset` and `legend`
7. Radio buttons in a group share the same `name`
8. Every control is reachable and usable with the keyboard alone
9. Focus is always visible; `outline: none` is never used without a replacement
10. Text contrast is at least 4.5 : 1, and colour is never the only signal

Full version: [`study-materials/handouts/accessibility-checklist.md`](study-materials/handouts/accessibility-checklist.md)

---

## Common problems this week

| Problem | Fix |
|---|---|
| Both radio buttons can be selected | Give every option in the group the same `name` |
| Clicking the label does nothing | `for` and `id` do not match exactly |
| Cannot Tab to a control | It is a `div` with an onclick. Use a real `<button>` |
| My box is wider than the width I set | No `box-sizing: border-box` |
| `width` and `height` do nothing | The element is `inline`. Use `inline-block` |
| The gap is bigger than I asked for | Margin collapse — the larger margin wins, they do not add |
| `margin: 0 auto` is not centring | The box needs a width **and** must be `block` |
| Nothing I write has any effect | 404 on `styles.css`, or a missing semicolon on the line above |
| The background image does not show | Wrong path, or the box has zero height. `url()` is relative to the CSS file |

Full debugging routine: [`study-materials/handouts/box-model-debug-guide.md`](study-materials/handouts/box-model-debug-guide.md)

---

## References for this week

- [MDN — HTML forms guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN — HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
- [MDN — HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [web.dev — Learn Accessibility](https://web.dev/learn/accessibility/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN — CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [MDN — The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [web.dev — Learn CSS](https://web.dev/learn/css/)
- [Chrome DevTools — Inspect CSS](https://developer.chrome.com/docs/devtools/css)

---

## Next week

Week 3 covers Flexbox, CSS Grid and responsive design, then specificity and the cascade, and ends with the **Mini Project 1 evaluation** in C4: a semantic HTML and CSS responsive page, deployed.

Everything you built in Weeks 1 and 2 is what MP1 is marked on. If you completed both home tasks this week, most of the work is already done.
