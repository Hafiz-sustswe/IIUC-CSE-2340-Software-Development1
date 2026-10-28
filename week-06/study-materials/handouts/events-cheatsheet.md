# Events — Cheat Sheet

**CSE-2340 Software Development 1** · Week 6, Classes 3 and 4
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## The idea

Your script runs top to bottom, once, and then stops. Nothing is running
any more.

You leave functions behind. When a person clicks or types, **the browser
calls them for you**. You never call them yourself.

A function you hand to someone else to call is a **callback**. You already
wrote them: `map`, `filter` and `find` all take one.

---

## addEventListener

```js
button.addEventListener("click", handleAdd);
//     ^target        ^type     ^the function to call
```

Three ways to write the handler, all identical in effect:

```js
button.addEventListener("click", handleAdd);              // named
button.addEventListener("click", function (e) { ... });   // inline
button.addEventListener("click", (e) => { ... });         // arrow
```

### The parentheses trap

```js
button.addEventListener("click", handleAdd());   // WRONG
button.addEventListener("click", handleAdd);     // RIGHT
```

`handleAdd()` **runs the function immediately**, as the page loads, and
hands the browser whatever it returned — usually `undefined`. No listener
is attached, so clicking does nothing, forever.

> `()` means run it now.
> No `()` means here is the function, you run it.
> You are passing a recipe, not a cooked meal.

**How you recognise it:** something happens once at load, and then
clicking is dead.

---

## The event object

The browser passes it in. You never create it.

```js
button.addEventListener("click", (e) => {
  e.type;            // "click"
  e.target;          // what was actually clicked
  e.currentTarget;   // what the listener is attached to
  e.preventDefault();
});
```

### target vs currentTarget

Listener on a card, person clicks the title inside it:

- `e.target` is the **title**
- `e.currentTarget` is the **card**

You almost always want `currentTarget`.

**Symptom when you get this wrong:** it works when you click the edge of
something and does nothing when you click the words.

---

## The events worth learning

| Type | Usually on | Fires when |
|---|---|---|
| **`click`** | button, anything | A person clicked it |
| **`submit`** | **form** | The form is being sent. Needs `preventDefault` |
| **`input`** | input, textarea | On every keystroke |
| `change` | select, checkbox | When the value is settled |
| `keydown` | input, document | A key went down. `e.key` says which |
| `mouseover` | anything | The pointer entered it |

The first three cover almost everything in this course.

**`"input"`, not `"oninput"`.** `onclick` and `oninput` are HTML attribute
names, not event names. `addEventListener` accepts any string happily and
then waits for an event that never fires — silently.

---

## preventDefault

**A form's default is to send itself and reload the page.**

A reload rebuilds the DOM from your HTML file, so everything your script
built disappears. It looks exactly as though your code did nothing.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();        // without this, the page reloads
  // ...
});
```

Other defaults: a link navigates away, a checkbox ticks itself, a
right-click opens a menu.

### Listen on the form, not the button

`submit` on the form also catches the **Enter key**. `click` on the button
misses it.

---

## Reading what someone typed

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();     // read it HERE
  const year  = Number(yearInput.value);     // .value is ALWAYS a string

  if (title === "") return;                  // guard, then stop

  books.push({ id: Date.now(), title, year });
  renderBooks(books);
  form.reset();                              // clears every field
});
```

**Read values inside the handler, every time it runs.** Read them at the
top of the file and you capture the empty boxes as they were at load, and
you add blank items forever.

`.value` is always a string, even from `type="number"`. This is the third
time this course has bitten: `8 + "15"` in Week 5, `dataset.year` on
Monday, and now this. It is one pattern, not three facts.

---

## The shape of every interactive app

```
   something happens  →  change the DATA  →  redraw from the DATA
   (a click, a keystroke)   books.push(...)      renderBooks(books)
```

> **The array is the truth. The page is a picture of it.**

Never edit the page and the data separately, or they will disagree.

### The tempting shortcut that fails

```js
row.remove();        // the card disappears... and comes back
```

You removed the picture, not the thing. The array still has it, so the
next render draws it again.

```js
books = books.filter(b => b.id !== id);   // change the data
renderBooks(books);                       // redraw
```

`books` must be `let`, because `filter` returns a **new** array.

### How you spot it

When the page and the count disagree, **the count is usually right**. It
reads the data. Go looking for the drawing code.

---

## Listeners on elements you created

A listener needs an element that exists. Buttons you create inside
`renderBooks` did not exist when the page loaded, so a `querySelectorAll`
at the top of the file finds nothing — silently.

### Option A — attach as you create (simpler)

```js
const btn = document.createElement("button");
btn.addEventListener("click", () => removeBook(book.id));
```

### Option B — event delegation (better)

```js
shelf.addEventListener("click", (e) => {
  const btn = e.target.closest(".remove-btn");
  if (!btn) return;                 // they clicked something else

  const id = Number(btn.dataset.id);
  books = books.filter(b => b.id !== id);
  renderBooks(books);
});
```

One listener on the parent. It keeps working for buttons that do not exist
yet, and there is nothing to clean up when you redraw.

`closest` walks up from whatever was clicked until it finds a match, and
returns `null` if there is none — so the guard clause is required.

**This is the Mini Project 3 pattern.**

---

## Always clear before you draw

```js
function renderBooks(list) {
  shelf.innerHTML = "";        // or every render doubles the list
  // ...
}
```

Three books, add one, draw four more: seven rows. Add again: twelve.

---

## A filter is a view, not an edit

```js
renderBooks(books.filter(...));   // RIGHT — draws a subset
books = books.filter(...);        // WRONG in a search — deletes forever
```

This is why `renderBooks` takes a **list** as a parameter instead of
reading `books` directly. It can draw any list you give it.

---

## Symptom reference

| What you see | What it is |
|---|---|
| It ran once at load, now clicking is dead | `handleAdd()` with parentheses |
| The page flashes and the list empties | No `e.preventDefault()` in the submit handler |
| It adds blank items | You read `input.value` at load, not in the handler |
| The list doubles every time | No `innerHTML = ""` at the top of render |
| Deleted items come back | You removed the element, not the array item |
| The search box does nothing | `"oninput"` instead of `"input"` |
| Searching deleted my data | `books = books.filter(...)` in a search handler |
| Works on the edge, not on the words | `e.target` is inner. Use `currentTarget` or `closest` |
| New buttons do not respond | Listener attached before they existed. Delegate |
| `Assignment to constant variable` | `books` is `const`. `filter` returns a new array |

---

## The three things to remember

1. **`()` means run it now.** No `()` means hand it over.
2. **`preventDefault` on every form submit**, or the page reloads and
   your list is gone.
3. **The array is the truth. The page is a picture of it.** Change the
   data, then redraw.

---

## References

- [MDN — Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN — EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN — Event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)
- [MDN — Element.closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [javascript.info — Introduction to browser events](https://javascript.info/introduction-browser-events)
- [javascript.info — Event delegation](https://javascript.info/event-delegation)
