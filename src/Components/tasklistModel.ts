// Domain Model
export type Task = {
    id: number
    title: string
    completed: boolean
    createdAt: Date
}

export type TaskList = {
    title: string
    tasks: Task[]
}

export type TaskListGroup = {
    title: string
    taskLists: TaskList[]
}