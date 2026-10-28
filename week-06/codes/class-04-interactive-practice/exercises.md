# Week 6, Class 4 — Exercises

**A small interactive application** · CSE-2340 Software Development 1

Bring your `reading-list.html` and `reading-list.js` from Class 3.
Exercises 1 to 3 extend them. Exercise 4 is a separate folder.

---

## Exercise 1 — Finish and polish (5–14 min)

1. Refuse an empty title, and **say so on the page** rather than failing
   silently. A short message under the form is enough.
2. Clear the form after a successful add, and put the cursor back in the
   title box.
3. Show "No books yet. Add one above." when the list is empty.
4. Make the count read `1 book on the list` and `3 books on the list`
   correctly. One line with a ternary does it.

**Checkpoint:** remove every book one by one. The empty message must
appear, and the count must say `0 books on the list`.

---

## Exercise 2 — A live filter (14–24 min)

Add a search box above the list. As the user types, show only matching
titles.

```js
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const shown = books.filter(b => b.title.toLowerCase().includes(term));
  renderBooks(shown);          // draw a SUBSET
});
```

**The rule: a filter is a view, not an edit.**

Never write `books = books.filter(...)` in a search handler. That
permanently deletes everything that does not match, and clearing the box
brings back nothing. This exact mistake is planted as bug 6 in
Exercise 4.

**Notice what just paid off.** `renderBooks(list)` takes a parameter
instead of reading `books` directly. That looked like extra typing in
Class 3. It is why this exercise is three lines.

**Checkpoint:** type, then clear the box. Every book must come back.

---

## Exercise 3 — One listener instead of many (24–34 min)

Right now every Remove button gets its own listener, created inside
`renderBooks`. That works. There is a better way.

```js
// ONE listener, on the parent, written once
shelf.addEventListener("click", (e) => {
  const btn = e.target.closest(".remove-btn");
  if (!btn) return;                 // they clicked something else

  const id = Number(btn.dataset.id);
  books = books.filter(b => b.id !== id);
  renderBooks(books);
});

// and inside render, instead of addEventListener:
btn.classList.add("remove-btn");
btn.dataset.id = b.id;
```

### Why this is better

- One listener, written once, instead of one per row
- It keeps working for buttons that **do not exist yet**
- There is nothing to clean up when you redraw

### Why `closest` is needed

`e.target` is whatever was actually clicked. If your button contains an
icon or any nested element, `e.target` may be that inner thing, not the
button. `closest` walks up the tree until it finds something matching, and
returns `null` when there is nothing — which is why the guard clause
matters.

Without `if (!btn) return;`, clicking anywhere in the shelf throws.

**This is the Mini Project 3 pattern.** Any list where items are added,
removed or edited wants it. Get comfortable with it now, not in Week 8.

---

## Exercise 4 — The debug drill (34–46 min)

Open `starter/index.html` with Live Server.

There are **six bugs** in `starter/app.js`. **Only one produces a Console
error.** For the other five the app runs perfectly happily and simply
behaves wrongly.

### You cannot find these by reloading and staring

You have to **drive the app**. Run this sequence after every single fix:

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

### The moment worth stopping on

While bug 2 is alive, the count says `4 books on the list` and the page
shows **seven** rows.

The count is not broken. The count reads the array, and the array was
right the whole time. Only the picture was wrong.

That is the week in one observation: **the array is the truth, the page is
a picture of it.** When the two disagree, trust the data and go looking
for the drawing code.

The solution is in `solution/`. Use it to check, not to copy.

---

## Home task (Assignment Part 2 — 3 marks)

Due before **Week 7, Class 1**.

1. Fix all six planted bugs
2. Convert Remove to event delegation (Exercise 3)
3. Add an **Edit** button that puts a book's values back into the form for
   changing. How you handle saving it is your decision — there is more than
   one reasonable answer
4. Commit and push to your Week 6 repository

| Criterion | Marks |
|---|---|
| Add, remove and count all work from the data | 1.5 |
| Filter narrows without destroying the array | 1.0 |
| All six bugs fixed | 1.5 |
| Delegation working and pushed | 1.0 |

**Week 7 C3 and C4 are the mid-term practical** — 100 minutes, 20 marks,
and it needs semantic HTML, responsive CSS and at least one real
interaction. This app is the closest rehearsal you will get. Treat the
home task that way.
