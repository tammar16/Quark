import './style.css'
import { of, Observable } from "rxjs"; 
import './Components/todoComponent.ts'
import './Components/navComponent.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div class="wrapper">
  <nav-header class="nav">
  </nav-header>
  <nav-contenthost class='main'>
    <nav-content navigationname="Home">
      <div data-homepage class="todo homepage">Welcome to the Quark Home Page!</div>
    </nav-content>
    <nav-content navigationname="Todo">
      <todo-list data-todolist class="todo"></todo-list>
    </nav-content>
    <nav-content navigationname="About">
      <div class="About">About Quark</div>
    </nav-content>
  </nav-contenthost>
</div>
`

const emitter : Observable<string> = of("Sam", "Ray", "Thomas");

emitter.subscribe((value: string) => {
  console.log(`Name: ${value}`)
})