var popup = document.querySelector(".modal-content"); 
var search = popup.querySelector(".find-btn");
var form = popup.querySelector(".form"); 
var open = document.querySelector(".search-hotel-btn"); 
var arrive = popup.querySelector("[name=date-in]");
var leave = popup.querySelector("[name=date-out]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=child]");

open.addEventListener("click", function(event) { 
    event.preventDefault(); 
    popup.classList.toggle("modal-content-show"); 
}); 

search.addEventListener("click", function(event) { 
    if (!(arrive.value && leave.value && adult.value && child.value)) 
    { 
    event.preventDefault();
    popup.classList.add("modal-error"); 
    }
}); 

window.addEventListener("keydown", function(event) 
{ 
    if (event.keyCode == 27) { 
    if (popup.classList.contains("modal-content-show")) 
      { 
      popup.classList.remove("modal-content-show"); 
      } 
    } 
});