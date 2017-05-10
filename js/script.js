var link = document.querySelector(".search-hotel-btn");

var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var arrive = popup.querySelector("[name=date-in]");
var leave = popup.querySelector("[name=date-out]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  arrive.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!arrive.value || !leave.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести даты заезда и выезда"); 
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});