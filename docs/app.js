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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var closeButton = document.querySelector("[data-close-modal]");
var cancelButton = document.querySelector("[data-cancel-modal]");
var modal = document.querySelector("[data-modal]");
var list = document.querySelector("#list");
var form = document.getElementById("new-task-form");
var input = document.querySelector("#new-task-title");
var tasks = loadTasks();
updateTaskUI();
closeButton.addEventListener("click", function () {
    tasks = [];
    updateTaskUI();
    saveTasks();
    modal.close();
    input === null || input === void 0 ? void 0 : input.focus();
});
cancelButton.addEventListener("click", function () {
    modal.close();
    input === null || input === void 0 ? void 0 : input.focus();
});
modal.addEventListener("click", function (e) {
    var dialogDimensions = modal.getBoundingClientRect();
    if (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom) {
        modal.close();
    }
});
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
    getFile();
    modal.showModal();
});
// https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
// https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
function getFile() {
    return __awaiter(this, void 0, void 0, function () {
        var fileHandle, file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.showOpenFilePicker()];
                case 1:
                    fileHandle = (_a.sent())[0];
                    return [4 /*yield*/, fileHandle.getFile()];
                case 2:
                    file = _a.sent();
                    console.log(file);
                    return [2 /*return*/, file];
            }
        });
    });
}
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
    button.textContent = "\u00D7"; // '\uD83D\uDDD1'
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
