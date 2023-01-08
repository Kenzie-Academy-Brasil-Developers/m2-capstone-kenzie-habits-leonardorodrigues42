import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";
import UptadeHabit from "../controller/uptadeHabit.controller.js";

const responseUser = await Api.readAll();

let maxHabits = 10;

const orderedHabits = responseUser.sort((a, b) => b.habit_id - a.habit_id);

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

    const objectForm = {
      habit_title: objectValues[0].value,
      habit_description: objectValues[1].value,
      habit_category: objectValues[2].value,
    };
    const response = await Api.createHabit(objectForm);
    if (response.habit_id) {
      Modal.habitCreateSucess();
      setTimeout(() => {
        location.reload();
      }, 2000);
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

    imgButton.id = data.habit_id;
    btnEdit.classList.add("editTaskButton");
    inputCheckbox.id = data.habit_id;
    labelTitle.id = `labelId_${data.habit_id}`;

    inputCheckbox.type = "checkbox";

    if (data.habit_status) {
      labelTitle.classList.add("inputCheckboxOn");
      inputCheckbox.checked = true;
    }

    labelTitle.innerText = data.habit_title;
    pDescription.innerText = data.habit_description;
    spanCategory.innerText = data.habit_category;
    imgButton.src = "../assets/img/Button Options.png";

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

    imgButton.className = "btnTable fa fa-ellipsis-h";

    btnEdit.appendChild(imgButton);
    li.append(inputCheckbox, labelTitle, pDescription, spanCategory, btnEdit);
    this.ul.append(li);
  }

  static dashboardDisplay = document.getElementsByClassName("tableBody")[0];

  static filterHabitsBtn = document.querySelector("#filterDone");
  static showAllBtn = document.querySelector("#filterAll");

  static async setFilterHabitsBtn() {
    this.filterHabitsBtn.addEventListener("click", async () => {
      Homepage.dashboardDisplay.innerHTML = "";

      let filteredHabits = orderedHabits.filter((elem) => {
        return elem.habit_status === true;
      });

      filteredHabits.slice(0, maxHabits).map((element) => {
        Homepage.renderHabit(element);
      });

      this.moreHabits(filteredHabits);
    });
  }

  static async moreHabits(data) {
    const btnMoreHabits = document.querySelector(".loadMore");

    btnMoreHabits.addEventListener("click", (event) => {
      event.preventDefault();
      Homepage.ul.innerHTML = "";
      maxHabits += 5;
      data.slice(0, maxHabits).map((elem) => {
        Homepage.renderHabit(elem);
      });

      UptadeHabit.uptadeUserHabit();
    });
  }

  static async setCompleteHabit() {
    const inputCheck = document.querySelectorAll(".tableBody li input");

    inputCheck.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const labelCheckd = Array.from(
          document.querySelectorAll(".tableBody li label")
        );

        const label = labelCheckd.filter((element) => {
          return element.id.split("_")[1] == elem.id;
        });

        const labelId = label[0].id;

        const labelFinal = document.querySelector(`#${labelId}`);

        labelFinal.className = "inputCheckboxOn";

        await Api.completeHabit(elem.id);

        location.reload();
      });
    });
  }
}

orderedHabits.slice(0, maxHabits).map((elem) => {
  Homepage.renderHabit(elem);
});

Homepage.moreHabits(orderedHabits);

Homepage.showAllBtn.addEventListener("click", () => {
  Homepage.dashboardDisplay.innerHTML = "";

  responseUser.slice(0, maxHabits).forEach((element) => {
    Homepage.renderHabit(element);
  });

  Homepage.setCompleteHabit();
});