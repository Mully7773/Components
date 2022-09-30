"use-strict";

const accordion = document.querySelector(".question-container");
accordion.addEventListener("click", function (e) {
  const accordionItem = e.target.closest(".question");
  if (!accordion) return;
  accordionItem.classList.toggle("open");
});
