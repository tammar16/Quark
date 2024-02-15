import { TaskListGroup, TaskList, Task } from "./tasklistModel.ts"
import { fromEvent } from "rxjs";
import './omron-tag.ts'
// import './styleapp.css'
//import { Observable } from 'rxjs/Rx'

const template = document.createElement(`template`);
template.innerHTML = `

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
} 

html, body, div, input, ul, li {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

dialog::backdrop {
  background-color: #333A;
}

.dialogButton {
  margin: 1rem;
  padding: 1.0rem;
  border-radius: 0rem;
}

hr {
  margin: 0;
}

dialog {
  z-index: 10;
  /* margin-top: 10px; */
  background: #666;
  border: none;
  border-radius: 0.5rem;
}

.dialogwrapper {
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "message  message"
  "okay  cancel";
}

.dialogmessage {
  grid-area: message;
  align-self: center;
}

input, 
button {
  font: inherit;
  background-color: #555;
}

body {
  min-height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  /* display: flex;
  flex-direction: column; */
}

main {
  flex-grow: 1;
  margin: auto;
  width: 100%;
  /* max-width: 800px; */
  display: flex;
  flex-flow: column nowrap;
}

/* #list {
  list-style: none;
  padding: 0;
} */

section {
  border: 1px solid whitesmoke;
  border-radius: 10px;
  padding: 0.5rem;
}

.button {
  border-width: 0px;
  /*border-radius: 2px;*/
  padding: 5px;
  margin: 2px;
  /* min-width: 48px;
  min-height: 48px; */
}

.button:hover {
  cursor: pointer;
  background-color: #AAA;
}

.newItemEntry {
  position: sticky;
  top: 0;
  margin-bottom: 1rem;
}

.newItemEntry__form {
  display: flex;
  gap: 0.25rem;
  font-size: 1.5rem;
}

.newItemEntry__input {
  width: calc(100% - (0.25rem + 48px));
  flex-grow: 1;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  padding: 0.5em;
}

.newItemEntry__button {
  background-color: transparent;
  color: whitesmoke;
  border: 3px dashed whitesmoke;
  padding: 0.75em;
}

.newItemEntry__button:hover,
.newItemEntry__button:focus {
  color: limegreen;
}

.listContainer {
  font-size: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

.listTitle {

  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
/*
  display: flex;
  justify-content: left;
  align-items: center;*/
}

.listTitle__button {
  /* background-color: transparent; */
  color: whitesmoke;
  /* padding: 0.25em; */
}


.listItems {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  list-style-type: none;
}


.item {
  display: flex;
  align-items: center;
  padding-top: 0.25em;
  gap: 1em;
}

.item > input[type="checkbox"] {
  text-align: center;
  min-width: 2.5rem;
  min-height: 2.5rem;
  cursor: pointer;
}

.item > input[type="checkbox"]:checked + label {
  text-decoration: line-through;
}

.item > label {
  flex-grow: 1;
  word-break: break-all;
}

.item > button:hover, 
.item > button:focus {
  color: red;
}

/*.listTitle__button:hover, 
.listTitle__button:focus {
  color: red;
}*/

@media (min-width: 768px) {
  section {
      padding: 1rem;
  }
  .newItemEntry__form {
      gap: 0.5rem;
  }
}
</style>



<main>
<!-- <omron-tag></omron-tag>*/ -->
<dialog data-modal>
  <div class="dialogwrapper">
    <div class="dialogmessage">Delete all the todo items?</div>
    <button data-close-modal class="dialogButton">OK</button>
    <button data-cancel-modal class="dialogButton">Cancel</button>
    </div>
</dialog>
<section class="newItemEntry">
    <form class="newItemEntry__form" id="new-task-form">
        <input class="newItemEntry__input" type="text" id="new-task-title">
        <button class="button newItemEntry__button"  type="submit">Add</button>
    </form>
</section>
<section class="listContainer">
    <header class="listTitle">
        <button id="clearItemsButton" class="button listTitle__button" title="Clear the list" aria-label="Remove all items from the list">Clear All</button>
        <button data-open-button class="button">Open</button>
        <button data-save-button class="button" disabled>Save</button>
        <button data-saveas-button class="button">SaveAs</button>
      </header>
      <hr />
    <ul id="list"></ul>
</section>
</main>
`;

class TodoListComponent extends HTMLElement {

  // Model
  taskListGroup: TaskListGroup = this.loadTasks()

  closeButton
  cancelButton
  modal
  list
  form
  input
  fileHandle: FileSystemFileHandle | null = null
  openButton
  saveButton
  saveasButton
  clearItems

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

    this.closeButton = this.shadowRoot?.querySelector("[data-close-modal]")!
    this.cancelButton = this.shadowRoot?.querySelector("[data-cancel-modal]")!
    this.modal = this.shadowRoot?.querySelector("[data-modal]") as HTMLDialogElement
    this.list = this.shadowRoot?.querySelector<HTMLUListElement>("#list")!
    this.form = this.shadowRoot?.getElementById("new-task-form") as HTMLFormElement | null
    this.input = this.shadowRoot?.querySelector<HTMLInputElement>("#new-task-title")
    this.openButton = this.shadowRoot?.querySelector("[data-open-button]")!
    this.saveButton = this.shadowRoot?.querySelector("[data-save-button]") as HTMLButtonElement
    this.saveasButton = this.shadowRoot?.querySelector("[data-saveas-button]")!
    this.clearItems = this.shadowRoot?.getElementById("clearItemsButton") as HTMLButtonElement

