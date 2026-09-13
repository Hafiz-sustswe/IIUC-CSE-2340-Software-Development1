# Class 2 — Layout Practice and Debugging

Practice class. You spend most of it in DevTools, not in slides.

## Files

```
class-02-layout-practice/
├── exercises.md      the four exercises and the debugging method
├── starter/          BROKEN ON PURPOSE — eight bugs
│   ├── index.html    one bug lives here
│   └── styles.css    the other seven live here
└── solution/         all eight fixed, each marked FIX n
    ├── index.html
    └── styles.css
```

## Start here

1. Open `starter/index.html` with Live Server.
2. Press `F12`, then `Ctrl+Shift+M` for device mode. Look at 360px first.
3. Read `exercises.md`.
4. Work through Exercise 1 before opening anything in `solution/`.

## Note on bug 8

Seven bugs are in the CSS. Exactly one is in `index.html`, and no amount of CSS
will fix it. If the page looks tiny and zoomed out on a phone-sized screen, read
the `<head>`.

## Compare starter and solution

In VS Code, select `starter/styles.css` and `solution/styles.css`, right click,
choose **Compare Selected**. Only seven things differ, and each is commented.

## The pattern to take away

Six of the eight bugs are a missing declaration on a **container**, not on an
item. When a layout does nothing at all, check the parent first.
