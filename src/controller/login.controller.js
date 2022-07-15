import Api from "../../models/Api.models.js";


// const messageErrorEmail = document.querySelector(".messageErrorEmail");
// const messageErrorPassword = document.querySelector(".messageErrorPassword");
// const inputEmail = document.querySelector(".inputEmail");
// const inputPassword = document.querySelector(".inputPassword");

export default class Login {
  static formLogin = document.querySelector(".formLogin");
  static async getLogin() {
    
    const formElements = [...this.formLogin.elements];
    const objtLogin = {
      email: formElements[0].value,
      password: formElements[1].value,
    };

    const responseLogin = await Api.userLogin(objtLogin);
    if(responseLogin.token){ 
        localStorage.setItem("@kenzie-habits:user",JSON.stringify(responseLogin.response))
        localStorage.setItem("@kenzie-habits:token", JSON.stringify(responseLogin.token))
        location.replace("./src/views/homepage.views.html");
    }
    return responseLogin
  }
}