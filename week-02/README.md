# Week 2 — Practical HTML Patterns, Accessibility and CSS Foundations

**CSE-2340 Software Development 1** · Autumn 2026
Instructor: Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## This week in one line

Turn single HTML tags into the three patterns every real website uses, make them usable by everybody, and then start styling them.

---

## Classes

| Class | Topic | Type | Status |
|---|---|---|---|
| C1 | Navigation, forms and tables: practical HTML patterns | Concept + live build | Published |
| C2 | Accessibility essentials: landmarks, alt text, labels, heading order, keyboard navigation, focus and contrast | Practice + audit | Published |
| C3 | CSS application methods, selectors, text properties and units | Concept + live build | Coming |
| C4 | Box model, margin, padding, width/height, display and backgrounds | Practice | Coming |

**CLO alignment:** C1 → CLO1 (PO1), CLO3 (PO5) · C2 → CLO2 (PO3), CLO3 (PO5)

---

## What is in this folder

```
week-02/
├── codes/
│   ├── class-01-navigation-forms-tables/
│   │   ├── register.html        complete student registration page
│   │   └── snippets.html        one demo per pattern, with deliberate bugs
│   └── class-02-accessibility/
│       ├── before/index.html    BROKEN ON PURPOSE — twelve problems to find
│       └── after/index.html     the same page fixed, every change marked FIX n
└── study-materials/
    ├── slides/                  C1 and C2 decks (.pptx and .pdf)
    └── handouts/
        ├── accessibility-checklist.md    the ten-point marking standard
        └── audit-report-template.md      structure for the C2 home task
```

---

## How to run the code

```bash
cd week-02/codes/class-01-navigation-forms-tables
```

Open with Live Server. There is still no CSS in these files — that starts in C3.

For the accessibility class, open **`before/index.html` first** and try to find the problems yourself. Only open `after/index.html` once you have written your list. To compare them, select both files in the VS Code explorer, right click, and choose **Compare Selected**.

---

## What you should be able to do after C1 and C2

- Build a navigation menu that is consistent across pages and marks the current page
- Choose the right form control: text, email, number, date, radio, checkbox, select, textarea
- Group related fields with `fieldset` and `legend`
- Add validation with HTML attributes alone, and explain why that is not security
- Build a data table with `caption`, `thead`/`tbody`, `th` and `scope`
- Explain when a table is the wrong choice
- Check landmarks, heading order, alt text, labels, keyboard access, focus and contrast
- Run a Lighthouse accessibility audit and explain why a score of 100 is not proof

---

## Deliberate bugs in the sample files

These are teaching demonstrations. Do not "fix" them and do not copy them.

**`class-01-.../snippets.html`**
- A menu built from `<span>` tags that cannot be reached with Tab
- Two radio buttons with different `name` values, so both can be selected
- A `<label for="...">` whose value does not match any `id`

**`class-02-accessibility/before/index.html`**
Twelve accessibility problems, including a missing `lang`, no landmarks, a heading order that starts at `h3`, images with missing or useless `alt`, inputs with placeholders instead of labels, a `<div>` used as a button, colour-only instructions, failing contrast, and a table with no headers.

---

## Assignments

### Class 1 — Navigation, Forms and Tables (5 marks)

**Part 1 — in class, last 5 minutes (2 marks)**
Add two more rows to the routine table for C3 and C4. Add a `tel` input with a proper label. Show that clicking each label focuses its input.

**Part 2 — home task, before Week 2 Class 3 (3 marks)**
Build `feedback.html` with two fieldsets, one radio group, one checkbox group, one select and one textarea, plus a results table with a caption and `scope` on every header cell. Link it from your nav on every page. Commit and push.

**Rubric**

| Criterion | Marks |
|---|---|
| Navigation present and consistent across pages | 1.0 |
| Form controls correct: radio group, checkbox, select | 1.5 |
| Every input has a correctly linked label | 1.0 |
| Table with caption, thead/tbody and scope | 1.5 |

### Class 2 — Accessibility Essentials (5 marks)

**Part 1 — in class, last 5 minutes (2 marks)**
Fix at least four accessibility problems in `before/index.html`. Run Lighthouse before and after and show both scores. Tab through the fixed page with no mouse.

**Part 2 — home task, before Week 2 Class 3 (3 marks)**
Audit your own `register.html` against the ten-point checklist, fix every failure, and write `audit-report.md` using the supplied template. Commit and push both files.

**Rubric**

| Criterion | Marks |
|---|---|
| Landmarks and heading order correct | 1.0 |
| All images and form controls correctly named | 1.5 |
| Page fully usable with the keyboard, focus visible | 1.5 |
| Audit report explains each problem and its fix | 1.0 |

---

## The ten-point accessibility checklist

This is used to mark **every** mini project and the mid-term practical, starting now.

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

Full version with test procedures: [`study-materials/handouts/accessibility-checklist.md`](study-materials/handouts/accessibility-checklist.md).

---

## Common problems this week

| Problem | Fix |
|---|---|
| Both radio buttons can be selected | Give every option in the group the same `name` |
| Clicking the label does nothing | `for` and `id` do not match exactly |
| Table looks shifted | A `tr`, `th` or `td` is unclosed, or a row has the wrong number of cells |
| Cannot Tab to a control | It is a `div` with an onclick. Use a real `<button>` |
| Screen reader reads a file name aloud | The image has no `alt`. Use `alt=""` for decoration |
| Lighthouse says contrast fails | Darken the text or lighten the background until 4.5 : 1 |

---

## References for this week

- [MDN — HTML forms guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN — HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
- [web.dev — Learn Forms](https://web.dev/learn/forms/)
- [web.dev — Learn Accessibility](https://web.dev/learn/accessibility/)
- [MDN — HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Next week

Week 3 covers Flexbox, CSS Grid and responsive design, and ends with the **Mini Project 1 evaluation** in C4: a semantic HTML and CSS responsive page, deployed. The pages you build this week are what MP1 is built on.
