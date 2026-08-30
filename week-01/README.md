# Week 1 — Web Foundations, Development Environment and Semantic HTML

**CSE-2340 Software Development 1** · Autumn 2026
Instructor: Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC

---

## This week in one line

From "what actually happens when I type a URL" to a complete semantic web page, saved with Git and pushed to GitHub.

---

## Classes

| Class | Topic | Type |
|---|---|---|
| C1 | Web architecture: client/server, DNS, HTTP request/response, status codes, browser rendering, hosting | Concept |
| C2 | Development environment: VS Code, Node/npm, Live Server, first HTML file | Practice |
| C3 | Semantic HTML: headings, text, links, images, forms, document structure | Concept + live build |
| C4 | Git basics: init, add, commit, push, repository, .gitignore | Practice |

**CLO alignment:** C3 → CLO3 (PO5) and CLO1 (PO1) · C4 → CLO1 (PO1) and CLO5 (PO10)

---

## What is in this folder

```
week-01/
├── codes/
│   ├── class-01-web-architecture/     (no code — concept class)
│   ├── class-02-dev-environment/      (first HTML file)
│   ├── class-03-semantic-html/
│   │   ├── index.html                 complete personal profile page
│   │   ├── snippets.html              one demo per element, with deliberate bugs
│   │   └── images/                    put your own profile.jpg here
│   └── class-04-git-basics/
│       ├── README-template.md         template for your own project README
│       └── gitignore-example.txt      rename to .gitignore in your project
└── study-materials/
    ├── slides/                        C3 and C4 decks (.pptx and .pdf)
    └── handouts/
        └── git-cheatsheet.md          every Git command you need this semester
```

---

## How to run the code

```bash
cd week-01/codes/class-03-semantic-html
```

Open the folder in VS Code, right click `index.html`, and choose **Open with Live Server**.

The page has no CSS on purpose. It will look plain. That is correct — Week 1 is about structure, and styling starts in Week 2, Class 3.

`snippets.html` contains a deliberately broken image and a deliberately broken link. They are teaching demonstrations, not mistakes.

---

## What you should be able to do after this week

- Explain what happens between typing a URL and seeing a page
- Create and run an HTML file with Live Server
- Build a valid HTML5 document with `header`, `nav`, `main`, `section` and `footer`
- Use headings in order, write useful `alt` text, and link labels to inputs
- Run `init`, `status`, `add`, `commit` and `push`
- Create a GitHub repository and push your work to it
- Write a `.gitignore`

---

## Assignments

### Class 3 — Semantic HTML (5 marks)

**Part 1 — in class, last 5 minutes (2 marks)**
Add a new `<section id="hobbies">` with an `h2` and a `<ul>` of three hobbies. Add a matching link in the nav. Show the working jump link to the instructor before you leave.

**Part 2 — home task, before Week 2 Class 1 (3 marks)**
Complete the full profile page. Add an `<aside>` with a favourite quote, and a second page `about.html` linked from the nav.

### Class 4 — Git Basics (5 marks)

**Part 1 — in class, last 5 minutes (2 marks)**
Push your profile page to a public GitHub repository named `my-profile`, with a `.gitignore` containing at least three rules. Show the live GitHub page.

**Part 2 — home task, before Week 2 Class 1 (3 marks)**
Write a `README.md` using the supplied template. Make at least three more commits with clear messages. Push everything.

**Rubric (each class, 5 marks)**

| Criterion | Marks |
|---|---|
| Valid structure and correct nesting / repository created and pushed | 1.5 |
| Semantic regions used / commits with meaningful messages | 1.5 |
| Headings, lists, image with alt, working links / working .gitignore | 1.0 |
| Form labels linked correctly / README describes the project | 1.0 |

---

## Common problems this week

| Problem | Fix |
|---|---|
| Image does not appear | Check the path letter by letter. File names are case sensitive |
| Nav link does nothing | The `id` on the section does not match the `href` |
| Page looks like one long line | A tag was never closed |
| `fatal: not a git repository` | Wrong folder, or you never ran `git init` |
| `Authentication failed` | Use a personal access token, not your GitHub password |
| Git opened a strange editor | Press `Esc`, type `:q!`, press Enter. Then use `git commit -m "message"` |

The full troubleshooting table is in [`study-materials/handouts/git-cheatsheet.md`](study-materials/handouts/git-cheatsheet.md).

---

## References for this week

- [MDN — HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [MDN — HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN — How the web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Git — Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [GitHub Docs — Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

## Next week

Week 2 extends this page with real navigation, forms and tables, then audits it for accessibility, and finally adds CSS. **Keep your Week 1 folder** — you will build directly on it.
