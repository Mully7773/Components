"use strict";
const learnDropDown = document.querySelector(".learn-nav-link");
const menu = document.querySelector(".dropdown-menu");

learnDropDown.addEventListener("mouseenter", function (e) {
  //   menu.classList.remove("display");
  menu.classList.toggle("display");

  if (e.target.classList.contains("header")) {
    menu.classList.remove("display");
  }

  //   if (e.target.classlist.contains("learn-dropdown")) {
  //     e.target.nextElementSibling.classlist.toggle("display");
  //   }
});
