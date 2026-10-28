/* ============================================================
   CSE-2340 Software Development 1 — Week 6, Class 3
   Events: addEventListener, the event object, preventDefault

   Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

   Build this with the class, step by step.
   ============================================================ */


/* ------------------------------------------------------------
   THE DATA

   `let`, not `const`.
   Removing a book uses filter, which returns a NEW array, so
   this name has to be reassignable. Declare it const and you
   get "Assignment to constant variable" — the same error as
   Week 5.
   ------------------------------------------------------------ */

let books = [
  { id: 1, title: "Eloquent JavaScript", author: "Haverbeke", year: 2018 },
  { id: 2, title: "You Don't Know JS",   author: "Simpson",   year: 2020 },
  { id: 3, title: "Refactoring UI",      author: "Wathan",    year: 2018 }
];


/* ------------------------------------------------------------
   THE ELEMENTS

   Found once, at load. These exist in the HTML, so this is safe.
   The Remove buttons do NOT exist yet, so they cannot be found
   here. That is why their listeners are attached inside render.
   ------------------------------------------------------------ */

const form       = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const authorInput= document.querySelector("#author");
const yearInput  = document.querySelector("#year");
const shelf      = document.querySelector("#shelf");
const count      = document.querySelector("#count");


/* ------------------------------------------------------------
   STEP 1 — THE RENDER FUNCTION

   It takes a LIST as a parameter instead of reading `books`
   directly. That looks like extra work today. In Class 4 it is
   what makes the search filter three lines long.

   Rule: clear first, then draw. Forget the clear and every
   render doubles what is on the page.
   ------------------------------------------------------------ */

function renderBooks(list) {

  shelf.innerHTML = "";               // CLEAR. Always first.

  if (list.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "No books yet. Add one above.";
    empty.classList.add("empty");
    shelf.appendChild(empty);
  }

  for (const book of list) {

    // create
    const row   = document.createElement("li");
    const text  = document.createElement("div");
    const title = document.createElement("div");
    const meta  = document.createElement("div");
    const btn   = document.createElement("button");

    // fill
    title.textContent = book.title;
    title.classList.add("title");

    meta.textContent = `${book.author || "Unknown"} · ${book.year || "n.d."}`;
    meta.classList.add("meta");

    btn.textContent = "Remove";
    btn.classList.add("remove-btn");
    btn.dataset.id = book.id;

    /*
       The listener is attached HERE, as the button is created.
       A listener needs an element to attach to, and this button
       did not exist when the page loaded.

       Class 4 replaces this with one listener on the shelf
       (event delegation). Both are correct. This one is simpler.
    */
    btn.addEventListener("click", () => {
      removeBook(book.id);
    });

    // append — note the two levels
    text.appendChild(title);
    text.appendChild(meta);
    row.appendChild(text);
    row.appendChild(btn);
    shelf.appendChild(row);
  }

  // The count is never typed by hand. It is read from the list.
  count.textContent =
    list.length === 1 ? "1 book on the list" : `${list.length} books on the list`;
}


/* ------------------------------------------------------------
   STEP 2 — ADDING

   The event is "submit" on the FORM, not "click" on the button.
   Listening on the form also catches the Enter key, for free.

   e.preventDefault() is what stops the browser sending the form
   and reloading the page. A reload rebuilds the DOM from the
   HTML file, so everything your script added disappears — and
   it looks exactly as though your code did nothing.
   ------------------------------------------------------------ */

form.addEventListener("submit", (e) => {

  e.preventDefault();                 // without this, the page reloads

  /*
     Read the values INSIDE the handler.
     Read them at the top of the file instead and you capture
     the empty boxes as they were at load, forever.
  */
  const title  = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year   = Number(yearInput.value);    // .value is ALWAYS a string

  if (title === "") return;           // guard the empty case, then stop

  // 1. change the data
  books.push({
    id: Date.now(),                   // unique enough for today
    title,
    author,
    year
  });

  // 2. redraw from the data
  renderBooks(books);

  form.reset();                       // clears every field in one call
  titleInput.focus();
});


/* ------------------------------------------------------------
   STEP 3 — REMOVING

   Change the array, then redraw.

   The tempting shortcut is row.remove(). The card disappears,
   so it looks finished — but the book is still in `books`, and
   it reappears the next time anything triggers a render.

   THE ARRAY IS THE TRUTH. THE PAGE IS A PICTURE OF IT.
   ------------------------------------------------------------ */

function removeBook(id) {
  books = books.filter(b => b.id !== id);   // 1. change the data
  renderBooks(books);                       // 2. redraw
}


/* ------------------------------------------------------------
   DRAW ONCE AT LOAD

   Without this line the page is empty until someone adds a book.
   ------------------------------------------------------------ */

renderBooks(books);


/* ------------------------------------------------------------
   CLASS 4 STARTS HERE

   1. Refuse an empty title and say so on the page
   2. Add a search box that filters as you type:
        renderBooks(books.filter(...))
      Do not touch the books array itself
   3. Replace the per-button listener with ONE listener on #shelf
   ------------------------------------------------------------ */
