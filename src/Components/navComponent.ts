const navtemplate = document.createElement(`template`)
navtemplate.innerHTML = /*html*/ `
  <style>
    :host { display: inline-block; border: 2px solid rebeccapurple; }
    /*::slotted(child-element) { background: lightgreen }*/
    /*div { border:3px dashed rebeccapurple }*/
  </style>
  <div><slot name=child-elements></slot></div>
  <slot class="myslot"></slot>`

customElements.define('parent-element', 
class extends HTMLElement {

  private buttons: HTMLButtonElement[] = []
  private components: HTMLElement[] = []
  private slotElement: HTMLSlotElement

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.appendChild(navtemplate.content.cloneNode(true))
    this.shadowRoot?.addEventListener('slotchange', () => this.slotsChanged())
    this.slotElement = this.shadowRoot?.querySelector<HTMLSlotElement>('.myslot')!
  }

  private slotsChanged() {

    this.buttons = []
    this.components = []
  
    this.slotElement
    .assignedElements()
    .map(s => s as HTMLElement)
    .forEach((component, i) => {
      this.components.push(component)
      // if (component.getAttribute("navigationname") === null) return
      const button = document.createElement('button')
      this.buttons.push(button)
      button.classList.add('navbutton')
      button.addEventListener('click', (e: Event) => this.navButtonClicked(e.target as HTMLElement))
      i === 0 ? button.classList.add('active') : component.style.display = 'none'
      button.innerHTML = component.getAttribute("navigationname")!
      document.querySelector<HTMLDivElement>('navigation-bar')!.appendChild(button)
    })
  }

  private navButtonClicked(targetButton: HTMLElement) {
    const name = targetButton.innerText
    this.components.forEach(e => e.style.display = 'none')
    this.components.filter(e => e.getAttribute('navigationname') === name).forEach(e => e.style.display = 'block')
    this.buttons.forEach(b => b.classList.remove('active'))
    targetButton.classList.add('active')
  }
})

customElements.define('child-element', class extends HTMLElement {
  connectedCallback() {
    // parent = this.closest('parent-element')
  }

  static get observedAttributes() {
    return ['navigationname']
  }

  get navigationname() {
    return this.getAttribute('navigationname')
  }

  set navigationname(value) {
    if (value === null) return
    this.setAttribute('navigationname', value)
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
    console.log(attrName, oldVal, newVal)
  }
})

customElements.define('navigation-bar', class extends HTMLElement {
  constructor() {
    super()
  }
})
