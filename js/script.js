var popup = document.querySelector(".modal-content"); 
var form = popup.querySelector(".form"); 
var openClose = document.querySelector(".search-hotel-btn");
var searchButton = popup.querySelector(".find-btn"); 
var arrivalDate = popup.querySelector("[name=date-in]");
var leavingDate = popup.querySelector("[name=date-out]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=child]");


openClose.addEventListener("click", function(event) { 
event.preventDefault(); 
popup.classList.toggle("modal-content-show"); 
}); 

searchButton.addEventListener("click", function(event) { 
if (!(arrivalDate.value && leavingDate.value && adult.value && children.value)) { 
event.preventDefault();
popup.classList.add("modal-error"); 
}
}); 

window.addEventListener("keydown", function(event) { 
if (event.keyCode == 27) { 
if (popup.classList.contains("modal-content-show")) { 
popup.classList.remove("modal-content-show"); 
} 
} 
});