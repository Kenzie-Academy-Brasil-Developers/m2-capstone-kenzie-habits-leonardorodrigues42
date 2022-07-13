import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";

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

  static async callCreateHabitButton() {
    const btnCreateHabit = document.querySelector(".buttonCreateHabit");

    btnCreateHabit.addEventListener("click", async () => {
      Modal.createHabit(this.createHabitCard);
    });
  }

  static async createHabitCard(event) {
    event.preventDefault();

    const objectValues = [...event.target];

    console.log(objectValues);

    const btnCreateHabit = document.querySelector(
      ".modalCreateHabitContentBtn"
    );

    const objectForm = {
      habit_title: objectValues[0].value,
      habit_description: objectValues[1].value,
      habit_category: objectValues[2].value,
    };
    console.log(objectForm);
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
