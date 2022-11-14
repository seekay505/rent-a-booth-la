const hamburgerMenu = document.getElementsByClassName("hamburger-toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

hamburgerMenu.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})