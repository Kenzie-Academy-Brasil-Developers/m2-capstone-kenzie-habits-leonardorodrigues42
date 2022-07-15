import Api from "../models/Api.models.js";
import Modal from "../models/modal.models.js";

const formEditHabit = document.querySelector(".modalFormEditHabit");

export default class EditHabit {
  
  static async uptadeUserHabit() {
    const btnEditHabit = document.querySelectorAll(".btnTable");

    btnEditHabit.forEach(btn => {
      btn.addEventListener("click", () => {
        localStorage.setItem("@kenzie-habits:habit_id", btn.id);
        Modal.editHabit();
        this.editHabitCard(btn)
        this.deleteHabit(btn.id)
        const elementos = btn.parentNode.parentNode
        console.log(elementos.childNodes[1].innerText);
      })
    })
  }
  static async editHabitCard(btnHabitId) {
    const modalFormEditHabit = document.querySelector(".modalFormEditHabit");
    const postId = localStorage.getItem("@kenzie-habits:habit_id");

    const newObject = [...modalFormEditHabit.elements];
    const elementos = btnHabitId.parentNode.parentNode

    
      newObject[0].value = elementos.childNodes[1].innerText
      newObject[1].value = elementos.childNodes[2].innerText
      newObject[2].value = elementos.childNodes[3].innerText.toLowerCase()


    const btnEdit = document.querySelector(".modalBtnEditHabit")

    btnEdit.addEventListener("click", async () => {
      const objectForm = {
        habit_title: newObject[0].value,
        habit_description: newObject[1].value,
        habit_category: newObject[2].value,
      };
      const response = await Api.uptadeHabit(objectForm, postId);
      console.log(await response, objectForm)
      if (response) {
        Modal.habitChangedSucess();
        setTimeout(() => {
          location.reload();
        }, 1200);
      }
    })
    
  }
  // modalBtnEditCancelHabit
  static async deleteHabit(habitId) {
    const btnDeleteHabit = document.querySelector(".modalBtnEditCancelHabit")
    btnDeleteHabit.addEventListener("click", async (e) => {
      e.preventDefault()
      console.log("funfou")
      Modal.delete()
      const btnConfirmeDelite = document.querySelector(".modalBtnDelete")
      console.log(btnConfirmeDelite)
      btnConfirmeDelite.addEventListener("click", async (e) => {
      const response = await Api.deleteHabit(habitId)
      
        setTimeout(() =>{
          location.reload()
        }, 300)
      })

      })

    }
  }

