const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


// function: displays the menu once the hamburger menu logo is clicked
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// function: minimize the menu after clicking one of the nav link options (home, projects, experience, contact)
// (e) means event object (like MouseEvent and KeyboardEvent)
navLinks.addEventListener("click", (e) => { 
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// animates img, h1, p and buttons to fade in to position
ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".project__card", {
    ...scrollRevealOption,
    delay: 500,
});


