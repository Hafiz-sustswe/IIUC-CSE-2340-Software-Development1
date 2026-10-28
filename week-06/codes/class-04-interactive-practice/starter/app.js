/* ============================================================
   CSE-2340 — Week 6, Class 4 — DEBUG DRILL
   BROKEN ON PURPOSE. Six bugs.

   Only ONE produces a Console error.
   For the other five the app runs — it just behaves wrongly.

   You cannot find these by reloading and staring.
   DRIVE THE APP. Run this sequence after every single fix:

     1. load the page        — what do you see?
     2. add a book           — did it appear? is it right?
     3. add another book     — how many rows are there now?
     4. remove one           — did it stay gone?
     5. add one more         — did the removed one come back?
     6. type in the search   — did anything narrow?
     7. clear the search     — did everything come back?

   What a correct app does:
     three books at load, adds work and are not blank,
     removes stay removed, the count follows, and the search
     narrows the list WITHOUT destroying anything.
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

const title  = titleInput.value.trim();
const author = authorInput.value.trim();


// --- draw the list -----------------------------------------

function renderBooks(list) {

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

    btn.addEventListener("click", () => {
      row.remove();
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

  const year = Number(yearInput.value);

  if (titleInput.value.trim() === "") return;

  books.push({
    id: Date.now(),
    title,
    author,
    year
  });

  renderBooks(books);
  form.reset();
}


// --- first draw --------------------------------------------

renderBooks(books);


// --- searching ---------------------------------------------

searchInput.addEventListener("oninput", (e) => {
  const term = e.target.value.toLowerCase();
  books = books.filter(b => b.title.toLowerCase().includes(term));
  renderBooks(books);
});


// --- wire up the form --------------------------------------

form.addEventListener("submit", handleAdd());
