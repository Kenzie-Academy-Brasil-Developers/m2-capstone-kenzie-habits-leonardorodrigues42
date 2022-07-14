import Homepage from "../controller/homepage.controller.js";
import MenuDropDown from "../controller/menuDropDown.controller.js";
import Modal from "../models/modal.models.js";

Homepage.createHabitCard();

Homepage.renderUser(Homepage.getUser);

MenuDropDown.viewMenu()

// Modal.delete()
// Modal.editHabit()
// Modal.createHabit()
//Modal.editProfile()
// Modal.habitChangedSucess()
// Modal.habitCreateSucess()
