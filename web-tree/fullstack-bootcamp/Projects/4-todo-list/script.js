// Your Todo List App implementation will go here!
const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const todoCounter = document.getElementById("todo-count");

const filterAll = document.querySelector('button[data-filter="all"]');
const filterActive = document.querySelector('button[data-filter="active"]');
const filterComplete = document.querySelector(
  'button[data-filter="completed"]'
);

let TodosCount = 0;

function addTodo(event) {
  event.preventDefault();
  const id = Date.now();
  const text = todoInput.value.trim();
  if (text) {
    const todoObject = {
      id: id,
      text: text,
      completed: false,
    };
    localStorage.setItem(`todo-${id}`, JSON.stringify(todoObject));
    todoInput.value = "";
    // displayTodos();
    TodosCount = TodosCount++;
    todoCounter.textContent = `${TodosCount} items remaining`;
    // createTodosList();
    if (!filterComplete.classList.contains("active")) {
      const listItem = `
                <li 
                    id='${todoObject.id}' 
                    class='todo-item'
                >
                    <input 
                        name='${todoObject.id}' 
                        type='checkbox' 
                        class='todo-checkbox'
                    >
                    <span class='todo-text'>${todoObject.text}</span>
                    <div class='todo-actions'>
                        <button class='edit-btn'>Edit</button>
                        <button class='delete-btn'>Delete</button>
                    </div>
                </li>
            `;
      todoList.appendChild(listItem);
    }
  }
}

function createTodosList() {
  const keys = Object.keys(localStorage).filter( (key) => key.includes('todo-') );
  let todos = [];
  //   TodosCount = 0;
  if (filterActive.classList.contains("active")) {
    todos = activeFilter(keys);
  } else if (filterComplete.classList.contains("active")) {
    todos = completeFilter(keys);
  } else {
    todos = allFilter(keys);
  }
  displayTodos(todos);
}

function filterSwitch(event) {
  // const keys = Object.keys(localStorage);
  // let todos = [];
  //   let todoCount = 0;
  //   TodosCount = 0;
  // console.log(event);
  //   if (event) {
  if (event.target == filterComplete) {
      // todos = completeFilter(keys);
    filterComplete.classList.add("active");
    filterActive.classList.remove("active");
    filterAll.classList.remove("active");
  } else if (event.target == filterActive) {
      // todos = activeFilter(keys);
    filterActive.classList.add("active");
    filterComplete.classList.remove("active");
    filterAll.classList.remove("active");
  } else {
      // todos = allFilter(keys);
    filterAll.classList.add("active");
    filterActive.classList.remove("active");
    filterComplete.classList.remove("active");
    //   todoCounter.textContent = `${TodosCount} items remaining`;
  }
  //   } else {
  //     [todos, TodosCount] = allFilter(keys);
  //     // todoCounter.textContent = `${TodosCount} items remaining`;
  //   }
  // console.log(todos);
  createTodosList();
}

function completeFilter(keys) {
  let todos = [];
  keys.forEach((key) => {
    const todoObject = JSON.parse(localStorage.getItem(key));
    // console.log(todoObject.completed == true);
    if (todoObject.completed == true) {
      todos.push(todoObject);
    }
  });
  TodosCount = keys.length - todos.length;
  todoCounter.textContent = `${TodosCount} items remaining`;
  return todos;
}

function activeFilter(keys) {
  let todos = [];
  keys.forEach((key) => {
    const todoObject = JSON.parse(localStorage.getItem(key));
    if (todoObject.completed == false) {
      todos.push(todoObject);
    }
  });
  TodosCount = todos.length;
  todoCounter.textContent = `${TodosCount} items remaining`;
  return todos;
}

function allFilter(keys) {
  let todos = [];
  TodosCount = 0;
  keys.forEach((key) => {
    const todoObject = JSON.parse(localStorage.getItem(key));
    todos.push(todoObject);
    // console.log(todoObject.completed == false)
    if (todoObject.completed == false) {
      TodosCount++;
      //   console.log(TodosCount);
    }
  });
  todoCounter.textContent = `${TodosCount} items remaining`;
  return todos;
}

