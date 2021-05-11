const task = document.getElementById("task");
const list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", () => {
  const todos = getTodosFromLocalStorage();

  todos.forEach((todo) => {
    addTodoToUI(todo);
  });
});

list.addEventListener("click", (e) => {
  if (e.target.id === "checked") {
    e.target.classList.toggle("checked");
  }

  if (e.target.className === "close") {
    e.target.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.textContent.slice(0, -1));
  }
});

function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const span = document.createElement("span");

  // listItem.innerHTML = `<button type="button" class="remove">x</button>`;
  span.className = "close";
  span.textContent = "x";

  listItem.setAttribute("id", "checked");
  const todo = document.createTextNode(newTodo);

  listItem.appendChild(todo);
  listItem.appendChild(span);
  list.appendChild(listItem);
}

function deleteTodoFromStorage(deleteTodo) {
  const todos = getTodosFromLocalStorage();

  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      console.log(todo);
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function newElement() {
  const newTodo = task.value.trim();

  if (newTodo !== "") {
    addTodoToUI(newTodo);
    addTodoToLocalStorage(newTodo);
    $(".success").toast("show");
  } else {
    $(".error").toast("show");
  }

  task.value = "";
}

function addTodoToLocalStorage(newTodo) {
  const todos = getTodosFromLocalStorage();

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromLocalStorage() {
  let todos;

  if (!localStorage.getItem("todos")) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
