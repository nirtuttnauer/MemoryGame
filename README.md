# MemoryGame

A small browser-based card-pair matching game built with HTML, CSS, JavaScript,
jQuery, and Bootstrap. The board contains 16 cards: two copies of eight suit
symbols. Matching cards turn green.

## Run locally

Prerequisites: Python 3 and a modern web browser. No package installation or build
step is required.

From the repository directory, start a local server:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/MainWindow.html> and click **Start Game**, or open
<http://127.0.0.1:8000/index.html> to go directly to the board. Stop the server
with `Ctrl+C`.

Internet access is required for the CDN-hosted jQuery and Bootstrap assets;
they are not included in this repository.

## Controls

- Click two different cards with the same symbol to mark a pair as matched.
- Match all eight pairs to trigger the completion alert.
- **Reset** rebuilds and shuffles the board.
- **Home** returns to the start screen.

## Repository layout

- `MainWindow.html`: start screen.
- `index.html`: game board and navigation.
- `script.js`: shuffling, click handlers, pair matching, and navigation.
- `styles.css`: card styling, responsive sizes, and Bootstrap CSS import.

## Current limitations

This is a prototype; the controls above describe the intended flow, not a
complete or tested gameplay experience:

- The start-screen name and card-count fields are not used. The board always
  contains 16 cards.
- Card symbols are visible immediately; the stylesheet does not hide unflipped
  cards.
- Clicking the same card twice can incorrectly count it as a matched pair.
- The mismatch timer reads `flippedCards` after it has been cleared, which can
  cause a JavaScript error or affect a later selection.
- Reset does not clear the tracked selections or matches, cancel pending timers,
  or remove previously registered reset handlers.

## Development checks

Check JavaScript syntax with Node.js (needed only for this check):

```sh
node --check script.js
```

There is currently no automated test suite or configured linter. Syntax checking
does not verify gameplay. For manual testing, check distinct matches,
mismatches, repeated clicks, resetting during a pending mismatch, and completing
a full board; watch the browser console for errors.
