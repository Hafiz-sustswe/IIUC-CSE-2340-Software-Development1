# Week 6, Class 3 — Events

CSE-2340 Software Development 1 · Autumn 2026
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## Files

```
class-03-events/
├── reading-list.html    the page. HTML and CSS written for you
└── reading-list.js      the live build, step by step
```

---

## How to run

```bash
cd week-06/codes/class-03-events
```

Open `reading-list.html` with Live Server. Keep the Console open.

---

## What it does

Type a book and press **Add**, or just press **Enter**. It appears in the
list. **Remove** takes it out. The count follows on its own.

---

## What you should be able to do after this class

- Run your code when a person does something, not only at load
- Stop a form reloading the page
- Read what someone typed into an input
- Add and remove items and see the page follow

---

## The three things to remember

**1. `()` means run it now.** No `()` means hand the function over.

```js
button.addEventListener("click", handleAdd());   // WRONG
button.addEventListener("click", handleAdd);     // RIGHT
```

**2. `preventDefault` on every form submit.** Without it the page reloads,
the DOM is rebuilt from your HTML file, and everything your script added
disappears.

**3. The array is the truth. The page is a picture of it.** Change the
data, then redraw.

---

## Why `renderBooks` takes a parameter

`renderBooks(list)` could have read `books` directly. It does not, and
that is deliberate: in Class 4 you add a search box, and because render
accepts any list, filtering becomes three lines.

---

## Common problems

| Problem | Cause |
|---|---|
| It ran at load, now clicking is dead | `handleAdd()` with parentheses |
| The page flashes and the list empties | No `e.preventDefault()` |
| It adds blank items | You read `input.value` at load, not in the handler |
| The list doubles every time | No `innerHTML = ""` at the top of render |
| Deleted items come back | You removed the element, not the array item |
| `Assignment to constant variable` | `books` is `const`. `filter` returns a new array |

Full reference: [`../../study-materials/handouts/events-cheatsheet.md`](../../study-materials/handouts/events-cheatsheet.md)

---

## References

- [MDN — Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [javascript.info — Introduction to browser events](https://javascript.info/introduction-browser-events)
