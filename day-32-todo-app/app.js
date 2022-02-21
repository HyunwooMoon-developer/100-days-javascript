//localstorage

window.onload = function () {
  displayTask();
};

const input = document.querySelector('input');
const btn = document.querySelector('button');
const todoList = document.querySelector('.todo-list');
const clear = document.querySelector('.clear');
let tasks;

btn.addEventListener('click', addTask);

function getTasks() {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

function addTask() {
  if (input.value !== '') {
    addTaskToList();
    todoList.innerHTML = '';
    displayTask();
  } else {
    alert('Please enter a task');
  }
}

function addTaskToList() {
  getTasks();
  tasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = '';
}

function displayTask() {
  getTasks();

  tasks.forEach((t, index) => {
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `;

    newLi.appendChild(document.createTextNode(t));
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
  });
}

function deleteTask(index) {
  const del = confirm('You are about to delete this task!');
  if (del == true) {
    getTasks();
  }

  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoList.innerHTML = '';
  displayTask();
}

clear.addEventListener('click', clearTasks);

function clearTasks() {
  const delTask = confirm('Delete all Tasks');

  if (delTask == true) {
    localStorage.clear();
    todoList.innerHTML = '';
    displayTask();
  }
}
