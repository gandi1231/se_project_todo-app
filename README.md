# Simple Todo App

A small task manager for creating, completing, and deleting to-do items in a clean and responsive interface.

## Functionality

The app lets users open a form to add a new to-do item with a title and optional date. Each task is displayed in a list with a checkbox, due date, and delete button. Existing items are rendered on load, and new items receive a unique UUID-based ID that is used for the checkbox and label attributes.

## Technology

This project uses vanilla JavaScript, ES6 classes, HTML, CSS, and BEM-style block structure. The Todo and FormValidator classes are separated into individual modules and imported into the main page script. The app also uses the uuid package for unique item IDs.

## Deployment

This project is deployed on GitHub Pages:

- https://your-github-username.github.io/simple-todo-app
