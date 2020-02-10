import makeCard from "./makeCard.js";
import projects ,{project} from "./projects.js";
import iconLibrary from "./icons.js";

const cardContainer = document.querySelector('.LRcontainer') as HTMLDivElement;
const header = document.querySelector('.header') as HTMLElement;
const mainContainer = document.querySelector('#main-container') as HTMLElement;
const navLinks = document.querySelectorAll('.nav-link') as NodeListOf <HTMLLIElement>;
const techListSmall = document.querySelector('.tech') as HTMLUListElement;
const techListChildren = techListSmall.children as HTMLCollectionOf<HTMLLIElement>;
const techFilterList = document.querySelector('#tech-filter')as HTMLUListElement;
const techFilterChildren = techFilterList.children;
let unit = document.body.clientHeight;

for (let child of techFilterChildren) {
    const span = document.createElement('span');
    const icon = iconLibrary[child.className];
    span.innerHTML = icon.code;
    span.className = child.className;
     const SVG = span.children[0] as unknown as HTMLOrSVGImageElement;
     SVG.style.fill = `#${icon.color}`;
     SVG.style.width = `2vw`;
     SVG.style.height=`4vh`;
     child.addEventListener('click',(e)=>console.log(e.target.parentNode.parentNode.className));
     child.append(span);
}

for (let child of techListChildren) {
    const span = document.createElement('span');
    const icon = iconLibrary[child.id];
    span.innerHTML = icon.code;
    const SVG = span.children[0] as unknown as HTMLOrSVGImageElement;
    SVG.style.fill = `#${icon.color}`;
    child.append(span);
}



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
function preload(){
    let loaded = false;
    return ()=>{
        if(!loaded){
            console.log('Images Loaded');
            projects.forEach((project:project)=>cardContainer.append(makeCard(project)));
            loaded = true;
        }
    }
}
let preloader = preload();
// This function sets the underline on the navLinks for the currently selected page!
// @ts-ignore
mainContainer.addEventListener('scroll',({target:{scrollTop}})=>{
    navLinks.forEach(pickCurrentLink(scrollTop));
    let color = Math.floor(chooseColor(scrollTop) * 255);
    if(scrollTop/unit>1){
        preloader();
    }
    header.style.color = `rgb(${color},${color},${color})`;
});


