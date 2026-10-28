/* ============================================================
   CSE-2340 — Week 6, Class 4 — DEBUG DRILL (SOLUTION)

   All six bugs fixed, numbered in the order you meet them
   when you fix one at a time and re-drive the app.
   ============================================================ */

let books = [
  { id: 1, title: "Eloquent JavaScript", author: "Haverbeke", year: 2018 },
  { id: 2, title: "You Don't Know JS",   author: "Simpson",   year: 2020 },
  { id: 3, title: "Refactoring UI",      author: "Wathan",    year: 2018 }
];

const form        = document.querySelector("#book-form");
const titleInput  = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput   = document.querySelector("#year");
const searchInput = document.querySelector("#search");
const shelf       = document.querySelector("#shelf");
const count       = document.querySelector("#count");

/*
   FIX 3  (silent — every added book had no title)

   Two lines used to sit HERE, at the top of the file:

       const title  = titleInput.value.trim();
       const author = authorInput.value.trim();

   They run once, as the page loads, when both boxes are empty.
   So `title` was "" forever, no matter what anyone typed.

   A handler runs LATER. Anything it needs must be read LATER.
   They have moved inside handleAdd.
*/


// --- draw the list -----------------------------------------

function renderBooks(list) {

  /*
     FIX 2  (silent — the list exploded on every add)

     Without this line, render APPENDS to what is already on
     the page instead of replacing it. Three books, then add
     one and draw four more: seven rows. Add again: twelve.

     Notice what the count said while this was broken: 4, then
     5, then 6 — correct every time. The count is read from the
     data, and the data was never wrong. Only the page was.

     Clear first. Then draw.
  */
  shelf.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "Nothing to show.";
    empty.classList.add("empty");
    shelf.appendChild(empty);
  }

  for (const book of list) {

    const row     = document.createElement("li");
    const text    = document.createElement("div");
    const heading = document.createElement("div");
    const meta    = document.createElement("div");
    const btn     = document.createElement("button");

    heading.textContent = book.title;
    heading.classList.add("title");

    meta.textContent = `${book.author || "Unknown"} · ${book.year || "n.d."}`;
    meta.classList.add("meta");

    btn.textContent = "Remove";
    btn.classList.add("remove-btn");
    btn.dataset.id = book.id;

    /*
       FIX 4  (silent — removed books came back)

       It used to be row.remove(). That deletes the PICTURE.
       The book was still in the array, so the next time
       anything triggered a render it was drawn again.

       You could see the lie immediately: the row vanished but
       the count did not change, because the count reads the
       data and the data still had the book.

       THE ARRAY IS THE TRUTH. THE PAGE IS A PICTURE OF IT.
       Change the data, then redraw.
    */
    btn.addEventListener("click", () => {
      books = books.filter(b => b.id !== book.id);   // 1. change the data
      renderBooks(books);                            // 2. redraw
    });

    text.appendChild(heading);
    text.appendChild(meta);
    row.appendChild(text);
    row.appendChild(btn);
    shelf.appendChild(row);
  }

  count.textContent =
    list.length === 1 ? "1 book on the list" : `${list.length} books on the list`;
}


// --- adding ------------------------------------------------

function handleAdd(e) {

  e.preventDefault();

  // FIX 3 continued — read the values HERE, every time it runs
  const title  = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year   = Number(yearInput.value);

  if (title === "") return;

  books.push({ id: Date.now(), title, author, year });

  renderBooks(books);
  form.reset();
  titleInput.focus();
}


// --- first draw --------------------------------------------

renderBooks(books);


// --- searching ---------------------------------------------

/*
   FIX 5  (silent — the search box did nothing at all)

   The event type is "input". "oninput" is the HTML attribute
   name, not the event name. addEventListener accepts any
   string without complaint and then waits for an event that
   will never fire.
*/
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();

  /*
     FIX 6  (silent, and the most destructive of the six)

     This used to be:

         books = books.filter(...);
         renderBooks(books);

     which permanently deleted every book that did not match.
     Clear the box and they were gone for good.

     A filter is a VIEW, not an edit. Draw a subset and leave
     the data alone. This is exactly why renderBooks takes a
     list as a parameter instead of reading `books` itself.
  */
  renderBooks(books.filter(b => b.title.toLowerCase().includes(term)));
});


// --- wire up the form --------------------------------------

/*
   FIX 1  (the only one the Console names, at load)
   "Cannot read properties of undefined (reading 'preventDefault')"

   This used to be handleAdd() with parentheses.

   () RAN the function immediately, as the page loaded, with no
   event to receive — hence the error on e.preventDefault().
   It then handed addEventListener whatever handleAdd returned,
   which was undefined, so no listener was ever attached.

   The symptom: something happens once at load, and clicking is
   dead forever after. Submitting then did the browser's default
   instead — a full page reload.

   () means run it now.
   No () means here is the function, you run it.
*/
form.addEventListener("submit", handleAdd);
