import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";

const responseUser = await Api.readAll();

let maxHabits = 10;

const orderedHabits = responseUser.sort((a, b) => {
  return b.habit_id - a.habit_id;
});

console.log(orderedHabits);

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
    const objectValues = [...event.target];

    console.log(objectValues);

    const btnCreateHabit = objectValues[3];

    const objectForm = {
      habit_title: objectValues[0].value,
      habit_description: objectValues[1].value,
      habit_category: objectValues[2].value,
    };
    const response = await Api.createHabit(objectForm);
    if (response.habit_id) {
      Modal.habitCreateSucess().then(() => location.reload());
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `O campo ${response.message} está vazio!`,
        showConfirmButton: true,
      });
    }
  }

  static ul = document.querySelector(".tableBody");

  static renderHabit(data) {
    const li = document.createElement("li");
    const inputCheckbox = document.createElement("input");
    const labelTitle = document.createElement("label");
    const pDescription = document.createElement("p");
    const spanCategory = document.createElement("span");
    const btnEdit = document.createElement("button");
    const imgButton = document.createElement("button");

    btnEdit.classList.add("editTaskButton");
    inputCheckbox.id = data.habit_id;

    inputCheckbox.type = "checkbox";
    labelTitle.innerText = data.habit_title.replace(
      /^./,
      data.habit_title[0].toUpperCase()
    );
    pDescription.innerText = data.habit_description.replace(
      /^./,
      data.habit_description[0].toUpperCase()
    );
    spanCategory.innerText = data.habit_category.replace(
      /^./,
      data.habit_category[0].toUpperCase()
    );

    imgButton.className = "btnTable fa fa-ellipsis-h"

    if (data.habit_category === "saude") {
      spanCategory.innerText = "Saúde";
    }

    btnEdit.appendChild(imgButton);
    li.append(inputCheckbox, labelTitle, pDescription, spanCategory, btnEdit);
    this.ul.append(li);
  }
}

orderedHabits.slice(0, maxHabits).map((elem) => {
  Homepage.renderHabit(elem);
});

const btnMoreHabits = document.querySelector(".loadMore");

btnMoreHabits.addEventListener("click", (event) => {
  event.preventDefault();
  Homepage.ul.innerHTML = "";
  maxHabits += 5;
  orderedHabits.slice(0, maxHabits).map((elem) => {
    Homepage.renderHabit(elem);
  });
});
