# Daymark — Git Practice Lab

Daymark is a small, calm task tracker built with plain HTML, CSS, and JavaScript. This repository has a second purpose: it gives you a real project to practise Git and GitHub with. You can make useful changes, work on branches, review pull requests, and learn how Git records a project over time.

## Why this project exists

Learning Git is easier when there is something real to change. Daymark is deliberately small enough to understand, but has enough room to grow. Use it to practise the everyday workflow used on software teams while building a useful browser app.

The project is also a portfolio example of a complete, dependency-free front-end app: it has a responsive interface, accessible controls, persistent browser storage, documentation, and a clear contribution workflow.

## What Daymark does

- Add tasks and remove tasks you no longer need
- Mark tasks complete and clear completed tasks
- Save your list in browser `localStorage`, so it remains after a refresh
- Adapt its layout for smaller screens and respect reduced-motion preferences
- Show an empty state and a live count of completed tasks

Your tasks stay in the browser and device where you added them. Daymark does not send them to a server or sync them across devices.

## Run it locally

No installation, build step, or dependencies are needed.

1. Clone the repository:

   ```bash
   git clone https://github.com/KingSila/git-practice-lab.git
   cd git-practice-lab
   ```

2. Open `index.html` in a modern browser.

The typeface is loaded from Google Fonts when online. System font fallbacks are used if it cannot be reached.

## Use this repo to practise Git

Start with a small issue, make a branch, and submit a pull request—even if you are working alone.

```bash
git switch -c feature/task-filters
# Make and save your changes
git add .
git commit -m "feat: add task filters"
git push -u origin feature/task-filters
```

Then open a pull request on GitHub, review the changes, and merge it. Try the roadmap below to practise more workflows:

- [ ] Add filters for all, active, and completed tasks
- [ ] Add the ability to edit a task
- [ ] Add optional due dates
- [ ] Add JSON import and export
- [ ] Improve keyboard navigation and screen reader announcements
- [ ] Create two branches that edit the same line and resolve the merge conflict
- [ ] Practise `git stash`, `git revert`, and `git rebase` on a feature branch
- [ ] Tag a polished version as `v1.0.0`

For branch and commit conventions, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Project structure

```text
├── index.html       # Page structure
├── styles.css       # Layout and visual styles
├── app.js           # Task behavior and browser storage
├── CONTRIBUTING.md  # Contribution workflow
└── LICENSE          # MIT License
```

## Built with

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage`

## License

Daymark is available under the MIT License. See [LICENSE](LICENSE) for the full text.
