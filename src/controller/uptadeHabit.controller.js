import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";

const formEditHabit = document.querySelector(".modalFormEditHabit");

export default class EditHabit {
  static async uptadeUserHabit() {
    const btnEditHabit = document.querySelector(".btnTable");

    btnEditHabit.addEventListener("click", () => {
      localStorage.setItem("@kenzie-habits:habit_id", btnEditHabit.id);
      Modal.editHabit();
      console.log(btnEditHabit);
    });
  }

  static async editHabitCard() {
    const modalFormEditHabit = document.querySelector(".modalFormEditHabit");

    const newObject = [...modalFormEditHabit.elements];

    const objectForm = {
      habit_title: newObject[0].value,
      habit_description: newObject[1].value,
      habit_category: newObject[2].value,
    };
    console.log(objectForm);

    const postId = localStorage.getItem("@kenzie-habits:habit_id");

    const response = await Api.uptadeHabit(objectForm, postId);
    if (response) {
      Modal.habitChangedSucess();
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }
}
