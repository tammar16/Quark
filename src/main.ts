import './style.css'
// import './styleapp.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import { of, Observable, fromEvent } from "rxjs"; 
import './app.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="wrapper">
  <div class="title"></div>
  <nav class="nav">
    <button data-home class="active navbutton">Home</button>
    <button data-todo class="navbutton">Todo</button>
  </nav>
  <div class='main'>
    <div data-homepage class="todo homepage">Welcome to the Quark Home Page!</div>
    <todo-list data-todolist class="todo"></todo-list>
  </div>
</div>
`

const emitter : Observable<string> = of("Sam", "Ray", "Thomas");

emitter.subscribe((value: string) => {
  console.log(`Name: ${value}`)
  // const body = document.querySelector('body')!
  
  // const div = document.createElement('div')
  // div.innerHTML = value
//  body.appendChild(div)
})

const todolist = document.querySelector("[data-todolist]") as HTMLElement
const homepage = document.querySelector("[data-homepage]") as HTMLElement
todolist.style.display = 'none'

const homeButton = document.querySelector("[data-home]")!
const todoButton = document.querySelector("[data-todo]")!

const clicksfromHomeButton = fromEvent(homeButton, 'click')
clicksfromHomeButton.subscribe(() => {
  console.log('Home Clicked!')
  if (homeButton.classList.contains('active')) return
  homepage.style.display = todolist.style.display
  todolist.style.display = 'none'
  homeButton.classList.add('active')
  todoButton.classList.remove('active')
});

const clicksfromTodoButton = fromEvent(todoButton, 'click')
clicksfromTodoButton.subscribe(() => {
  console.log('Todo Clicked!')
  if (todoButton.classList.contains('active')) return
  todolist.style.display = homepage.style.display
  homepage.style.display = 'none'
  homeButton.classList.remove('active')
  todoButton.classList.add('active')
});


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
