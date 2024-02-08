const template = document.createElement(`template`);
template.innerHTML = `
<style>
h1 {
  font-size: 5rem;
  background-color: #444;
}
</style>
<div><h1>TODO List</h1></div>
`;

class OmronTagComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
  }
}

customElements.define(`omron-tag`, OmronTagComponent);
