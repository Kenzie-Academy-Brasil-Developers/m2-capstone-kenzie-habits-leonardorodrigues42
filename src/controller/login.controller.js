import Api from "../models/Api.models.js";

const formLogin = document.querySelector(".formLogin");
const messageErrorEmail = document.querySelector(".messageErrorEmail");
const messageErrorPassword = document.querySelector(".messageErrorPassword");
const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");
export default class Login {
  static async getLogin() {
    let formElements = [...formLogin.elements];

    const objtLogin = {
      email: formElements[0].value,
      password: formElements[1].value,
    };

    await Api.userLogin(objtLogin);

    const response = await Api.userLogin(objtLogin);

    //Popup de erro para as requisições
    if (response.message === "email obrigatório") {
      messageErrorEmail.innerText = "Campo Obrigatório";
      inputEmail.style.border = "1.5px solid red";
    } else if (
      formElements[0].value !== null &&
      response.message === "campo password obrigatório"
    ) {
      messageErrorPassword.innerText = "Campo Obrigatório";
      messageErrorEmail.innerText = "";
      inputEmail.style.border = "none";
      inputPassword.style.border = "1.5px solid red";
    } else {
      localStorage.setItem(
        "@kenzie-habits:token",
        JSON.stringify(response.token)
      );
      localStorage.setItem(
        "@kenzie-habits:user",
        JSON.stringify(response.response)
      );
      
      location.replace("./src/views/homepage.views.html");
    }
  }

  static login() {
    const formButton = document.querySelector(".btnLogin");
    formButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const formElements = [...formLogin.elements];
      const username = formElements[0].value;
      const password = formElements[1].value;

      if (username === "") {
        event.preventDefault();
        inputEmail.style.border = "1.5px solid red";
        messageErrorEmail.innerText = "Campo obrigatório";
        return;
      } else {
        inputEmail.style.border = "1.5px solid blue";
        messageErrorEmail.innerText = "";
      }
      if (password === "") {
        event.preventDefault();
        inputPassword.style.border = "1.5px solid red";
        messageErrorPassword.innerText = "Campo obrigatório";
        return;
      } else {
        inputPassword.style.border = "1.5px solid blue";
        messageErrorPassword.innerText = "";
      }
      await Login.getLogin();
      location.replace("./src/views/homepage.views.html");
    });
  }
}
