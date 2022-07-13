import Homepage from "../controller/homepage.controller.js";
import MenuDropDown from "../controller/menuDropDown.controller.js";

Homepage.renderUser(Homepage.getUser);

Homepage.callCreateHabitButton();

Homepage.createHabitCard();

MenuDropDown.viewMenu();
