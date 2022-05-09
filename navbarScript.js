const ul = document.getElementById("ul");

const hamburger = document.getElementById("burger-button");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    ul.classList.toggle("slide");
});
