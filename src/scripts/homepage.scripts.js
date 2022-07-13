import Homepage from "../controller/homepage.controller.js";
import MenuDropDown from "../controller/menuDropDown.controller.js";

Homepage.createHabitCard();

Homepage.renderUser(Homepage.getUser);

MenuDropDown.viewMenu()