import makeCard from "./makeCard.js";
import projects ,{project} from "./projects.js";
import makeIcons from "./makeIcons.js";


const cardContainer         = document.querySelector('.LRcontainer')    as HTMLDivElement;
const header                = document.querySelector('.header')         as HTMLElement;
const mainContainer         = document.querySelector('#main-container') as HTMLElement;
const techListSmall         = document.querySelector('.tech')           as HTMLUListElement;
const techFilterList        = document.querySelector('#tech-filter')    as HTMLUListElement;
const navLinks              = document.querySelectorAll('.nav-link')    as NodeListOf <HTMLLIElement>;
const techListChildren      = techListSmall.children  as HTMLCollectionOf<HTMLLIElement>;
const techFilterChildren    = techFilterList.children as HTMLCollectionOf<HTMLLIElement>;

let unit = document.body.clientHeight;

makeIcons(techListChildren);
makeIcons(techFilterChildren);
interface state{
    [index:string]:string|number|[]|{}|undefined,
    event?:string|number
}
class State {
    state:state;
    history:any[];
    constructor(state:state = {}){
        this.state = state;
        this.history = [];
    }
    set currentState(state:{}){
        this.history.push(this.state);
        this.state = {...this.state,...state};
    }
    get currentState(){
        return this.state;
    }
    addProperty(property:string,value:string|boolean|number){
        this.state.event = `Property : ${property} , was added`;
        this.state[property]=value;
        Object.defineProperty(this.state,property,{writable:true});
        this.currentState = this.currentState;
    }
};
class VisibilityFilters {
    filters:HTMLSpanElement;
    constructor(){
        this.filters = document.createElement('span');
    }
    getFilters(){
        if(this.filters.classList.length === 0 ){
            return ('AllVisible');
        }
        return [...this.filters.classList] as string[];
    }
    toggleFilter(name:string){
        this.filters.classList.toggle(name);
    }
}
let techFilter = new VisibilityFilters();
[...techFilterChildren].forEach(child=>{
    child.addEventListener('click',()=>{
        if(child.classList.contains('filter')){
            child.classList.remove('filter');
        }
        console.log(child);
        techFilter.toggleFilter(child.className);
        makeCards(techFilter.getFilters());
        child.classList.toggle('filter');
    })
});
function makeCards(filter:string|string[]){
    cardContainer.innerHTML = '';
    if(filter==='AllVisible'){
        projects.forEach((project:project)=>cardContainer.append(makeCard(project)));
    }else{
        let uniqueProjects:Set<project> = new Set();
        if(filter instanceof Array){
            filter.forEach(projectFilter=>{
                projects.forEach(project=>{
                    if(project.languages.includes(projectFilter)){
                        uniqueProjects.add(project);
                    }
                })
            })
        }
        console.log(uniqueProjects);
        console.log(filter);
        uniqueProjects.forEach((project:project)=>cardContainer.append(makeCard(project)));
    }
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
            makeCards('AllVisible');
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





