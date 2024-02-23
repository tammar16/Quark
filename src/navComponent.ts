
const template = document.createElement(`template`)
template.innerHTML = `
  <style>
    :host { display: inline-block; border: 2px solid rebeccapurple; }
    /*::slotted(child-element) { background: lightgreen }*/
    /*div { border:3px dashed rebeccapurple }*/
  </style>
  <div><slot name=child-elements></slot></div>
  <slot class="myslot"></slot>`

// Define the parent web component
customElements.define('parent-element', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    // Listen for slot changes
    this.shadowRoot?.addEventListener('slotchange', (evt: Event) => {

      const myslot = this.shadowRoot?.querySelector('.myslot') as HTMLSlotElement

      const nav = document.querySelector('.nav') as HTMLDivElement

      const buttons: HTMLButtonElement[] = []
      const elements: HTMLElement[] = []

      myslot.assignedElements().forEach((s, i) => {
        elements.push(s as HTMLElement)
        if (s.getAttribute("navigationname") === null) return
        const button = document.createElement('button')
        buttons.push(button)
        button.classList.add('navbutton')
        button.addEventListener('click', (e: Event) => {
            
            const name = ((e.target) as HTMLElement).innerText
            elements.forEach(ae => ae.style.display = 'none')
            const elementswithname = elements.filter(ea => ea.getAttribute('navigationname') === name)
            elementswithname[0].style.display = 'block'

                buttons.forEach(b => {
                    b.classList.remove('active')
                });
                (e.target as HTMLButtonElement).classList.add('active')
        })
        if (i === 0) {
            button.classList.add('active')

        } else {
            (s as HTMLElement).style.display = 'none'
        }
        button.innerHTML = s.getAttribute("navigationname")!
        nav.appendChild(button)
      });

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