function displayTodos(todos) {
  //   console.log(todos);
  todoList.innerHTML = "";
  let todoListItems = "";
  //   console.log(todos);
  if (todos.length > 0) {
    todos.forEach((todoObject) => {
      // console.log(todoObject);
      const checkboxChecked = todoObject.completed ? "checked" : "";
      const todoCompleted = todoObject.completed ? "completed" : "";
      const listItem = `
                <li 
                    id='${todoObject.id}' 
                    class='todo-item ${todoCompleted}'
                >
                    <input 
                        name='${todoObject.id}' 
                        type='checkbox' 
                        class='todo-checkbox' 
                        ${checkboxChecked}
                    >
                    <span class='todo-text'>${todoObject.text}</span>
                    <div class='todo-actions'>
                        <button class='edit-btn'>Edit</button>
                        <button class='delete-btn'>Delete</button>
                    </div>
                </li>
            `;
      todoListItems += listItem;
    });
    todoList.innerHTML = todoListItems;
    addEventListeners();
  }
}

function todosClickSwitch(event) {
  // console.log(event.target.classList);
  const classList = event.target.classList;
  if (classList.contains("todo-checkbox")) {
    handleCheck(event);
  } else if (classList.contains("edit-btn")) {
    editTodo(event);
  } else if (classList.contains("delete-btn")) {
    deleteTodo(event);
  }
}

function handleCheck(event) {
  const todo = event.currentTarget;
  if (event.target.checked) {
    todo.classList.add("completed");
    //   console.log(todo.id);
    let todoObject = JSON.parse(localStorage.getItem(`todo-${todo.id}`));
    todoObject.completed = true;
    localStorage.setItem(`todo-${todo.id}`, JSON.stringify(todoObject));
    if (filterActive.classList.contains("active")) {
      todo.remove();
    }
    TodosCount--;
    todoCounter.textContent = `${TodosCount} items remaining`;
  } else {
    todo.classList.remove("completed");
    let todoObject = JSON.parse(localStorage.getItem(`todo-${todo.id}`));
    todoObject.completed = false;
    localStorage.setItem(`todo-${todo.id}`, JSON.stringify(todoObject));
    if (filterComplete.classList.contains("active")) {
      todo.remove();
    }
    TodosCount++;
    todoCounter.textContent = `${TodosCount} items remaining`;
  }
}

function editTodo(event) {
  // console.log(event.target);
  let todo
  if (event.currentTarget.classList.contains('todo-text')) {
    todo = event.currentTarget.parentElement
  } else { 
    todo = event.currentTarget; 
  }
  let textBox = todo.querySelector("span");
  let text = textBox.textContent;
  let newTodo = document.createElement("input");

  newTodo.classList.add("todo-edit-input");
  newTodo.setAttribute('name', todo.id);
  // console.log(todo);
  newTodo.value = text;
  newTodo.addEventListener("blur", completeEdit);
  newTodo.addEventListener("keydown", checkKey);

  todo.querySelector(".todo-actions").remove();
  textBox.remove();

  todo.appendChild(newTodo);
  newTodo.focus();
  // console.log(buttons);
}

function checkKey(event) {
  // console.log(event.code);
  if (event.code == 'Enter') {
    completeEdit(event);
  }
}

function completeEdit(event) {
  const text = event.target.value;
  // console.log(event.target.parentElement);
  let parent = event.target.parentElement;
  let todo = JSON.parse(localStorage.getItem(parent.id));
  // console.log(todo);
  todo.text = text;
  localStorage.setItem(parent.id, JSON.stringify(todo));
  // console.log(text);
  createTodosList();
}

function deleteTodo(event) {
  const todo = event.currentTarget;
  if (!todo.classList.contains("completed")) {
    TodosCount--;
    todoCounter.textContent = `${TodosCount} items remaining`;
  }
  localStorage.removeItem(`todo-${todo.id}`);
  todo.remove();
}

function clearComplete(event) {
    let todos = Object.keys(localStorage).filter( (key) => key.includes('todo-') );
    todos.forEach( (key) => {
      console.log(localStorage.getItem(key).includes('true'))
        if (localStorage.getItem(key).includes('true')) {
            localStorage.removeItem(key);
        }
        console.log();
    });
    createTodosList();
}

// Listeners
form.addEventListener("submit", addTodo);

document
  .getElementById("clear-completed")
  .addEventListener("click", clearComplete);

document
  .querySelector(".filter-buttons")
  .addEventListener("click", filterSwitch);

function addEventListeners() {
  const allTodos = todoList.querySelectorAll("li");
  allTodos.forEach((todo) => todo.addEventListener("click", todosClickSwitch));
  const allSpans = todoList.querySelectorAll("span");
  allSpans.forEach((span) => span.addEventListener('dblclick', editTodo));
}

createTodosList();
