# Week 6, Class 2 — Exercises

**Manipulating the DOM** · CSE-2340 Software Development 1

Keep **two** DevTools tabs within reach this week: the Console, and the
**Elements** tab. Most DOM bugs never reach the Console.

**Nothing on this page responds to a click.** Events are Class 3. Today
every script runs once, when the page loads.

---

## Exercise 1 — Extend the board (5–15 min)

Open your `board.html` and `board.js` from Class 1.

1. Make the heading show the real number of students, read from the array.
   Do **not** type the number.
2. Give every card an image. Use any placeholder path you like, but set a
   proper `alt` that describes the person, not the file.
3. Put the student id on each card with `dataset`.
4. Read one card's `dataset.id` back out and log it.

**The trap in number 1**

```js
document.querySelector("#count").textContent = "4 students";
```

This displays correctly, so it looks finished. Now add a fifth student to
the array. The page lies.

A hardcoded number is wrong even when it is right.

---

## Exercise 2 — classList drills (15–23 min)

1. Add `.top` to every student scoring 80 or more.
2. Remove it again from one of them.
3. Run `card.classList.toggle("compact")` on every card **twice**.
   Explain what happened and why.
4. Log `card.classList.contains("top")` for one card before and after you
   change it.

**Checkpoint:** watch the `class` attribute change live in the Elements
tab as each line runs. If you cannot see it change there, it did not
happen.

---

## Exercise 3 — Build it yourself (23–35 min)

**Close `board.js`.** The handout is allowed. Your old code is not.

```js
const books = [
  { title: "Eloquent JavaScript", author: "Haverbeke", year: 2018 },
  { title: "You Don't Know JS",   author: "Simpson",   year: 2020 },
  { title: "Refactoring UI",      author: "Wathan",    year: 2018 }
];
```

Build one `<article>` per book inside `#library`. Each one needs:

- an `<h3>` with the title
- a `<p>` with the author
- a `data-year` attribute
- the class `.old` when the year is before 2019

### The new difficulty: nesting

An `article` holds an `h3` and a `p`, so you append **twice**:

1. Create the `article`, the `h3` and the `p`
2. Fill all three
3. `article.appendChild(h3)` then `article.appendChild(p)`
4. Finally `library.appendChild(article)`

A common near-miss is appending the `h3` straight to `#library`. You get a
flat list that looks almost right. Check the nesting in the Elements tab.

---

## Exercise 4 — The debug drill (35–46 min)

Open `starter/index.html` with Live Server.

There are **six bugs** in `starter/script.js`. The page should show three
cards, two of them amber, and the line
`3 books, 2 published before 2019`.

**Three of the six name themselves in the Console — but never all at
once.** You fix one, reload, and a different error appears. The page stays
blank until all three are gone.

| # | What you will see | Named? |
|---|---|---|
| 1 | `parameter 1 is not of type 'Node'` | Console |
| 2 | `Cannot read properties of null (reading 'appendChild')` | Console |
| 3 | `Cannot read properties of null (reading 'dataset')` | Console |
| 4 | The author line is empty | Silent |
| 5 | Titles show their tags as text | Silent |
| 6 | Only one card turns amber | Silent |

**Rules**

1. Fix one bug at a time.
2. Reload after each fix.
3. Read the error **and look at the Elements tab** before changing
   anything.

### Bug 3 is the one worth understanding

Its error points at a line reading `dataset`. The actual defect is about
twenty lines earlier, in a completely different part of the file, and it
produces no error of its own.

**Where it hurts is not where it broke.**

When an element is unexpectedly `null`, ask the Elements tab two questions:

- Does this element exist at all? → something was never appended
- Does it exist but look wrong? → check its classes and its content

The solution is in `solution/`. Use it to check, not to copy.

---

## The lesson from Exercise 4

Last week the Console named almost every bug you had. This week half of
them say nothing at all, and one of the ones that does speak points you at
the wrong place.

The Console tells you where your program **stopped**. The Elements tab
tells you what the page **actually contains**. From now on you need both.

---

## Home task (Assignment Part 2 — 3 marks)

Due before **Week 6, Class 3**.

1. Fix all six planted bugs
2. Add two more books and confirm the count updates itself
3. Wrap the building code in a function `renderBooks(list)` that first
   clears `#library`, then rebuilds it from the list it is given
4. Commit and push to your Week 6 repository

**Why `renderBooks` matters.** In Class 3 a click will call it. Writing it
as a function now means Class 3 is one new line for you instead of a
rewrite.

| Criterion | Marks |
|---|---|
| Library renders from the array, nothing hardcoded | 1.5 |
| Classes and `dataset` correct | 1.0 |
| All six bugs fixed | 1.5 |
| `renderBooks` works and the page is pushed | 1.0 |
