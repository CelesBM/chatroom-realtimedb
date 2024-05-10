import { Router } from "@vaadin/router";

class Chat extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    //  const text = document.createElement("div");
    //  text.textContent = "Holis";
    //  this.shadow.appendChild(text);
  }

  render() {
    this.shadow.innerHTML = `
        <h1>Chat</h1>
        `;

    const style = document.createElement("style");
    style.innerHTML = `
        h1{
            color: red;
        }
        `;
    this.shadow.appendChild(style);
  }
}

customElements.define("chat-comp", Chat);
