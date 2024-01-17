"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Model
let taskListGroup = loadTasks();
document.querySelector('#app').innerHTML = `
<main>
<dialog data-modal>
    <div>Delete all the todo items?</div>
    <button data-close-modal class="dialogButton">OK</button>
    <button data-cancel-modal class="dialogButton">Cancel</button>
</dialog>
<section class="newItemEntry">
    <form class="newItemEntry__form" id="new-task-form">
        <input class="newItemEntry__input" type="text" id="new-task-title">
        <button class="button newItemEntry__button"  type="submit">Add</button>
    </form>
</section>
<section class="listContainer">
    <header class="listTitle">
        <h2 id="listName">List</h2>
        <button id="clearItemsButton" class="button listTitle__button" title="Clear the list"
          aria-label="Remove all items from the list">
          Clear All
        </button>
        <button data-open-button class="button">Open</button>
        <button data-save-button class="button" disabled>Save</button>
        <button data-saveas-button class="button">SaveAs</button>
      </header>
      <hr />
    <ul id="list"></ul>
</section>
</main>
`;
const closeButton = document.querySelector("[data-close-modal]");
const cancelButton = document.querySelector("[data-cancel-modal]");
const modal = document.querySelector("[data-modal]");
const list = document.querySelector("#list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
updateTaskUI();
closeButton.addEventListener("click", () => {
    currentTaskList().tasks = [];
    updateTaskUI();
    saveTasks();
    modal.close();
    input === null || input === void 0 ? void 0 : input.focus();
});
cancelButton.addEventListener("click", () => {
    modal.close();
    input === null || input === void 0 ? void 0 : input.focus();
});
modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom) {
        modal.close();
    }
});
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const newTask = {
        id: nextId(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
    currentTaskList().tasks.push(newTask);
    saveTasks();
    addListItem(newTask);
    input.value = "";
});
// Add listener to "Clear" button
const clearItems = document.getElementById("clearItemsButton");
clearItems.addEventListener('click', () => {
    modal.showModal();
});
const openButton = document.querySelector("[data-open-button]");
const saveButton = document.querySelector("[data-save-button]");
const saveasButton = document.querySelector("[data-saveas-button]");
openButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let text = yield getFile();
    taskListGroup = JSON.parse(text);
    saveTasks();
    updateTaskUI();
}));
saveButton.addEventListener("click", () => {
    save(JSON.stringify(taskListGroup, null, 2));
});
saveasButton.addEventListener("click", () => {
    saveAs(JSON.stringify(taskListGroup, null, 2));
});
// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
// https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
// https://developer.chrome.com/docs/capabilities/web-apis/file-system-access
// https://www.youtube.com/watch?v=8EcBJV0sOSU&t=183s
// https://stackoverflow.com/questions/71309058/property-showsavefilepicker-does-not-exist-on-type-window-typeof-globalthis
let fileHandle;
function getFile() {
    return __awaiter(this, void 0, void 0, function* () {
        // Open file picker and destructure the result the first handle
        [fileHandle] = yield window.showOpenFilePicker();
        saveButton.disabled = false;
        const file = yield fileHandle.getFile();
        const contents = yield file.text();
        return contents;
    });
}
function save(text) {
    return __awaiter(this, void 0, void 0, function* () {
        if (fileHandle === undefined)
            return;
        let stream = yield fileHandle.createWritable();
        yield stream.write(text);
        yield stream.close();
    });
}
function saveAs(text) {
    return __awaiter(this, void 0, void 0, function* () {
        fileHandle = yield window.showSaveFilePicker();
        saveButton.disabled = false;
        save(text);
    });
}
function nextId() {
    return currentTaskList().tasks.reduce((i, t) => Math.max(t.id, i), 0) + 1;
}
function addListItem(task) {
    const item = document.createElement("li");
    item.className = "item";
    const checkbox = document.createElement("input");
    checkbox.id = task.id.toString();
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    const label = document.createElement("label");
    label.textContent = task.title;
    label.htmlFor = task.id.toString();
    const button = document.createElement("button");
    button.className = 'button';
    button.textContent = "\u00D7"; // '\uD83D\uDDD1'
    button.addEventListener('click', () => {
        deleteTask(task.id);
    });
    item.append(checkbox);
    item.append(label);
    item.append(button);
    list === null || list === void 0 ? void 0 : list.append(item);
}
function deleteTask(taskId) {
    currentTaskList().tasks = currentTaskList().tasks.filter(t => t.id !== taskId);
    console.log(taskListGroup);
    saveTasks();
    updateTaskUI();
}
function currentTaskList() {
    return taskListGroup.taskLists[0];
}
function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(taskListGroup, null, 2));
}
function loadTasks() {
    //const taskJSON = localStorage.getItem("TASKS")
    //if (taskJSON == null)
    //{
    let taskList = {
        title: "Task List",
        tasks: []
    };
    let tlg = {
        title: "Task List Group",
        taskLists: [taskList]
    };
    return tlg;
    //} 
    //return JSON.parse(taskJSON)
}
function updateTaskUI() {
    list.innerHTML = '';
    currentTaskList().tasks.forEach(addListItem);
}
