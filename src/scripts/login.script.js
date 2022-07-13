import Login from "../controller/login.controller.js";

const formButton = document.querySelector(".btnLogin");

formButton.addEventListener("click", async (event) => {
    event.preventDefault();
    await Login.getLogin();
  });