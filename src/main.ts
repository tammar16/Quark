import './style.css'
import { of, Observable } from "rxjs"; 
import './Components/todoComponent.ts'
import './Components/navComponent.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div class="wrapper">
  <navigation-bar class="nav">
  </navigation-bar>
  <parent-element class='main'>
    <child-element navigationname="Home">
      <div data-homepage class="todo homepage">Welcome to the Quark Home Page!</div>
    </child-element>
    <child-element navigationname="Todo">
      <todo-list data-todolist class="todo"></todo-list>
    </child-element>
    <child-element navigationname="About">
      <div class="About">About Quark</div>
    </child-element>
  </parent-element>
</div>
`

const emitter : Observable<string> = of("Sam", "Ray", "Thomas");

emitter.subscribe((value: string) => {
  console.log(`Name: ${value}`)
})