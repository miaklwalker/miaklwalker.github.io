import makeIcons from "./makeIcons.js";
import VisibilityFilters from "./visibilityFilter.js";
import {makeCards, preload} from "./functions.js";


const cardContainer         = document.querySelector('.LRcontainer')    as HTMLDivElement;
const header                = document.querySelector('.header')         as HTMLElement;
const mainContainer         = document.querySelector('#main-container') as HTMLElement;
const techListSmall         = document.querySelector('.tech')           as HTMLUListElement;
const techFilterList        = document.querySelector('#tech-filter')    as HTMLUListElement;
const navLinks              = document.querySelectorAll('.nav-link')    as NodeListOf <HTMLLIElement>;
const techFilterChildren    = techFilterList.children as HTMLCollectionOf<HTMLLIElement>;

let unit = document.body.clientHeight;
makeIcons(techFilterChildren);



let techFilter = new VisibilityFilters();
[...techFilterChildren].forEach(child=>{
    child.addEventListener('click',()=>{
        let state:boolean = true;
        if(child.classList.contains('filter')){
            child.classList.remove('filter');
            state = false;
        }
        techFilter.toggleFilter(child.className);
        makeCards(techFilter.getFilters(),cardContainer);
        child.classList.toggle('filter', state);
    })
});

function chooseColor(scrollPosition:number){
let max = unit * 3;
    if(scrollPosition<unit*1.01){
        return (scrollPosition/max) * 3;
    }
    else{
        return (max *.66 / scrollPosition) - 1;
    }
}
function pickCurrentLink(scrollTop:number) {
    return (link: HTMLLIElement, index: number) => {
        let currentPage = scrollTop / unit;
        if (currentPage >= index && currentPage < (index + 1)) {
            if (!link.classList.contains('selected')) {
                link.classList.add('selected');
            }
        } else {
            link.classList.remove('selected');
        }
    }
}

let preloader = preload(cardContainer);
// @ts-ignore
mainContainer.addEventListener('scroll',({target:{scrollTop}})=>{
    navLinks.forEach(pickCurrentLink(scrollTop));
    let color = Math.floor(chooseColor(scrollTop) * 255);
    if(scrollTop/unit>1){
        preloader();
    }
    header.style.color = `rgb(${color},${color},${color})`;
});
let tip = document.getElementById('hint') as HTMLElement;
let details = document.getElementById('projects') as HTMLDetailsElement;
    details.addEventListener('toggle',()=>{
    const { open } = details;
    tip.innerText = open ?  'Click A Icon To Filter Projects':'pst... click me';
});





