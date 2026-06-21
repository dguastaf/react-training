# React Training

A beginner-friendly React app for learning core concepts hands-on. This project is a sandbox for experimenting with components, props, state, and TypeScript—not a production app.

## What you'll practice

- **Components** — reusable UI pieces like `Button`, `Alert`, and `ListGroup`
- **Props** — passing data and callbacks from parent to child
- **State** — tracking selected list items with `useState`
- **TypeScript** — typing component props and event handlers
- **Styling** — Bootstrap classes for quick, readable layouts

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Bootstrap 5](https://getbootstrap.com/)

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
src/
├── App.tsx              # Root component
├── ListGroup.tsx        # List with selection and props
├── components/
│   ├── Alert.tsx        # Simple alert banner
│   └── Button.tsx       # Reusable button
└── main.tsx             # App entry point
```

## Available scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Type-check and build for prod  |
| `npm run preview` | Preview the production build   |
| `npm run lint`    | Run ESLint                     |

## Learning goals

Use this repo to get comfortable with:

1. Breaking UI into small, focused components
2. Lifting state and passing handlers via props
3. Reading and writing TypeScript in React files
4. Iterating quickly with Vite's hot module replacement

Feel free to break things, refactor, and add new components—that's what this project is for.
