import Api from "../models/Api.models.js";

const formLogin = document.querySelector(".formLogin");
const messageErrorEmail = document.querySelector(".messageErrorEmail");
const messageErrorPassword = document.querySelector(".messageErrorPassword");
const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");

const formElements = [...formLogin.elements];
export default class Login {
  static async getLogin() {
    const objtLogin = {
      email: formElements[0].value,
      password: formElements[1].value,
    };
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
      location.replace("./src/views/homepage.views.html");
    }
  }
}