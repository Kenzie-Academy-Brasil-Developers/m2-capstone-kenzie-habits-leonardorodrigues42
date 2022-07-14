import Homepage from "../controller/homepage.controller.js";
import MenuDropDown from "../controller/menuDropDown.controller.js";
import Modal from "../models/modal.models.js";

Homepage.renderUser(Homepage.getUser);

MenuDropDown.viewMenu()

Homepage.callCreateHabitButton();

Homepage.createHabitCard();

Homepage.setCompleteHabit()

Homepage.setFilterHabitsBtn()


