# Class 2 — Accessibility Essentials

## Files

- `before/index.html` — **BROKEN ON PURPOSE.** Twelve accessibility problems.
- `after/index.html` — the same page fixed. Every change is marked `FIX n`.

## Do this in order

1. Open `before/index.html` with Live Server.
2. **Put your mouse down.** Press `Tab` from the top. What can you reach?
   What can you not reach?
3. Press `F12` → **Lighthouse** tab → tick only **Accessibility** →
   **Analyze page load**. Write down the score.
4. List every problem you can find. Aim for eight before you look at the answers.
5. Fix at least four of them and run Lighthouse again.
6. Only now open `after/index.html`.

## Compare the two files

In VS Code, select both `before/index.html` and `after/index.html` in the
explorer, right click, and choose **Compare Selected**.

## Remember

A Lighthouse score of 100 does not mean the page is accessible. Automatic tools
find roughly a third of real problems. The keyboard test and reading your own
`alt` text are the checks that matter.
