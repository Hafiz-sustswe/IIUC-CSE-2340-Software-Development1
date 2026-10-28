# Week 6, Class 1 — The DOM

CSE-2340 Software Development 1 · Autumn 2026
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## Files

```
class-01-dom-basics/
├── board.html    almost empty on purpose. One container, no cards
└── board.js      the live build: create, fill, append
```

---

## How to run

```bash
cd week-06/codes/class-01-dom-basics
```

Open `board.html` with Live Server. Press **F12** and keep **both** the
Console and the **Elements** tab within reach. The Elements tab is the new
tool this week.

Look at `board.html` first. Every card you see on the page was built by
`board.js`.

---

## What you should be able to do after this class

- Explain the difference between your HTML file and the DOM
- Find any element with a CSS selector
- Read and change text, attributes and classes
- Create elements in JavaScript and add them to the page
- Turn an array of objects into a rendered page

---

## The three things to remember

**1. create → fill → append.** Miss the third and nothing happens, and
nothing tells you.

**2. Singular name, singular result.** `querySelector` gives one element,
`querySelectorAll` gives a list you must loop.

**3. The stylesheet decides how it looks, JavaScript decides who gets the
class.**

---

## Not today

Nothing on this page responds to a click. Events are Class 3. Today the
script runs once, when the page loads.

---

## Common problems

| Problem | Cause |
|---|---|
| `Cannot read properties of null` | `querySelector` matched nothing. Check the `#` and the spelling |
| `parameter 1 is not of type 'Node'` | You passed `appendChild` a string instead of an element |
| Nothing appears, no error | Created but never appended |
| Only the first one changed | You needed `querySelectorAll` and a loop |
| Tags showing as text | `textContent` where you wanted `innerHTML` |
| The class never applied | `el.class = ...` is silent. Use `classList.add` |

Full reference: [`../../study-materials/handouts/dom-cheatsheet.md`](../../study-materials/handouts/dom-cheatsheet.md)

---

## References

- [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [javascript.info — Modifying the document](https://javascript.info/modifying-document)
