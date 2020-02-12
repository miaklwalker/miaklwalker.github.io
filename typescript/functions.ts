import projects, {project} from "./projects.js";
import makeCard from "./makeCard.js";

export function makeCards(filter:string|string[],container:HTMLElement){
    container.innerHTML = '';
    if(filter==='AllVisible'){
        projects.forEach((project:project)=>container.append(makeCard(project)));
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
        uniqueProjects.forEach((project:project)=>container.append(makeCard(project)));
    }
}


export function preload(container:HTMLElement){
    let loaded = false;
    return ()=>{
        if(!loaded){
            makeCards('AllVisible',container);
            loaded = true;
        }
    }
}