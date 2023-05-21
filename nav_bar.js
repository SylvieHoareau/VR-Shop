let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
/*Pour cacher le label de la barre de recherche dans la barre de menu*/
// document.getElementById("product-select-label").style.display = "none";


toggle.addEventListener("click", function () {
    body.classList.toggle("open");
});