    this.updateTaskUI()



    this.closeButton.addEventListener("click", () => {
      this.currentTaskList().tasks = []
      this.updateTaskUI()
      this.saveTasks()
      this.modal.close();
      this.input?.focus()
    })


    // References for RxJS
    // https://blog.logrocket.com/using-observables-transform-data-typescript/
    // https://rxjs.dev/api/index/function/fromEvent

    const clicksfromCancelButton = fromEvent(this.cancelButton, 'click')

    clicksfromCancelButton.subscribe(() => {
      console.log('Clicked!')
      this.modal.close()
      this.input?.focus()
    });

    // cancelButton.addEventListener("click", () => { 
    //   modal.close()
    //   input?.focus()  
    // })

    this.modal.addEventListener("click", e => {
      const dialogDimensions = this.modal.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        this.modal.close()
      }
    })


    this.form?.addEventListener("submit", e => {
      e.preventDefault()

      if (this.input?.value == "" || this.input?.value == null) return

      const newTask: Task = {
        id: this.nextId(),
        title: this.input.value,
        completed: false,
        createdAt: new Date(),
      }
      this.currentTaskList().tasks.push(newTask)
      this.saveTasks()

      this.addListItem(newTask)
      this.input.value = ""
    })

    this.clearItems.addEventListener('click', (): void => {
      this.modal.showModal()
    })

    this.openButton.addEventListener("click", async () => {
      let text = await this.getFile()
      this.taskListGroup = JSON.parse(text)
      this.saveTasks()
      this.updateTaskUI()
    })

    this.saveButton.addEventListener("click", () => {
      this.save(JSON.stringify(this.taskListGroup, null, 2))
    })

    this.saveasButton.addEventListener("click", () => {
      this.saveAs(JSON.stringify(this.taskListGroup, null, 2))
    })

  }

  // // References
  // // ----------
  // // npm install --save-dev @types/wicg-file-system-access
  // // https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
  // // https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
  // // https://developer.chrome.com/docs/capabilities/web-apis/file-system-access
  // // https://www.youtube.com/watch?v=8EcBJV0sOSU&t=183s
  // // https://stackoverflow.com/questions/71309058/property-showsavefilepicker-does-not-exist-on-type-window-typeof-globalthis


  async getFile() {
    // Open file picker and destructure the result the first handle
    [this.fileHandle] = await window.showOpenFilePicker()
    this.saveButton.disabled = false
    const file = await this.fileHandle.getFile()
    const contents = await file.text()
    return contents;
  }

  async save(text: string) {

    if (this.fileHandle === undefined) return

    let stream = await this.fileHandle?.createWritable();
    await stream?.write(text)
    await stream?.close();
  }

  async saveAs(text: string) {
    console.log("saveas")
    this.fileHandle = await window.showSaveFilePicker();
    this.saveButton.disabled = false
    this.save(text);
  }

  nextId(): number {
    return this.currentTaskList().tasks.reduce((i, t) => Math.max(t.id, i), 0) + 1
  }

  addListItem(task: Task) {
    const item = document.createElement("li")
    item.className = "item"

    const checkbox = document.createElement("input")
    checkbox.id = task.id.toString()
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked
      this.saveTasks()
    })
    checkbox.type = "checkbox"
    checkbox.checked = task.completed


    const label = document.createElement("label")
    label.textContent = task.title
    label.htmlFor = task.id.toString()

    const button = document.createElement("button") as HTMLButtonElement
    button.className = 'button'
    button.textContent = "\u00D7" // '\uD83D\uDDD1'

    button.addEventListener('click', () => {
      this.deleteTask(task.id)
    })

    item.append(checkbox)
    item.append(label)
    item.append(button)
    this.list.append(item)
  }

  deleteTask(taskId: number) {
    this.currentTaskList().tasks = this.currentTaskList().tasks.filter(t => t.id !== taskId)
    console.log(this.taskListGroup)
    this.saveTasks()
    this.updateTaskUI()
  }

  currentTaskList() {
    return this.taskListGroup.taskLists[0]
  }

  saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(this.taskListGroup, null, 2))
  }

  loadTasks(): TaskListGroup {
    const taskJSON = localStorage.getItem("TASKS")
    if (taskJSON == null) {

      let taskList: TaskList = {
        title: "Task List",
        tasks: []
      }

      let tlg: TaskListGroup = {
        title: "Task List Group",
        taskLists: [taskList]
      }
      return tlg
    }
    return JSON.parse(taskJSON)
  }

  updateTaskUI() {
    this.list.innerHTML = ''
    this.currentTaskList().tasks.forEach((t) => this.addListItem(t))
  }

}

customElements.define(`todo-list`, TodoListComponent);



// -- References --
// -- CSS Grid --
// https://stackoverflow.com/questions/43129360/css-grid-wrapping
// https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/#:~:text=auto-fill%20FILLS%20the%20row%20with%20as%20many%20columns,still%20occupy%20a%20designated%20space%20in%20the%20row.
// 
// -- Web Components --
// https://www.youtube.com/watch?v=kHCpmBXZJ1g
// 