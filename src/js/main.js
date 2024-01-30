
let hamburgerEl = document.getElementById("hamburger");
let navListEl = document.getElementById("list-div");

hamburgerEl.addEventListener("click", showMenu);

function showMenu() {
    hamburgerEl.style.display = "none";
    navListEl.style.display = "block";
}

