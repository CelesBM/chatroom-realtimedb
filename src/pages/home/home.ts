import { Router } from "@vaadin/router";

class Home extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <header-comp></header-comp>
        <div class="container">
            <div class="welcome">
            <h1>Bienvenido a nuestra página de chat</h1>
            <h4>Estamos encantados de tenerte aquí. ¡Comienza a chatear y diviértete!</h4>
            </div>
        <form class="form">
            <div class="name-container">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div>
                <p>Ya tienes una sala de chat? <br> Si no tienes creá una nueva!</p>
                <input type="radio" id="newRoom" name="typeRoom" value="new" required>
                <label for="newRoom">Nueva sala</label><br>
                <input type="radio" id="oldRoom" name="typeRoom" value="old" required>
                <label for="oldRoom">Sala existente</label>
            </div>
            <div id="code-room" style="display: none;">
                <label for="code">Código de la sala:</label>
                <input type="text" id="code" name="code">
            </div>
            <button type="submit">Enviar</button>
        </form>     
        </div>
        `;

    const formEl = this.shadow.querySelector(".form");

    formEl?.addEventListener("submit", (e) => {
      e.preventDefault();
      const target = e.target as any;
      console.log(target.name.value);
      Router.go("chat");
    });

    const newRoomEl = this.shadow.getElementById("newRoom") as HTMLInputElement;
    const oldRoomEl = this.shadow.getElementById("oldRoom") as HTMLInputElement;
    const codeRoomEl = this.shadow.getElementById(
      "code-room"
    ) as HTMLDivElement;
    const codeInputEl = this.shadow.getElementById("code") as HTMLInputElement;
    console.log(newRoomEl, oldRoomEl, codeRoomEl, codeInputEl);

    newRoomEl?.addEventListener("change", () => {
      if (codeRoomEl) codeRoomEl.style.display = "none";
      if (codeInputEl) codeInputEl.required = false;
    });

    oldRoomEl?.addEventListener("change", () => {
      if (codeRoomEl) codeRoomEl.style.display = "block";
      if (codeInputEl) codeInputEl.required = true;
    });

    const style = document.createElement("style");
    style.innerHTML = `
        .container{
            padding: 20px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            gap: 40px;
        }
        .welcome{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 15px;
        }
        h1{
            color: #2a1940;
        }
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            gap: 40px;
        }
        .name-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            gap: 15px;
        }
        button{
            cursor: pointer;
            height: 35px;
            width: 170px;
            background-color: #613d97;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
        }
        `;
    this.shadow.appendChild(style);
  }
}

customElements.define("home-comp", Home);
