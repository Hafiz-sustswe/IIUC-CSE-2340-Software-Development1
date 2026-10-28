# Week 6, Class 4 — Interactive app practice

CSE-2340 Software Development 1 · Autumn 2026
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## Files

```
class-04-interactive-practice/
├── exercises.md    four exercises plus the home task
├── starter/        BROKEN ON PURPOSE — six bugs
└── solution/       all six fixed, each marked FIX n
```

Exercises 1 to 3 extend your Class 3 reading list. Exercise 4 is this
folder.

---

## The six planted bugs

**Only one produces a Console error.** For the other five the app runs
perfectly happily and simply behaves wrongly.

### You cannot find these by reloading and staring

**Drive the app.** Run this sequence after every single fix:

1. Load the page — what do you see?
2. Add a book — did it appear? Is it right?
3. Add another — how many rows are there now?
4. Remove one — did it stay gone?
5. Add one more — did the removed one come back?
6. Type in the search box — did anything narrow?
7. Clear the search box — did everything come back?

| # | What you will see | Named? |
|---|---|---|
| 1 | An error at load, and Add does nothing | Console |
| 2 | The list explodes: 3 rows, then 7, then 12 | Silent |
| 3 | Added books have no title | Silent |
| 4 | Removed books come back | Silent |
| 5 | The search box does nothing at all | Silent |
| 6 | Searching destroys your books for good | Silent |

**A correct app:** three books at load, adds work and are not blank,
removes stay removed, the count follows, and the search narrows the list
without destroying anything.

---

## The moment worth stopping on

While bug 2 is alive, the count says `4 books on the list` and the page
shows **seven** rows.

The count is not broken. It reads the array, and the array was right the
whole time. Only the picture was wrong.

**The array is the truth. The page is a picture of it.** When the two
disagree, trust the data and go looking for the drawing code.

---

## A filter is a view, not an edit

```js
renderBooks(books.filter(...));   // RIGHT — draws a subset
books = books.filter(...);        // WRONG in a search — deletes forever
```

---

## Home task (3 marks)

1. Fix all six bugs
2. Convert Remove to event delegation
3. Add an **Edit** button that puts a book back into the form. How you
   handle saving is your decision — there is more than one good answer
4. Commit and push

**Week 7 C3 and C4 are the mid-term practical**, 100 minutes and 20 marks.
This app is the closest rehearsal you will get.
