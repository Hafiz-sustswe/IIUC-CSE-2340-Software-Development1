# Mini Project 1 — Brief

**CSE-2340 Software Development 1** · Autumn 2026
**Due and evaluated:** Week 3, Class 4 · **Marks:** 5

Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## What to build

A **responsive multi-section web page** built with semantic HTML and CSS, pushed
to GitHub and deployed to a live URL.

The topic is yours. A personal portfolio, a page about your department, a
recipe site, a club page — anything with real content. Do not submit the class
examples with the words changed.

---

## Requirements

### Structure

- Valid HTML5 with `<html lang="en">` and a viewport meta tag
- Semantic landmarks: `header`, `nav`, `main`, `footer`, and exactly one `main`
- At least **four** content sections
- One `h1`, then `h2`/`h3` in order, never skipping a level
- A working navigation menu with jump links or multiple pages
- At least one image with meaningful `alt` text
- At least one list and one table **or** one form

### Styling

- An **external** stylesheet. No inline styles
- A `box-sizing: border-box` reset
- A centred container using `width` + `max-width` + `margin: 0 auto`
- Consistent typography set on `body`
- Both `:hover` **and** `:focus` styled on every link and button

### Layout

- **Flexbox** used somewhere meaningful (a nav bar, a card row)
- **CSS Grid** used somewhere meaningful (a gallery, a card grid)
- Mobile-first CSS: the base styles have no media query
- At most two breakpoints, using `min-width` only

### Responsiveness

Must work at **360px**, **768px** and **1280px**, with no horizontal scrollbar at
any of them.

### Accessibility

All ten points of the Week 2 checklist. In particular: labels linked to inputs,
`alt` on every image, visible focus, and text contrast of at least 4.5 : 1.

### Repository and deployment

- A public GitHub repository with a sensible name
- **At least eight meaningful commits** made as you worked — not one commit
  called `final`
- A `README.md` describing the project, its features and how to run it
- A `.gitignore`
- Deployed and reachable at a live URL (GitHub Pages, Netlify or Vercel)

---

## Submission

**Before** the Week 3 C4 class, submit two links:

1. Your GitHub repository URL
2. Your deployed URL

Late submissions are evaluated using whatever is deployed at the deadline.

---

## How it is evaluated

C4 is a dedicated evaluation class. Students are called in a fixed order.

1. Your repository and deployed URL are checked before class
2. You give a short live demonstration of your page
3. The instructor asks one or two ownership or debugging questions
4. If time allows, you make one small modification live
5. The result is recorded immediately

Expect questions such as: *why did you use Grid here and Flexbox there?*,
*what does this line do?*, *make this section stack on a phone.*

---

## Marking rubric (5 marks)

| Criterion | Weight | What is checked |
|---|---|---|
| Core functionality | 40% | The page works, all required sections present, deployed and reachable |
| Technical implementation | 25% | Semantic HTML, Flexbox and Grid used appropriately, mobile-first CSS |
| Responsiveness / usability | 15% | Correct behaviour at 360px, 768px and 1280px; accessibility checklist passed |
| Code organisation | 10% | Sensible structure, naming and readability; clean commit history |
| Individual demonstration | 10% | You can explain, modify or debug your own work |

---

## Using AI tools

You may use AI tools openly. There is no penalty.

But the evaluation is a **live demonstration plus a viva**. If you cannot explain
what a line of your code does, or cannot make a small change on request, the
marks go with the explanation and not with the code. Use AI to learn faster, not
to submit something you do not understand.

---

## Common reasons students lose marks

| Problem | Avoid it by |
|---|---|
| One commit called "final" | Commit as you work, at least eight times |
| Repository submitted but not deployed | Deploy early, not the night before |
| Horizontal scrollbar at 360px | Test in device mode before you submit |
| `outline: none` in the CSS | Restyle the focus ring, never delete it |
| Images with no `alt` | Run the ten-point checklist before submitting |
| Cannot explain their own code | Write it yourself, or read it until you can |

---

## Where to start

Exercise 4 of Week 3 Class 2 is deliberately close to this brief. If you
completed it, most of the structure is already done — change the content to your
own topic, add two more sections, check the accessibility list, and deploy.
