import Login from "../controller/login.controller.js";

Login.loginVerification()

const btnLogin = document.querySelector(".btnLogin")
btnLogin.addEventListener("click", async (event) => {
    event.preventDefault()
    await Login.getLogin();
});

