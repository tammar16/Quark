// Domain Model
type Task = {
  id: number
  title: string
  completed: boolean
  createdAt: Date
}

type TaskList = {
  title: string
  tasks: Task[]
}

type TaskListGroup = {
  title: string
  taskLists: TaskList[]
}

// Model
let taskListGroup: TaskListGroup = loadTasks()





document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`




  const closeButton = document.querySelector("[data-close-modal]")!
  const cancelButton = document.querySelector("[data-cancel-modal]")!
  const modal = document.querySelector("[data-modal]") as HTMLDialogElement

  const list = document.querySelector<HTMLUListElement>("#list")!
  const form = document.getElementById("new-task-form") as HTMLFormElement | null
  const input = document.querySelector<HTMLInputElement>("#new-task-title")
  updateTaskUI()
 
  closeButton.addEventListener("click", () => {
    currentTaskList().tasks = []
    updateTaskUI()
    saveTasks()
    modal.close();
    input?.focus()
  })

  cancelButton.addEventListener("click", () => { 
    modal.close()
    input?.focus()  
  })

  modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  }) 


  form?.addEventListener("submit", e => {
    e.preventDefault()
  
    if (input?.value == "" || input?.value == null) return
  
    const newTask: Task = {
      id: nextId(),
      title: input.value,
      completed: false,
      createdAt: new Date(),
    }
    currentTaskList().tasks.push(newTask)
    saveTasks()
  
    addListItem(newTask)
    input.value = ""
  })


// Add listener to "Clear" button
const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

clearItems.addEventListener('click', (): void => {  
  modal.showModal()
})

const openButton = document.querySelector("[data-open-button]")!
const saveButton = document.querySelector("[data-save-button]") as HTMLButtonElement
const saveasButton = document.querySelector("[data-saveas-button]")!

openButton.addEventListener("click", async () => { 
  let text = await getFile()
  taskListGroup = JSON.parse(text)
  saveTasks()
  updateTaskUI()
})

saveButton.addEventListener("click", () => { 
  save(JSON.stringify(taskListGroup, null, 2))
})

saveasButton.addEventListener("click", () => { 
  saveAs(JSON.stringify(taskListGroup, null, 2))
})

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
// https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
// https://developer.chrome.com/docs/capabilities/web-apis/file-system-access
// https://www.youtube.com/watch?v=8EcBJV0sOSU&t=183s
// https://stackoverflow.com/questions/71309058/property-showsavefilepicker-does-not-exist-on-type-window-typeof-globalthis

let fileHandle: FileSystemFileHandle

async function getFile() {
  // Open file picker and destructure the result the first handle
  [fileHandle] = await window.showOpenFilePicker()
  saveButton.disabled = false
  const file = await fileHandle.getFile()
  const contents = await file.text()
  return contents;
}

async function save(text: string) {

  if (fileHandle === undefined) return

  let stream = await fileHandle.createWritable();
  await stream.write(text)
  await stream.close();
}

async function saveAs(text: string) {
  fileHandle = await window.showSaveFilePicker();
  saveButton.disabled = false
  save(text);
}


  function nextId(): number {
    return currentTaskList().tasks.reduce((i, t) => Math.max(t.id, i), 0) + 1
  }
  
  function addListItem(task: Task) {
    const item = document.createElement("li")
    item.className = "item"
    
    const checkbox = document.createElement("input")
    checkbox.id = task.id.toString()
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked
      saveTasks()
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
        deleteTask(task.id)
    })

    item.append(checkbox)
    item.append(label)
    item.append(button)
    list?.append(item)
  }

  function deleteTask(taskId: number) {
    currentTaskList().tasks = currentTaskList().tasks.filter(t => t.id !== taskId)
    console.log(taskListGroup)
    saveTasks()
    updateTaskUI()
  }

  function currentTaskList(){
    return taskListGroup.taskLists[0]
  }
  
  function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(taskListGroup, null, 2))
  }
  
  function loadTasks(): TaskListGroup {
    //const taskJSON = localStorage.getItem("TASKS")
    //if (taskJSON == null)
    //{

      let taskList: TaskList = {
        title: "Task List",
        tasks: []
      }

      let tlg: TaskListGroup = {
        title: "Task List Group",
        taskLists: [taskList]
      }
      return tlg
    //} 
    //return JSON.parse(taskJSON)
  }
  
  function updateTaskUI() {
    list.innerHTML = ''
    currentTaskList().tasks.forEach(addListItem)
  }