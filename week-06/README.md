# Week 6 — The DOM and Events

**CSE-2340 Software Development 1** · Autumn 2026
Instructor: Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## This week in one line

Your pages stop being documents and start being programs.

---

## Classes

| Class | Type | Topic | Status |
|---|---|---|---|
| C1 | Class | DOM and query selectors; DOM content, attributes, classList, createElement and appendChild | Published |
| C2 | Practice | Manipulate DOM content, attributes, classes and dynamically created elements | Published |
| C3 | Class | Events, addEventListener, preventDefault; practical event handling | Published |
| C4 | Practice | Live build and debug a small interactive DOM application | Published |

Two decks, one per day. **C1+C2 deck:** slides 2–16 are C1, 17–23 are C2.
**C3+C4 deck:** slides 2–16 are C3, 17–23 are C4.

**CLO alignment:** C1 → CLO1 (PO1), CLO3 (PO5) · C2 → CLO2 (PO3), CLO3 (PO5)
· C3 → CLO1 (PO1), CLO3 (PO5) · C4 → CLO2 (PO3), CLO3 (PO5)

---

## Why this week matters

Two assessments rest directly on it:

- **Mid-term practical, Week 7 C3–C4** — 100 minutes, 20 marks, and it
  requires at least one meaningful JavaScript interaction
- **Mini Project 3, Week 8 C4** — 7 marks, a DOM manipulation application
  or a debugging task

This week plus C3 is the whole foundation for both.

---

## What is in this folder

```
week-06/
├── codes/
│   ├── class-01-dom-basics/
│   │   ├── board.html         almost empty on purpose
│   │   └── board.js           the live build: create, fill, append
│   ├── class-02-dom-practice/
│   │   ├── exercises.md       four exercises plus the home task
│   │   ├── starter/           BROKEN ON PURPOSE — six bugs
│   │   └── solution/          all six fixed, each marked FIX n
│   ├── class-03-events/
│   │   ├── reading-list.html  the page, HTML and CSS written for you
│   │   └── reading-list.js    the live build: a working little app
│   └── class-04-interactive-practice/
│       ├── exercises.md       four exercises plus the home task
│       ├── starter/           BROKEN ON PURPOSE — six more bugs
│       └── solution/          all six fixed, each marked FIX n
└── study-materials/
    ├── slides/                      C1+C2 deck and C3+C4 deck
    └── handouts/
        ├── dom-cheatsheet.md        C1 and C2 in one page
        └── events-cheatsheet.md     C3 and C4 in one page
```

---

## How to run the code

```bash
cd week-06/codes/class-01-dom-basics
```

Open `board.html` with Live Server, press **F12**, and keep **both** the
Console and the **Elements** tab within reach. The Elements tab is the new
tool this week.

---

## Nothing is clickable until C3

C1 and C2 ban `addEventListener` on purpose. Every script there runs once,
when the page loads. The point is to make building and changing elements
automatic *first*, so that when events arrive the only new thing is the
listener.

That ban lifts in C3.

---

## What you should be able to do after C1 and C2

- Explain the difference between your HTML file and the DOM
- Find any element on a page with a CSS selector
- Say what `querySelector` returns when nothing matches, and what happens next
- Read and change text with `textContent`, and know when `innerHTML` is right
- Set attributes, use `.value`, and attach your own data with `dataset`
- Add, remove and toggle classes with `classList`
- Create elements in JavaScript and append them, including nested ones
- Turn an array of objects into a rendered page
- Debug a page that is wrong but has an empty Console

---

## The three rules from this week

**1. create → fill → append.** Miss the third and nothing happens, and
nothing tells you.

**2. Singular name, singular result.** `querySelector` gives one element,
`querySelectorAll` gives a list you must loop.

**3. The stylesheet decides how it looks, JavaScript decides who gets the
class.**

---

## The debugging shift

Last week the Console named almost every bug you had. This week most bugs
are **silent** — the page just looks wrong and nothing is logged.

You now need two tools.

| Tool | Tells you |
|---|---|
| Console | Where your program **stopped** |
| Elements | What the page **actually contains** |

Two questions for the Elements tab:

1. **Does the element exist at all?** → something was never appended
2. **Does it exist but look wrong?** → check its classes and its content

### Where it hurts is not where it broke

An element being unexpectedly `null` is usually caused by something that
failed silently much earlier. Work backwards from the element, not
forwards from the error line. Bug 3 of the C2 drill is built to teach
exactly this.

---

## Assignment (5 marks)

**Part 1 — in class, last 4 minutes of C2 (2 marks)**
Show your library built from the books array, one article inspected in the
Elements tab, and say the three steps out loud.

**Part 2 — home task, before C3 (3 marks)**
Fix all six planted bugs. Add two more books and confirm the count updates
itself. Write `renderBooks(list)` that clears `#library` and rebuilds it.
Commit and push.

| Criterion | Marks |
|---|---|
| Library renders from the array, nothing hardcoded | 1.5 |
| Classes and `dataset` correct | 1.0 |
| All six bugs fixed | 1.5 |
| `renderBooks` works and the page is pushed | 1.0 |

**`renderBooks` is not busywork.** In Class 3 a click will call it, so
writing it now means Class 3 is one new line for you instead of a rewrite.

---

## The six planted bugs

In `codes/class-02-dom-practice/starter/`. The page should show three
cards, two of them amber, and `3 books, 2 published before 2019`.

| # | What you will see | Named? |
|---|---|---|
| 1 | `parameter 1 is not of type 'Node'` | Console |
| 2 | `Cannot read properties of null (reading 'appendChild')` | Console |
| 3 | `Cannot read properties of null (reading 'dataset')` | Console |
| 4 | The author line is empty | Silent |
| 5 | Titles show their tags as text | Silent |
| 6 | Only one card turns amber | Silent |

