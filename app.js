const navBar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navList = document.querySelectorAll('#navbar>ul>li>a');

const cardFilter = document.querySelectorAll('#portfolio-flters>li');
const cardsToDisplay = document.querySelectorAll('.portfolio-container>.portfolio-item');
/* const allCards = document.querySelector('li[data-filter="*"]');
const htmlCssCard = document.querySelector('li[data-filter=".filter-html-css]');
const sassCard = document.querySelector('li[data-filter=".filter-sass]');
const bootstrapCard = document.querySelector('li[data-filter=".filter-bootstrap]');
const JavaScriptCard = document.querySelector('li[data-filter=".filter-JavaScript]'); */

/* Hamburger */
let flip = false;

hamburger.addEventListener('click', (event) => {
    flip = true;
    navList.forEach(el => {
        el.classList.remove("nav-link");
    });
    hamburger.classList.remove("hamburger");
    event.stopPropagation(); // Prevent the click from bubbling up to the document
});

document.addEventListener('click', () => {
    if (flip) {
        flip = false;
        navList.forEach(el => {
            el.classList.add("nav-link");
        });
        hamburger.classList.add("hamburger");
    }
});

/* Filter */
cardFilter.forEach(function (el) {
    el.addEventListener("click", (e) => {

        // e.target.classList.add('filter-active');
        if (e.target === cardFilter[0]) {
            cardsToDisplay.forEach(card => card.classList.remove('doNotDisplay'));
        } else {
            const targetFilter = e.target.classList;
            cardsToDisplay.forEach(function (card) {
                targetFilter.forEach(function (className) {
                    if (card.classList.contains(className)) {
                        card.classList.remove("doNotDisplay");
                    } else {
                        card.classList.add("doNotDisplay");
                    }
                });
            });
        }
        cardFilter.forEach(el => el.classList.remove('filter-active'));
        e.target.classList.add('filter-active');
    });
});