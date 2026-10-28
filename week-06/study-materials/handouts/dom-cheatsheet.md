# The DOM — Cheat Sheet

**CSE-2340 Software Development 1** · Week 6, Classes 1 and 2
Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## What the DOM is

Your `index.html` is a text file on disk. The browser reads it and builds a
**live tree of objects** in memory. That tree is the DOM.

JavaScript edits the tree, and the page changes with it. Your HTML file
never changes, and a reload resets everything.

> HTML is the instruction. The DOM is what the browser built from it.
> JavaScript edits what was built.

Press **F12 → Elements** to see the DOM. That panel is not your file.

---

## Finding elements

It takes a **CSS selector** — the same ones you wrote in Week 3.

```js
document.querySelector("#list")      // id,  first match  (# required)
document.querySelector(".card")      // class, first match
document.querySelector("h1")         // tag, first match
document.querySelector("nav a")      // any CSS selector

document.querySelectorAll(".card")   // ALL matches, as a NodeList

document.getElementById("list")      // older, id only, no #
```

**No match gives you `null`.** Not an error. The error arrives on the next
line, where you try to use it.

```
Cannot read properties of null (reading 'appendChild')
```

When you see that, the bug is the **selector above**, not the line named.

### Singular and plural

| Call | Gives you |
|---|---|
| `querySelector` | one element, or `null` |
| `querySelectorAll` | a NodeList, possibly empty |

```js
const cards = document.querySelectorAll(".card");

cards.length               // 3
cards[0]                   // the first element
cards.textContent = "x"    // DOES NOTHING. Silent.

for (const c of cards) { c.textContent = "Hi"; }   // this works
cards.forEach(c => c.classList.add("done"));       // this too
```

A NodeList has `length`, indexes and `forEach`. It has **no** `map`,
`filter` or `find`. Need those: `Array.from(cards)`.

---

## Content

```js
const title = document.querySelector("#title");

title.textContent              // read
title.textContent = "New"      // replace

title.textContent = "<b>Hi</b>";   // shows:  <b>Hi</b>
title.innerHTML  = "<b>Hi</b>";    // shows:  Hi   (bold)
```

| Use | When |
|---|---|
| `textContent` | Anything that is just words. The default |
| `innerHTML` | You are genuinely building HTML, and you wrote the text |

**Never put text a user typed into `innerHTML`.** A visitor can type a tag
and run code on your page.

**Symptoms**
- Tags showing literally → `textContent` where you wanted `innerHTML`
- Layout silently breaking → `innerHTML` where you wanted `textContent`

---

## Attributes

```js
photo.setAttribute("src", "images/new.jpg");
photo.getAttribute("alt");
photo.removeAttribute("hidden");

// Shortcuts for the common ones
photo.src   = "images/new.jpg";
link.href   = "https://iiuc.ac.bd";
input.value = "Rahim";
```

### The `value` trap

| Call | Gives you |
|---|---|
| `input.getAttribute("value")` | what the HTML said |
| `input.value` | what the user typed |

You almost always want `.value`.

### Your own data: `dataset`

```html
<li data-id="C241002" data-year="2018">
```

```js
li.dataset.id      // "C241002"
li.dataset.year    // "2018"   always a string
li.dataset.id = "C241003";
```

This is how you connect a DOM element back to the data object it came
from. `data-year` becomes `dataset.year`; `data-user-id` becomes
`dataset.userId`.

---

## Classes

```js
box.classList.add("highlight");
box.classList.remove("hidden");
box.classList.toggle("open");       // on if off, off if on
box.classList.contains("open");     // true / false
box.classList.add("a", "b");        // several at once
```

**The rule:** the stylesheet decides how `.highlight` looks. JavaScript
only decides who gets it.

```js
// Avoid
box.style.backgroundColor = "yellow";

// Prefer
box.classList.add("highlight");
```

### This does nothing

```js
box.class = "card";     // silent. "class" is a reserved word
```

Use `classList.add("card")`, or `className = "card"`.

---

## Creating elements

Three steps, every time. Say them out loud.

```js
// 1. CREATE — it exists, but it is nowhere
const li = document.createElement("li");

// 2. FILL
li.textContent = "Nusrat Jahan";
li.classList.add("student");
li.dataset.id = "C241003";

// 3. APPEND — without this, nothing appears
const list = document.querySelector("#list");
list.appendChild(li);
```

**Forget step 3 and there is no error and nothing on the page.** That is
the most frustrating bug of the week.

`appendChild` wants an **element**, not a string:

```js
list.appendChild(li);        // works
list.appendChild("Hello");   // throws: parameter 1 is not of type 'Node'
```

### Nesting

```js
const article = document.createElement("article");
const h3      = document.createElement("h3");
const p       = document.createElement("p");

h3.textContent = book.title;
p.textContent  = book.author;

article.appendChild(h3);        // into the article
article.appendChild(p);         // into the article
library.appendChild(article);   // the article into the page
```

Append the `h3` to `#library` by mistake and you get a flat list that
looks almost right. Check the nesting in the Elements tab.

---

## The pattern: data in, elements out

```js
const list = document.querySelector("#student-list");

for (const s of students) {
  const li = document.createElement("li");       // create
  li.textContent = `${s.name} — ${s.marks}`;     // fill
  li.dataset.id = s.id;
  if (s.marks >= 80) li.classList.add("top");
  list.appendChild(li);                          // append
}
```

**This loop is the rest of the course.** Products, comments, search
results, API responses: different words, identical shape.

---

## innerHTML or createElement?

| Use `innerHTML` | Use `createElement` |
|---|---|
| Writing a whole block at once | The text came from a person |
| The content is yours | You need `dataset` or `classList` per item |
| You want fewer lines | You are adding to a list, not replacing it |

`list.innerHTML = ...` **replaces everything inside**, every time. Use
`+=` and you rebuild the whole list on each pass.

**Default to `createElement`.** Use `innerHTML` when you can say why.

---

## Debugging: the shift from last week

Last week the Console named almost every bug. With the DOM, most bugs are
**silent** — the page just looks wrong.

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
went wrong much earlier and said nothing. Work backwards from the element,
not forwards from the error line.

---

## Error reference

| Message or symptom | What actually happened |
|---|---|
| `Cannot read properties of null (reading '...')` | `querySelector` matched nothing. Check the `#` and the spelling |
| `parameter 1 is not of type 'Node'` | You passed `appendChild` a string instead of an element |
| Nothing appears, no error | Created but never appended |
| Only the first one changed | `querySelector` gives one. You needed `querySelectorAll` and a loop |
| Nothing changed at all | You assigned to a NodeList instead of looping |
| Tags showing as text | `textContent` where you wanted `innerHTML` |
| The class never applied | `el.class = ...` is silent. Use `classList.add` |
| It worked, then the reload undid it | Correct. The DOM is memory, not your file |

---

## The three things to remember

1. **create → fill → append.** Miss the third and nothing happens, and
   nothing tells you.
2. **Singular name, singular result.** `querySelector` gives one element,
   `querySelectorAll` gives a list you must loop.
3. **The stylesheet decides how it looks, JavaScript decides who gets the
   class.**

---

## References

- [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN — Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN — Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [javascript.info — Searching: getElement, querySelector](https://javascript.info/searching-elements-dom)
- [javascript.info — Modifying the document](https://javascript.info/modifying-document)
