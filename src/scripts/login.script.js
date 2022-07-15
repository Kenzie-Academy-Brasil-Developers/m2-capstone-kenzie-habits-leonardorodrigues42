import Login from "../controller/login.controller.js";

const btnLogin = document.querySelector(".btnLogin")
btnLogin.addEventListener("click", async (event) => {
    event.preventDefault()
    await Login.getLogin();
});

