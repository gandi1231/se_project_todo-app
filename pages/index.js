import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoList = document.querySelector(".todos__list");
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);

const openModal = (modal) => {
  modal.classList.add("popup_visible");

  const handleEscKeyPress = (event) => {
    if (event.key === "Escape") {
      closeModal(modal);
      document.removeEventListener("keydown", handleEscKeyPress);
    }
  };

  document.addEventListener("keydown", handleEscKeyPress);
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todoItem = new Todo(data, "#todo-template");
  return todoItem.getView();
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value.trim();
  const dateInput = event.target.date.value;
  const date = dateInput ? new Date(dateInput) : new Date();

  const todoData = {
    id: uuidv4(),
    name,
    completed: false,
    date,
  };

  const todoElement = generateTodo(todoData);
  todoList.append(todoElement);
  closeModal(addTodoPopup);
  newTodoValidator.resetValidation();
});

initialTodos.forEach((item) => {
  const todoElement = generateTodo(item);
  todoList.append(todoElement);
});
