let tabLinks = document.querySelectorAll('.tab-links');
let tabContents = document.querySelectorAll('.tab-contents');

let sideNavigationMenu = document.getElementById('navigation-links');



function openTab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');

    document.getElementById(tabName).classList.add('active-tab');
}


function openSideNavigationMenu() {
    sideNavigationMenu.style.right = '0';
}


function closeSideNavigationMenu() {
    sideNavigationMenu.style.right = '-50%';
}