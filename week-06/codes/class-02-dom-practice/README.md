# Week 6, Class 2 — DOM practice

CSE-2340 Software Development 1 · Autumn 2026
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## Files

```
class-02-dom-practice/
├── exercises.md    four exercises plus the home task
├── starter/        BROKEN ON PURPOSE — six bugs
└── solution/       all six fixed, each marked FIX n
```

---

## How to run

Open `starter/index.html` with Live Server. Keep the **Console** and the
**Elements** tab both open.

The page should show three cards, two of them amber, and the line
`3 books, 2 published before 2019`.

---

## The six planted bugs

**Three name themselves in the Console — but never all at once.** You fix
one, reload, and a different error appears. The page stays blank until all
three are gone. That is normal, not a sign you broke something.

| # | What you will see | Named? |
|---|---|---|
| 1 | `parameter 1 is not of type 'Node'` | Console |
| 2 | `Cannot read properties of null (reading 'appendChild')` | Console |
| 3 | `Cannot read properties of null (reading 'dataset')` | Console |
| 4 | The author line is empty | Silent |
| 5 | Titles show their tags as text | Silent |
| 6 | Only one card turns amber | Silent |

Fix them **one at a time and reload between each**.

---

## Bug 3 is the one worth understanding

Its error points at a line reading `dataset`. The actual defect is about
twenty lines earlier, in a different part of the file, and it produces no
error of its own.

**Where it hurts is not where it broke.**

---

## The two tools

| Tool | Tells you |
|---|---|
| Console | Where your program **stopped** |
| Elements | What the page **actually contains** |

Two questions for the Elements tab:

1. Does the element exist at all? → something was never appended
2. Does it exist but look wrong? → check its classes and its content

---

## Home task (3 marks)

1. Fix all six bugs
2. Add two more books and confirm the count updates itself
3. Write `renderBooks(list)` that clears `#library` and rebuilds it
4. Commit and push

`renderBooks` is not busywork. In Class 3 a click will call it, so writing
it now means Class 3 is one new line instead of a rewrite.