**Three errors appear, never all at once.** You fix one, reload, and a
different one shows up. That is the design, not a sign you broke
something. Fix them one at a time and reload between each.

---

## What you should be able to do after C3 and C4

- Run your code when a person does something, not only at page load
- Explain why a form reloads the page, and stop it with `preventDefault`
- Read what someone typed, at the moment they typed it
- Add and remove items so that the data and the page never disagree
- Filter a list on screen without destroying the data behind it
- Handle clicks for elements that did not exist when the page loaded
- Find a bug that produces no error and only appears after a sequence of actions

---

## The three rules from C3 and C4

**4. `()` means run it now.** No `()` means hand the function over.

```js
button.addEventListener("click", handleAdd());   // WRONG
button.addEventListener("click", handleAdd);     // RIGHT
```

**5. `preventDefault` on every form submit**, or the page reloads, the DOM
is rebuilt from your HTML file, and everything your script added is gone.

**6. The array is the truth. The page is a picture of it.** Change the
data, then redraw. Never edit the two separately.

---

## The shape of every interactive app

```
   something happens  →  change the DATA  →  redraw from the DATA
   (a click, a keystroke)   books.push(...)      renderBooks(books)
```

That loop, made larger, is the entire rest of this course — React
included.

---

## The second set of six planted bugs

In `codes/class-04-interactive-practice/starter/`. **Only one produces a
Console error.** For the other five the app runs happily and behaves
wrongly.

You cannot find these by reloading and staring. **Drive the app** — load,
add, add again, remove, add once more, search, clear the search — after
every single fix.

| # | What you will see | Named? |
|---|---|---|
| 1 | An error at load, and Add does nothing | Console |
| 2 | The list explodes: 3 rows, then 7, then 12 | Silent |
| 3 | Added books have no title | Silent |
| 4 | Removed books come back | Silent |
| 5 | The search box does nothing at all | Silent |
| 6 | Searching destroys your books for good | Silent |

### The moment worth stopping on

While bug 2 is alive, the count says `4 books on the list` and the page
shows **seven** rows. The count is not broken — it reads the array, and
the array was right the whole time. Only the picture was wrong.

### How the three bug sets differ

| Where | What the week taught |
|---|---|
| Week 5 | The Console names almost every bug |
| Week 6 C2 | Most bugs are silent. The Elements tab is the tool |
| Week 6 C4 | The bug is invisible until you perform a **sequence** |

---

## Assignment for C3–C4 (5 marks)

**Part 1 — in class, last 4 minutes of C4 (2 marks)**
Add a book with the Enter key and remove it. Show the filter narrowing the
list without losing data. Say why the array is the truth.

**Part 2 — home task, before Week 7 C1 (3 marks)**
Fix all six bugs. Convert Remove to event delegation. Add an Edit button
that puts a book back into the form. Commit and push.

| Criterion | Marks |
|---|---|
| Add, remove and count all work from the data | 1.5 |
| Filter narrows without destroying the array | 1.0 |
| All six bugs fixed | 1.5 |
| Delegation working and pushed | 1.0 |

---

## Common problems this week

| Problem | Fix |
|---|---|
| `Cannot read properties of null` | `querySelector` matched nothing. Check the `#` and the spelling |
| `parameter 1 is not of type 'Node'` | You passed `appendChild` a string. It wants the element |
| Nothing appears, no error | Created but never appended |
| Only the first one changed | `querySelector` gives one. You needed `querySelectorAll` and a loop |
| Nothing changed at all | You assigned to a NodeList instead of looping over it |
| Tags showing as text | `textContent` where you wanted `innerHTML` |
| The class never applied | `el.class = ...` is silent. Use `classList.add` |
| `dataset.year` compares oddly | Everything in `dataset` is a string. Use `Number()` |
| It worked, then the reload undid it | Correct. The DOM is memory, not your file |
| It ran at load, now clicking is dead | `handleAdd()` with parentheses |
| The page flashes and the list empties | No `e.preventDefault()` in the submit handler |
| It adds blank items | You read `input.value` at load, not inside the handler |
| The list doubles every time | No `innerHTML = ""` at the top of render |
| Deleted items come back | You removed the element, not the array item |
| The search box does nothing | `"oninput"` instead of `"input"` |
| Searching deleted my data | `books = books.filter(...)` in a search handler |
| `Assignment to constant variable` | `books` is `const`. `filter` returns a new array |

Full references:
[`dom-cheatsheet.md`](study-materials/handouts/dom-cheatsheet.md) ·
[`events-cheatsheet.md`](study-materials/handouts/events-cheatsheet.md)

---

## References for this week

- [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN — Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN — Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [javascript.info — Searching: getElement, querySelector](https://javascript.info/searching-elements-dom)
- [javascript.info — Modifying the document](https://javascript.info/modifying-document)
- [MDN — Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN — Element.closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [javascript.info — Introduction to browser events](https://javascript.info/introduction-browser-events)
- [javascript.info — Event delegation](https://javascript.info/event-delegation)

---

## Next week

**Week 7 C1–C2:** array methods for UI work — `map`, `filter`, `forEach`
and `find` — supervised DOM build and debug, and Mini Project 3
preparation.

**Week 7 C3–C4: the mid-term practical examination.** 100 minutes,
20 marks, individual. It needs semantic HTML, responsive CSS and at least
one meaningful JavaScript interaction. The reading-list app from C3 and C4
is the closest rehearsal you will get — treat the home task that way.

**Week 8 C4:** Mini Project 3, 7 marks, a DOM application.
