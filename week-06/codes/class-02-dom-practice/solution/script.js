/* ============================================================
   CSE-2340 — Week 6, Class 2 — DEBUG DRILL (SOLUTION)
   All six bugs fixed. Each fix is marked FIX n.
   ============================================================ */

const books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
  { title: "You Don't Know JS",   author: "Kyle Simpson",     year: 2020 },
  { title: "Refactoring UI",      author: "Adam Wathan",      year: 2018 }
];


// --- find the container ------------------------------------

/*
   FIX 1  (Console names it)
   "Cannot read properties of null (reading 'appendChild')"

   querySelector takes a CSS selector, so an id needs the #.
   Without it the browser looked for a <library> tag, found
   nothing, and returned null. No error at this line — the
   error arrived later, where null was used.

   When you see "of null", the bug is the selector ABOVE the
   line the Console names.
*/
const library = document.querySelector("#library");


// --- build one card per book -------------------------------

for (const book of books) {

  const article = document.createElement("article");
  const title   = document.createElement("h3");
  const author  = document.createElement("p");

  /*
     FIX 2  (silent)
     article.class = "book" does nothing useful. "class" is a
     reserved word in JavaScript, so this just stored a property
     nobody reads, and the card never got its styling.
     Use classList.add, or className.
  */
  article.classList.add("book");
  article.dataset.year = book.year;

  /*
     FIX 3  (silent)
     textContent treats everything as plain text, so the <em>
     tags appeared literally on the page.
     The title is just words, so drop the tags and keep
     textContent. Never reach for innerHTML to fix this.
  */
  title.textContent = book.title;

  /*
     FIX 4  (silent)
     The <p> was created but never filled, so even once it is
     appended it would render empty.
  */
  author.textContent = book.author;

  /*
     FIX 5  (Console names it)
     "Failed to execute 'appendChild' on 'Node':
      parameter 1 is not of type 'Node'"

     appendChild wants an ELEMENT, not a string. The code passed
     book.author, which is text. Pass the <p> you created.
  */
  article.appendChild(title);
  article.appendChild(author);

  library.appendChild(article);
}


// --- mark the books published before 2019 ------------------

/*
   FIX 6  (silent)
   querySelector returns only the FIRST match, so only one card
   was ever checked and only one turned amber.

   Singular name, singular result.
   Plural name, plural result — and a loop.
*/
const allBooks = document.querySelectorAll(".book");

for (const el of allBooks) {
  if (Number(el.dataset.year) < 2019) {
    el.classList.add("old");
  }
}


// --- the count ---------------------------------------------

const oldCount = books.filter(b => b.year < 2019).length;

document.querySelector("#book-count").textContent =
  `${books.length} books, ${oldCount} published before 2019`;
// 3 books, 2 published before 2019
