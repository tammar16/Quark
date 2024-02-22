
const template = document.createElement(`template`)
template.innerHTML = `
  <style>
    :host { display: inline-block; border: 2px solid red; }
    ::slotted(child-element) { background: lightgreen }
    /*div { border:3px dashed rebeccapurple }*/
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

      //(myslot.assignedElements()[1] as HTMLElement).style.display = "none"

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
