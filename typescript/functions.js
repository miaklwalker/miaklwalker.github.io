import projects from "./projects.js";
import makeCard from "./makeCard.js";
export function makeCards(filter, container) {
    container.innerHTML = '';
    if (filter === 'AllVisible') {
        projects.forEach((project) => container.append(makeCard(project)));
    }
    else {
        let uniqueProjects = new Set();
        if (filter instanceof Array) {
            filter.forEach(projectFilter => {
                projects.forEach(project => {
                    if (project.languages.indexOf(projectFilter, 0) !== -1) {
                        uniqueProjects.add(project);
                    }
                });
            });
        }
        uniqueProjects.forEach((project) => container.append(makeCard(project)));
    }
}
export function preload(container) {
    let loaded = false;
    return () => {
        if (!loaded) {
            makeCards('AllVisible', container);
            loaded = true;
        }
    };
}
//# sourceMappingURL=functions.js.map