import Api from "../models/Api.models.js";

const responseUser = await Api.readAll();

export default class Homepage {
  static getUser = JSON.parse(localStorage.getItem("@kenzie-habits:user"));

  static imageHeader = document.querySelector(".iconImage");

  static imageUser = document.querySelector(".avatarImage");

  static usarname = document.querySelector(".username");

  static async renderUser(data) {
    this.imageHeader.src = data.usr_image;
    this.imageUser.src = data.usr_image;
    this.usarname.innerText = data.usr_name;
  }

  static btnCreateHabit = document.querySelector(".buttonCreateHabit");

  static async createHabitCard() {
    this.btnCreateHabit.addEventListener("click", async () => {
      const teste1 = {
        habit_title: "bater ponto corretamente",
        habit_description: "bater ponto todos os dias nos horários corretos",
        habit_category: "Saude",
      };
      await Api.createHabit(teste1);
    });
  }

  static renderHabit(data) {
    const ul = document.querySelector(".tableBody");

    const li = document.createElement("li");
    const inputCheckbox = document.createElement("input");
    const labelTitle = document.createElement("label");
    const pDescription = document.createElement("p");
    const spanCategory = document.createElement("span");
    const btnEdit = document.createElement("button");
    const imgButton = document.createElement("img");

    btnEdit.classList.add("editTaskButton");
    inputCheckbox.id = data.habit_id;

    inputCheckbox.type = "checkbox";
    labelTitle.innerText = data.habit_title;
    pDescription.innerText = data.habit_description;
    spanCategory.innerText = data.habit_category;
    imgButton.src = "../assets/img/Button Options.png";

    btnEdit.appendChild(imgButton);
    li.append(inputCheckbox, labelTitle, pDescription, spanCategory, btnEdit);
    ul.append(li);
  }
}

responseUser.map((elem) => {
  Homepage.renderHabit(elem);
});

