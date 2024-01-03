"use strict";
var list = document.querySelector("#list");
var form = document.getElementById("new-task-form");
var input = document.querySelector("#new-task-title");
var tasks = loadTasks();
updateTaskUI();
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    var newTask = {
        id: nextId(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
    tasks.push(newTask);
    saveTasks();
    addListItem(newTask);
    input.value = "";
});
// Add listener to "Clear" button
var clearItems = document.getElementById("clearItemsButton");
clearItems.addEventListener('click', function () {
    tasks = [];
    updateTaskUI();
    saveTasks();
});
function nextId() {
    return tasks.reduce(function (i, t) { return Math.max(t.id, i); }, 0) + 1;
}
function addListItem(task) {
    var item = document.createElement("li");
    item.className = "item";
    var checkbox = document.createElement("input");
    checkbox.id = task.id.toString();
    checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    var label = document.createElement("label");
    label.textContent = task.title;
    label.htmlFor = task.id.toString();
    var button = document.createElement("button");
    button.className = 'button';
    button.textContent = 'X'; // '\uD83D\uDDD1'
    button.addEventListener('click', function () {
        deleteTask(task.id);
    });
    item.append(checkbox);
    item.append(label);
    item.append(button);
    list === null || list === void 0 ? void 0 : list.append(item);
}
function deleteTask(taskId) {
    tasks = tasks.filter(function (t) { return t.id !== taskId; });
    saveTasks();
    updateTaskUI();
}
function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function loadTasks() {
    var taskJSON = localStorage.getItem("TASKS");
    if (taskJSON == null)
        return [];
    return JSON.parse(taskJSON);
}
function updateTaskUI() {
    list.innerHTML = '';
    tasks.forEach(addListItem);
}
