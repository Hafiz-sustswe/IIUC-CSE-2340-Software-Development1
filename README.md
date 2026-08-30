# CSE-2340 — Software Development 1




Course materials, live-build code and study resources for **CSE-2340 Software Development 1**, Department of Computer Science and Engineering, International Islamic University Chittagong (IIUC).

**Instructor:** Md Sadman Hafiz, Lecturer, Dept. of CSE, IIUC
**Session:** Autumn 2026
**Credit hours:** 2 · **Contact hours:** 4 laboratory classes per week

---

## What this course covers

A practical foundation in modern front-end development. Students move from web architecture and semantic HTML through CSS, responsive design, JavaScript, the DOM, asynchronous APIs, React, routing, ShadCN/ui, Firebase Authentication, Firestore, Git/GitHub workflows and deployment.

By the end of the course you should be able to design and build a responsive front-end application, consume an API, build a React single-page application with routing and state, add authentication and basic persistence, use Git and GitHub properly, and deploy the result.

---

## How to use this repository

**If you are a student:**

1. Find the current week's folder, for example `week-02/`.
2. Read that week's `README.md` first — it lists the topics, the code files and the assignment.
3. Slides and handouts are in `study-materials/`.
4. All code written in class is in `codes/`, organised by class number.
5. Do not submit your work here. Your own work goes in **your own repository**. See [Submitting your work](#submitting-your-work).

**Download just one week** (you do not need to clone everything):

Open the file on GitHub and click the download button, or clone the whole repository once and pull updates each week:

```bash
git clone https://github.com/hafiz-sustswe/
IIUC-CSE-2340-Software-Development1/SD1-CSE-2340.git
cd SD1-CSE-2340

# each week, get the newest materials:
git pull 
```

---

## Repository structure

```
SD1-CSE-2340/
├── README.md                    ← you are here
├── course-info/                 ← syllabus, lecture plan, assessment overview
├── week-01/
│   ├── README.md                ← what happened this week + assignments
│   ├── codes/
│   │   ├── class-01-web-architecture/
│   │   ├── class-02-dev-environment/
│   │   ├── class-03-semantic-html/
│   │   └── class-04-git-basics/
│   └── study-materials/
│       ├── slides/              ← .pptx and .pdf
│       └── handouts/            ← cheat sheets, checklists, templates
├── week-02/
│   └── ... same shape ...
├── templates/
│   └── week-XX/                 ← blank scaffold for a new week
├── scripts/
│   └── new-week.sh              ← creates the next week's folder
└── _instructor/                 ← local only, never pushed (see .gitignore)
```

Every week has exactly the same two folders: **`codes/`** and **`study-materials/`**. If you know where something is in Week 1, you know where it is in Week 14.

---

## Weekly contents

| Week | Focus | Status |
|---|---|---|
| [01](week-01/) | Web architecture, dev environment, semantic HTML, Git basics | Published |
| [02](week-02/) | Navigation/forms/tables, accessibility, CSS basics, box model | C1–C2 published |
| 03 | Flexbox, CSS Grid, responsive design · **MP1 evaluation** | Coming |
| 04 | Design handoff, positioning, Tailwind CSS v4 | Coming |
| 05 | Deployment, images, JavaScript fundamentals · **MP2 evaluation** | Coming |
| 06 | DOM, selectors, events, interactive build | Coming |
| 07 | Array methods · **Mid-term practical (C3–C4)** | Coming |
| 08 | Modern JavaScript, GitHub workflow · **MP3 evaluation** | Coming |
| 09 | HTTP and APIs, promises, async/await, fetch, SDLC and Agile | Coming |
| 10 | API-driven pages, localStorage · **MP4 evaluation** | Coming |
| 11 | Vite, React components, props, state, useEffect | Coming |
| 12 | Immutable state, React Router, ShadCN/ui | Coming |
| 13 | React forms, reusable components · **MP5 evaluation** | Coming |
| 14 | Firebase Auth, Firestore · **MP6 evaluation** | Coming |
| 15 | Polish, PR review, integration studio, final showcase | Coming |

Materials are published as each week is taught.

---

## Assessment at a glance

| Component | Marks |
|---|---|
| Attendance | 10 |
| Mid-term in-lab practical (Week 7, 100 minutes) | 20 |
| Six mini projects, each with a dedicated evaluation class | 40 |
| Final group project and showcase | 30 |
| **Total** | **100** |

| Project | Due | Deliverable | Marks |
|---|---|---|---|
| MP1 | Week 3, C4 | Semantic HTML + CSS + responsive layout + deployment | 5 |
| MP2 | Week 5, C4 | Own responsive design with Tailwind + deployment | 5 |
| MP3 | Week 8, C4 | DOM application or debugging task | 7 |
| MP4 | Week 10, C4 | API application + localStorage + UI states | 7 |
| MP5 | Week 13, C4 | React SPA + routing + ShadCN/ui | 8 |
| MP6 | Week 14, C4 | Firebase Auth + one Firestore collection | 8 |

Every mini project is submitted as a **GitHub repository link plus a deployed URL**, and verified by a short live demonstration.

Full details are in [`course-info/`](course-info/).

---

## The standard 50-minute class

| Time | Activity |
|---|---|
| 0–5 min | Recall: two or three questions, and today's outcome |
| 5–15 min | Concept: only what today's build needs |
| 15–30 min | Live build: the instructor codes the core pattern |
| 30–43 min | Student build: reproduce and modify independently |
| 43–48 min | Debug and review: common mistakes |
| 48–50 min | Exit check and assignment |

Every class ends with an assignment in two parts:

- **Part 1** — an in-class task, demonstrated to the instructor before you leave.
- **Part 2** — a home task, shown or submitted before the next class.

---

## Submitting your work

Your work does **not** go in this repository. For each project:

1. Create your own public repository on GitHub.
2. Commit your work with meaningful messages as you go — not all at once at the end.
3. Deploy the project (GitHub Pages, Netlify or Vercel).
4. Submit the repository URL and the deployed URL before the evaluation class.
5. Be ready to explain and modify your own code live.

Commit history is part of the evidence. A project with one commit called `final` looks the same to the marker whoever wrote it.

---

## A note on AI tools

You may use AI tools openly in this course. There is no penalty for using them.

However, project evaluation requires repository evidence and a short live demonstration where you explain, modify or debug your own work. If you cannot explain what your code does, the marks go with the explanation, not the code.

---

## Recommended learning resources

| Resource | Use |
|---|---|
| [MDN Web Docs](https://developer.mozilla.org/) | The primary reference for HTML, CSS, JavaScript and browser APIs |
| [web.dev — Learn CSS / Learn Forms](https://web.dev/learn/) | Practical CSS, responsive layout and form guidance |
| [javascript.info](https://javascript.info/) | JavaScript fundamentals |
| [Eloquent JavaScript](https://eloquentjavascript.net/) | Supplementary JavaScript reference |
| [React Documentation](https://react.dev/) | Components, state, effects |
| [Vite](https://vite.dev/) · [React Router](https://reactrouter.com/) | Build tool and routing |
| [Tailwind CSS](https://tailwindcss.com/docs) · [ShadCN/ui](https://ui.shadcn.com/) | Styling and components |
| [Firebase Documentation](https://firebase.google.com/docs) | Authentication, Firestore, hosting |
| [Pro Git, 2nd Edition](https://git-scm.com/book/en/v2) | Supplementary Git reference |

---

## For the instructor

Setup and publishing instructions are in [`SETUP.md`](SETUP.md). To scaffold the next week:

```bash
./scripts/new-week.sh 03
```

This copies `templates/week-XX/` into `week-03/` and fills in the week number. See [`templates/week-XX/README.md`](templates/week-XX/README.md) for the week README structure.

---

## Licence

Teaching materials in this repository are released under
[Creative Commons Attribution–NonCommercial–ShareAlike 4.0](LICENSE) (CC BY-NC-SA 4.0).

You may share and adapt them for non-commercial purposes with attribution. Code examples may be reused freely in your own coursework.

---

## Contact

**Md Sadman Hafiz**
Lecturer, Department of Computer Science and Engineering
International Islamic University Chittagong

Questions about the material: ask in class, or open an [issue](../../issues) on this repository.
"# IIUC-CSE-2340-Software-Development1" 
"# IIUC-CSE-2340-Software-Development1" 
