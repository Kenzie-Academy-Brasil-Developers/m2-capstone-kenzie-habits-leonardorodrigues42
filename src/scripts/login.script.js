<<<<<<< HEAD
const formLogin = document.querySelector(".formLogin");
const formButton = document.querySelector(".btnLogin");
const messageErrorEmail = document.querySelector(".messageErrorEmail");
const messageErrorPassword = document.querySelector(".messageErrorPassword");
const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");

const formElements = [...formLogin.elements];
class Login {
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
			response.message === "campo password orbigatório"
		) {
			messageErrorPassword.innerText = "Campo Obrigatório";
			messageErrorEmail.innerText = "";
			inputEmail.style.border = "none";
			inputPassword.style.border = "1.5px solid red";
		} else {
		location.replace("./src/views/homepage.views.html")
        }
	}
}

formButton.addEventListener("click", async (event) => {
	event.preventDefault();
	await Login.getLogin();
});
=======
import Api from "../models/Api.models.js";

const teste = await Api.userLogin({
  email: "grupo4Guilherme@mail.com",
  password: "a47b0998c8e0a567fec5ae036c6fda10",
});

console.log(teste);



>>>>>>> ebf8c9b6aa79a3482fc587c51c64ffa1ee2c8615
