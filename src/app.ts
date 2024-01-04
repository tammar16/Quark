type Task = {
    id: number
    title: string
    completed: boolean
    createdAt: Date
  }

  const closeButton = document.querySelector("[data-close-modal]")!
  const cancelButton = document.querySelector("[data-cancel-modal]")!
  const modal = document.querySelector("[data-modal]") as HTMLDialogElement


  
  const list = document.querySelector<HTMLUListElement>("#list")!
  const form = document.getElementById("new-task-form") as HTMLFormElement | null
  const input = document.querySelector<HTMLInputElement>("#new-task-title")
  let tasks: Task[] = loadTasks()
  updateTaskUI()
 
  closeButton.addEventListener("click", () => {
    tasks = []
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
    tasks.push(newTask)
    saveTasks()
  
    addListItem(newTask)
    input.value = ""
  })


// Add listener to "Clear" button
const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

clearItems.addEventListener('click', (): void => {

  getFile()
  
  modal.showModal()
})

// https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
// https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await (window as any).showOpenFilePicker();
  const file = await fileHandle.getFile();
  console.log(file)
  return file;
}


  function nextId(): number {
    return tasks.reduce((i, t) => Math.max(t.id, i), 0) + 1
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
    tasks = tasks.filter(t => t.id !== taskId)
    saveTasks()
    updateTaskUI()
  }
  
  function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
  }
  
  function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS")
    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
  }
  
  function updateTaskUI() {
    list.innerHTML = ''
    tasks.forEach(addListItem)
  }