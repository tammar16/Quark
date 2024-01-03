type Task = {
    id: number
    title: string
    completed: boolean
    createdAt: Date
  }
  
  const list = document.querySelector<HTMLUListElement>("#list")!
  const form = document.getElementById("new-task-form") as HTMLFormElement | null
  const input = document.querySelector<HTMLInputElement>("#new-task-title")
  let tasks: Task[] = loadTasks()
  updateTaskUI()
  
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
    tasks = []
    updateTaskUI()
    saveTasks()
})

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
    button.textContent = 'X' // '\uD83D\uDDD1'

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