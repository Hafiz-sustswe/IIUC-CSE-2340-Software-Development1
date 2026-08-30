# Setting up this repository on GitHub

One-time instructions for the instructor. Students do not need this file.

---

## 1. Create the repository on GitHub

1. Go to <https://github.com/new>
2. **Repository name:** `SD1-CSE-2340`
3. **Description:** `Course materials for CSE-2340 Software Development 1, IIUC — Autumn 2026`
4. **Visibility:** Public (so students can browse without an account)
5. **Do NOT** tick "Add a README", "Add .gitignore" or "Choose a licence" —
   all three already exist in this folder, and ticking them creates a commit on
   GitHub that your computer does not have, which makes the first push fail.
6. Click **Create repository**

---

## 2. Push this folder

Open a terminal in the `SD1-CSE-2340` folder and run:

```bash
git init
git add .
git commit -m "Add course structure and Week 1-2 materials"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/SD1-CSE-2340.git
git push -u origin main
```

When Git asks for a password, paste a **personal access token**, not your
GitHub account password. (GitHub → Settings → Developer settings → Personal
access tokens → Tokens (classic) → Generate new token, tick `repo`.)

---

## 3. Publishing each new week

```bash
# scaffold the folder
./scripts/new-week.sh 03 "Flexbox, Grid and Responsive Design"

# add class folders as needed
mkdir -p week-03/codes/class-01-flexbox

# drop in the slides, code and handouts, fill in week-03/README.md,
# then add a row for week 03 to the table in README.md

git add week-03 README.md
git commit -m "Add week 03 materials"
git push
```

Publish each week **after** you teach it, or the day before. Students who read
ahead are fine; students who see empty folders get confused.

---

## 4. Optional: publish the sample pages with GitHub Pages

This gives every HTML file in the repository a live URL, which is useful for
showing a page on a phone or in class without cloning anything.

1. Repository → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)` → **Save**
4. Wait about a minute. Your pages will be at:

```
https://YOUR-USERNAME.github.io/SD1-CSE-2340/week-01/codes/class-03-semantic-html/
https://YOUR-USERNAME.github.io/SD1-CSE-2340/week-02/codes/class-02-accessibility/before/
```

Note that the deliberately broken accessibility page will also be live. That is
fine — it is a teaching artefact and the file says so at the top — but be aware
it is public.

---

## 5. Keep the instructor notes out

`_instructor/` holds the teaching notes, which contain answer keys — including
the full list of the twelve planted bugs in the Week 2 accessibility exercise.
It is already listed in `.gitignore`, so it will never be pushed.

Before your first push, confirm:

```bash
git status --short | grep _instructor    # should print nothing
```

See [`_instructor/README.md`](_instructor/README.md) for how to version those
notes in a separate **private** repository.

---

## 6. Housekeeping habits

- **Never commit a token, key or `.env` file.** The `.gitignore` covers the
  common cases, but check `git status` before committing anything new.
- **Keep drafts out.** Anything in `_drafts/`, `_private/` or named `*-WIP.*`
  is ignored automatically.
- **Slide decks are binary.** Git cannot merge them, so avoid editing the same
  `.pptx` from two machines without pushing in between. If the decks grow past
  roughly 50 MB in total, consider Git LFS.
- **Close PowerPoint before committing.** An open file leaves a `~$name.pptx`
  lock file; `.gitignore` already excludes these.
- **One commit per meaningful change.** Your commit history is visible to
  students, and it is the example they will copy.

---

## 7. Optional: pin the repository

On your GitHub profile, click **Customize your pins** and select this
repository. Students find it faster, and it doubles as evidence of teaching
work for job or PhD applications.
