const navWrap = document.getElementById("nav-wrap");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll("#main-nav > .nav-item > .nav-link");

const navToggle = () => {
  navWrap.classList.toggle("show-nav");
  hamburger.classList.toggle("close");
};

const handleHam = hamburger.addEventListener("click", navToggle);

// //

function removeActiveClasses() {
  navLinks.forEach((navLink) => {
    const dropdown = navLink.nextElementSibling;

    dropdown.classList.remove("dropdown-active");
  });
}

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    removeActiveClasses();

    navLink.nextElementSibling.classList.add("dropdown-active");
  });
});
