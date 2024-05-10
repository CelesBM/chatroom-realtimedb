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
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div>
                <p>Ya tienes una sala de chat? <br> Si no tienes creá una nueva!</p>
                <input type="radio" id="nuevaSala" name="tipoSala" value="nueva" required>
                <label for="nuevaSala">Nueva sala</label><br>
                <input type="radio" id="existenteSala" name="tipoSala" value="existente" required>
                <label for="existenteSala">Sala existente</label>
            </div>
            <div id="codigoSala" style="display: none;">
                <label for="codigo">Código de la sala:</label>
                <input type="text" id="codigo" name="codigo">
            </div>
            <button type="submit">Enviar</button>
        </form>     
        </div>
        `;

    const formEl = this.shadow.querySelector(".form");
    console.log(formEl);

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      Router.go("chat");
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

/**
 
 <script>
        var nuevaSalaRadio = document.getElementById('nuevaSala');
        var existenteSalaRadio = document.getElementById('existenteSala');
        var codigoSalaDiv = document.getElementById('codigoSala');
        var codigoInput = document.getElementById('codigo');

        nuevaSalaRadio.addEventListener('change', function() {
            codigoSalaDiv.style.display = 'none';
            codigoInput.required = false;
        });

        existenteSalaRadio.addEventListener('change', function() {
            codigoSalaDiv.style.display = 'block';
            codigoInput.required = true;
        });
    </script>

 */
