class Header extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("header");
    const style = document.createElement("style");

    div.innerHTML = `
    <header>
      <div class= "logo-container"> 
        <a>&#x1F4AC;</a>
        <h5>Chat page</h5>
     </div>
     <div class= "info-container">
        <p>Celeste Montero</p>
        <p>Desarrolladora web</p>
     </div>
    </header>
        `;

    style.innerHTML = `
    header{
      height: 70px;
      width: 100%;
      background-color: #613d97;
      display: flex;
      justify-content: space-between;
    }

    .logo-container{
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo-container a{
      font-size: 35px;
      cursor: pointer;
    }

    .logo-container h5{
      font-size: 20px;
    }

    .info-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
      gap: 5px;
    }

    .info-container p{
      margin: 0;
      font-weight: bold;
    }
    `;

    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}

customElements.define("header-comp", Header);
