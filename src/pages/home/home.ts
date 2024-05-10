import { Router } from "@vaadin/router";

class Home extends HTMLElement {
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
        <form class="form">
            <h1>Home page</h1>
            <button>Click</button>
        </form>
        `;

    const formEl = this.shadow.querySelector(".form");
    console.log(formEl);

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      Router.go("chat");
    });

    const style = document.createElement("style");
    style.innerHTML = `
        h1{
            color: red;
        }
        `;
    this.shadow.appendChild(style);
  }
}

customElements.define("home-comp", Home);
