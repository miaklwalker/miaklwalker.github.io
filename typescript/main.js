import makeCard from "./makeCard.js";
import projects from "./projects.js";
const cardContainer = document.querySelector('.LRcontainer');
const header = document.querySelector('.header');
const mainContainer = document.querySelector('#main-container');
const navLinks = document.querySelectorAll('.nav-link');
let unit = document.body.clientHeight;
function chooseColor(scrollPosition) {
    let max = unit * 3;
    if (scrollPosition < unit * 1.01) {
        return (scrollPosition / max) * 3;
    }
    else {
        return (max * .66 / scrollPosition) - 1;
    }
}
function pickCurrentLink(scrollTop) {
    return (link, index) => {
        let currentPage = scrollTop / unit;
        if (currentPage >= index && currentPage < (index + 1)) {
            if (!link.classList.contains('selected')) {
                link.classList.add('selected');
            }
        }
        else {
            link.classList.remove('selected');
        }
    };
}
function preload() {
    let loaded = false;
    return () => {
        if (!loaded) {
            console.log('Images Loaded');
            projects.forEach((project) => cardContainer.append(makeCard(project)));
            loaded = true;
        }
    };
}
let preloader = preload();
// This function sets the underline on the navLinks for the currently selected page!
// @ts-ignore
mainContainer.addEventListener('scroll', ({ target: { scrollTop } }) => {
    navLinks.forEach(pickCurrentLink(scrollTop));
    let color = Math.floor(chooseColor(scrollTop) * 255);
    if (scrollTop / unit > 1) {
        preloader();
    }
    header.style.color = `rgb(${color},${color},${color})`;
});
//# sourceMappingURL=main.js.map