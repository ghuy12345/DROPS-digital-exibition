# Where Justice Lives · Visitor Guide

Static site for the exhibition visitor guide. No build step. Host the folder as-is on GitHub Pages.

## Structure

```
index.html            page markup
css/styles.css        all styles
js/app.js             guide + captions content and the reader
images/guide/         one picture per guide entry (see filenames below)
images/photographs/   01.jpg … 09.jpg, one per numbered photograph
audio/                sounds-from-kabul.mp3
```

## Drop-in assets

Each slide shows a placeholder naming the exact file it expects. Add the file with that name and it appears automatically; nothing else needs editing.

Guide pictures (`images/guide/`): `introduction.jpg`, `six-words.jpg`, `erasure-rendered-visible.jpg`, `bearing-witness.jpg`, `in-their-own-words.jpg`, `entering-the-conversation.jpg`, `echoes-of-erasure.jpg`

Photographs (`images/photographs/`): `01.jpg` through `09.jpg`

Sound work (`audio/`): `sounds-from-kabul.mp3`. The player stays disabled until the file loads.

## GitHub Pages

Push this folder as the repository root (or set Pages to serve from the folder). All paths are relative, so it works at `user.github.io/repo/` without changes.

## Local preview

```
python3 -m http.server 8000
```
