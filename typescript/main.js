import makeCard from "./makeCard.js";
import projects from "./projects.js";
import makeIcons from "./makeIcons.js";
const cardContainer = document.querySelector('.LRcontainer');
const header = document.querySelector('.header');
const mainContainer = document.querySelector('#main-container');
const techListSmall = document.querySelector('.tech');
const techFilterList = document.querySelector('#tech-filter');
const navLinks = document.querySelectorAll('.nav-link');
const techListChildren = techListSmall.children;
const techFilterChildren = techFilterList.children;
let unit = document.body.clientHeight;
makeIcons(techListChildren);
makeIcons(techFilterChildren);
class State {
    constructor(state = {}) {
        this.state = state;
        this.history = [];
    }
    set currentState(state) {
        this.history.push(this.state);
        this.state = Object.assign(Object.assign({}, this.state), state);
    }
    get currentState() {
        return this.state;
    }
    addProperty(property, value) {
        this.state.event = `Property : ${property} , was added`;
        this.state[property] = value;
        Object.defineProperty(this.state, property, { writable: true });
        this.currentState = this.currentState;
    }
}
;
class VisibilityFilters {
    constructor() {
        this.filters = document.createElement('span');
    }
    getFilters() {
        if (this.filters.classList.length === 0) {
            return ('AllVisible');
        }
        return [...this.filters.classList];
    }
    toggleFilter(name) {
        this.filters.classList.toggle(name);
    }
}
let techFilter = new VisibilityFilters();
[...techFilterChildren].forEach(child => {
    child.addEventListener('click', () => {
        if (child.classList.contains('filter')) {
            child.classList.remove('filter');
        }
        console.log(child);
        techFilter.toggleFilter(child.className);
        makeCards(techFilter.getFilters());
        child.classList.toggle('filter');
    });
});
function makeCards(filter) {
    cardContainer.innerHTML = '';
    if (filter === 'AllVisible') {
        projects.forEach((project) => cardContainer.append(makeCard(project)));
    }
    else {
        let uniqueProjects = new Set();
        if (filter instanceof Array) {
            filter.forEach(projectFilter => {
                projects.forEach(project => {
                    if (project.languages.includes(projectFilter)) {
                        uniqueProjects.add(project);
                    }
                });
            });
        }
        console.log(uniqueProjects);
        console.log(filter);
        uniqueProjects.forEach((project) => cardContainer.append(makeCard(project)));
    }
}
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
            makeCards('AllVisible');
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