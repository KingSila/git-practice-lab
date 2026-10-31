# Daymark

A calm, lightweight task tracker built with vanilla HTML, CSS, and JavaScript. Add tasks, mark them complete, remove them, and keep your list between visits with browser storage.

**No build step. No dependencies. Just open the page and get started.**

## Features

- Add and delete tasks
- Mark tasks complete and clear completed items
- Persist tasks in the browser with `localStorage`
- Responsive layout, keyboard-friendly controls, and reduced-motion support
- Graceful empty state and live task progress

## Run locally

1. Clone this repository.
2. Open `index.html` in a modern browser.

The optional typeface is loaded from Google Fonts. System font fallbacks are used when the network is unavailable. Tasks stay in the current browser on the current device; they are not synced to a server.

## Project structure

```text
├── index.html       # Page structure
├── styles.css       # Layout and visual styles
├── app.js           # Task behavior and browser storage
├── CONTRIBUTING.md  # Contribution workflow
└── LICENSE          # MIT License
```

## Roadmap

- [ ] Filter tasks by all, active, and completed
- [ ] Edit an existing task
- [ ] Add due dates
- [ ] Add JSON import and export
- [ ] Add automated checks for core task behavior

## Contributing

Issues and pull requests are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md), create a focused branch, and describe the change in your pull request.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
