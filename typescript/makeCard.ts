import {project} from "./projects";


const makeCard:({}:project)=>HTMLDivElement = ({   description,
                                                name, languages,
                                                DemoLink,
                                                SourceCode:source,
                                                imgUrl,
                                                caption}:project) =>{
const card:HTMLDivElement = document.createElement('div');
card.classList.add('card');
card.innerHTML = `
        <header><h1>${name}</h1></header>
        <div class="cardBody">
            <div class="imageContainer">
                <img
                src="${imgUrl}" 
                alt="pictureText">
                <caption><small> ${caption} </small></caption>
            </div>
            <details>
                <summary>Description</summary>
                ${description}
            </details>
            <details>
                <summary>languages</summary>
                ${languages}
            </details>
            <div class="btnContainer">
                <a href='${DemoLink}'>Try Me</a>
                <a href='${source}'>View Source Code</a>
            </div>
        </div>
        <footer><small>Michael Walker</small></footer>
`;
return card;
};
export default makeCard;