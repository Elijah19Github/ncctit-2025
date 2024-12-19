const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    // Close the mobile menu
    document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})