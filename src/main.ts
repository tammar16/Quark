import './style.css'
// import './styleapp.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import { of, Observable, fromEvent } from "rxjs"; 
import './app.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="wrapper">
  <nav class="nav">
    <button data-home class="active navbutton">Home</button>
    <button data-todo class="navbutton">Todo</button>
  </nav>
  <div class='main'>
    <div data-homepage class="todo homepage">Welcome to the Quark Home Page!
      
    <!--
      <parent-element>
        <child-element navigationname="Alpha">Child 1</child-element>
        <child-element navigationname="Beta">Child 2</child-element>
        <b>Content</b>
        <div><child-element navigationname="Gamma" slot = 'child-elements'>Child 3 !!!</child-element></div>
        </parent-element>
        -->
      <!--<child-element navigationname="Delta">Child 4 !!!</child-element>-->

    </div>
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



const template = document.createElement(`template`);
template.innerHTML = `
  <style>
    :host { display: inline-block; border: 2px solid red; }
    ::slotted(child-element) { background: lightgreen }
    div { border:3px dashed rebeccapurple }
  </style>
  <div><slot name=child-elements></slot></div>
  <slot class="myslot"></slot>`

// Define the parent web component
customElements.define('parent-element', class extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: 'open' }).append(document.getElementById(this.nodeName).content.cloneNode(true));
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // Listen for slot changes
    this.shadowRoot?.addEventListener('slotchange', (evt: Event) => {

      console.log('slotchange event: ', evt)

      const myslot = this.shadowRoot?.querySelector('.myslot') as HTMLSlotElement
      console.log(myslot.assignedElements())

      myslot.assignedElements().forEach(s => {
        console.log(s.getAttribute("navigationname"))
      });

      (myslot.assignedElements()[1] as HTMLElement).style.display = "none"

      // if (evt.target.name === '') {
      //   // Handle child elements within the default slot
      //   const childElements = [...evt.target.assignedElements()].filter(el => el.nodeName === 'CHILD-ELEMENT');
      //   // Process child elements (e.g., assign them to a specific slot)
      //   childElements.map(el => el.slot = 'child-elements');
      // } else {
      //   console.log(`SLOT: ${evt.target.name} got:`, evt.target.assignedNodes());
      // }
    });
  }
});

// Define the child web component
customElements.define('child-element', class extends HTMLElement {
  connectedCallback(
    // parent = this.closest('parent-element')
    ) {
    // // Check and force slot name here if needed
    // if (this.parentNode !== parent) {
    //   if (parent) {
    //     parent.append(this); // Append the child element to the parent
    //   } else {
    //     console.error(this.innerHTML, 'requires a PARENT-ELEMENT!');
    //   }
    // }
  }

  static get observedAttributes(){
    return ['navigationname']
  }

  get navigationname(){
    return this.getAttribute('navigationname')
  }

  set navigationname(value){
    if (value === null) return
    this.setAttribute('navigationname', value)
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    console.log(attrName, oldVal, newVal)
  }

});
