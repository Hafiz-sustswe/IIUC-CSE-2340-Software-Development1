/* ============================================================
   CSE-2340 — Week 6, Class 2 — DEBUG DRILL
   BROKEN ON PURPOSE. Six bugs.

   Only TWO are named by the Console.
   Four are silent: the page just looks wrong.

   Expected result:
     three cards, two of them amber,
     and "3 books, 2 published before 2019"

   Rule: fix ONE bug, reload, look again.
   ============================================================ */

const books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
  { title: "You Don't Know JS",   author: "Kyle Simpson",     year: 2020 },
  { title: "Refactoring UI",      author: "Adam Wathan",      year: 2018 }
];


// --- find the container ------------------------------------

const library = document.querySelector("library");


// --- build one card per book -------------------------------

for (const book of books) {

  const article = document.createElement("article");
  const title   = document.createElement("h3");
  const author  = document.createElement("p");

  article.class = "book";
  article.dataset.year = book.year;

  title.textContent = `<em>${book.title}</em>`;

  article.appendChild(title);
  article.appendChild(book.author);

  library.appendChild(article);
}


// --- mark the books published before 2019 ------------------

const pre2019 = document.querySelector(".book");
if (Number(pre2019.dataset.year) < 2019) {
  pre2019.classList.add("old");
}


// --- the count ---------------------------------------------

const oldCount = books.filter(b => b.year < 2019).length;

document.querySelector("#book-count").textContent =
  `${books.length} books, ${oldCount} published before 2019`;
