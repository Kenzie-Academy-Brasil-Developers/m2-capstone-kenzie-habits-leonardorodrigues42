import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";



export default class EditHabit {
  static formEditHabit = document.querySelector(".modalFormEditHabit");
  static async uptadeUserHabit() {
    const btnEditHabit = document.querySelector(".btnTable");

    btnEditHabit.addEventListener("click", () => {
      localStorage.setItem("@kenzie-habits:habit_id", btnEditHabit.id);
      Modal.editHabit();
      console.log(btnEditHabit);
    });
  }

  static async editHabitCard() {

    const newObject = [...this.formEditHabit.elements];

    const objectForm = {
      habit_title: newObject[0].value,
      habit_description: newObject[1].value,
      habit_category: newObject[2].value,
    };

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
