// Mobile nav logic

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// When the hamburger button is clicked 
navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");

    // If the nav is closed, open it 
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } 
    // If the nav is open, close it
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})