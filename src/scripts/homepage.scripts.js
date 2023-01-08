import Homepage from "../controller/homepage.controller.js";
import MenuDropDown from "../controller/menuDropDown.controller.js";
import Modal from "../models/modal.models.js";
import EditHabit from "../controller/uptadeHabit.controller.js";

Homepage.renderUser(Homepage.getUser);

MenuDropDown.viewMenu();

Homepage.callCreateHabitButton();

Homepage.createHabitCard();

EditHabit.uptadeUserHabit();

Homepage.setCompleteHabit();

Homepage.setFilterHabitsBtn();
