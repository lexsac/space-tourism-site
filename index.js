// Mobile nav logic

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when the hamburger button is clicked 
navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");

    // if the nav is closed, open it 
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } 
    // if the nav is open, close it
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

// Planet tabs logic

const tabList = document.querySelector(".tab-list");
const tabs = tabList.querySelectorAll(".tab-link");

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
});


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    
    const tabContainer = targetTab.parentNode;
    
    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);
    
    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => panel.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
    mainContainer
        .querySelectorAll('picture')
        .forEach((picture) => picture.setAttribute("hidden", true));
        
    mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

}