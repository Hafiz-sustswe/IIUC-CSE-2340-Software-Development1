/* ============================================================
   CSE-2340 Software Development 1 — Week 6, Class 1
   The DOM: selectors, content, attributes, classList,
   createElement and appendChild

   Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

   Build this with the class, step by step.
   Keep the Console AND the Elements tab open.
   ============================================================ */


/* The same data shape as Week 5 Class 3: an array of objects. */
const students = [
  { name: "Rahim",  id: "C241001", marks: 78 },
  { name: "Karim",  id: "C241002", marks: 92 },
  { name: "Nusrat", id: "C241003", marks: 65 },
  { name: "Tasnim", id: "C241004", marks: 88 }
];


/* ------------------------------------------------------------
   STEP 1 — FIND THE CONTAINER
   ------------------------------------------------------------
   querySelector takes a CSS SELECTOR. The same selectors you
   wrote in Week 3:

     "#board"    an id        (the # is required)
     ".card"     a class
     "h1"        a tag
     "main h1"   any CSS selector at all

   If nothing matches, it returns null. No error, no warning.
   The error arrives on the NEXT line, when you try to use null.
   ------------------------------------------------------------ */

const board = document.querySelector("#board");

// CHECKPOINT: this must log a <div>, not null.
// If it logs null, the selector is wrong. Check the # and the spelling.
console.log("Container:", board);


/* ------------------------------------------------------------
   STEP 2, 3 and 4 — CREATE, FILL, APPEND
   ------------------------------------------------------------
   Say the three steps out loud every time:

     1. create   document.createElement("div")
     2. fill     textContent, classList, dataset
     3. append   parent.appendChild(child)

   Miss step 3 and the element exists only in memory.
   Nothing appears on the page, and nothing tells you why.
   ------------------------------------------------------------ */

for (const s of students) {

  // 1. CREATE — it exists now, but it is nowhere
  const card = document.createElement("div");
  const name = document.createElement("h2");
  const line = document.createElement("p");

  // 2. FILL
  card.classList.add("card");          // the stylesheet decides how .card looks
  name.textContent = s.name;           // textContent: plain text, always safe
  line.textContent = `${s.marks} marks`;

  // dataset puts your own data on the element.
  // In the HTML this becomes data-id="C241001".
  // It is how you remember which object a card came from.
  card.dataset.id = s.id;

  // Decide the look from the data, never by hand
  if (s.marks >= 80) {
    card.classList.add("top");
  }

  // 3. APPEND — note the two levels.
  //    The h2 and p go INTO the card.
  //    The card goes INTO the board.
  card.appendChild(name);
  card.appendChild(line);
  board.appendChild(card);
}


/* ------------------------------------------------------------
   THE SUMMARY LINE
   ------------------------------------------------------------
   Nothing here is typed by hand. Add a fifth student to the
   array above and every number below updates by itself.
   That is the difference between a page and a document.
   ------------------------------------------------------------ */

const toppers = students.filter(s => s.marks >= 80);
const total   = students.reduce((sum, s) => sum + s.marks, 0);
const average = total / students.length;

document.querySelector("#summary").textContent =
  `${students.length} students · ${toppers.length} toppers · average ${average.toFixed(2)}`;
// 4 students · 2 toppers · average 80.75


/* ------------------------------------------------------------
   READING BACK WHAT YOU BUILT
   ------------------------------------------------------------
   querySelector  → the FIRST match, one element
   querySelectorAll → ALL matches, as a NodeList

   A NodeList has length, indexes and forEach.
   It does NOT have textContent. Assigning to it does nothing
   at all, silently. That is the most time-wasting bug of the week.
   ------------------------------------------------------------ */

const allCards = document.querySelectorAll(".card");
console.log("Cards on the page:", allCards.length);          // 4
console.log("First card's id:", allCards[0].dataset.id);     // C241001
console.log("Is the second a topper?", allCards[1].classList.contains("top"));  // true

// This line does NOTHING. Uncomment it and see for yourself.
// allCards.textContent = "changed";


/* ------------------------------------------------------------
   NOW OPEN THE ELEMENTS TAB
   ------------------------------------------------------------
   F12 → Elements. Find <div id="board">.

   Every card inside it was built by this file. None of it is
   in board.html. Reload the page and watch it all get rebuilt
   from scratch.

   The HTML file is the instruction.
   The DOM is what the browser built from it.
   JavaScript edits what was built.
   ------------------------------------------------------------ */
