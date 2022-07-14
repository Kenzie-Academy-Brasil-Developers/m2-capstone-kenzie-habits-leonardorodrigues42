import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";

const formEditHabit = document.querySelector(".modalFormEditHabit");

export default class EditHabit {
  static async uptadeUserHabit() {
    const btnEditHabit = document.querySelector(".btnTable");

    btnEditHabit.addEventListener("click", () => {
      Modal.editHabit();
    });
  }

  static async editHabitCard(event) {
    const newObject = [...formEditHabit.elements];

    const objectForm = {
      habit_title: newObject[0].value,
      habit_description: newObject[1].value,
      habit_category: newObject[2].value,
    };
    const response = await Api.uptadeHabit(objectForm);
  }
}
