import container from './about.js';
import Projects from './projects.js';

let header = document.querySelector('.homepage');
let link = document.getElementById('about');

let toAbout =()=> header.animate({
    opacity:['100%','0%']
},{
    duration:1000,
    fill:'forwards',
})
.onfinish=()=>{
document.body.classList.add('about')
document.body.innerHTML = ''
document.body.innerHTML = container;
let skills = document.querySelectorAll('.skill');
[...skills].forEach(skill=>{
    skill.addEventListener('click',(e)=>{
        e.preventDefault();
        let selected = Projects.filter(project=>project.languages.includes(e.target.id))
        let projectArea = document.querySelector('.project-text');
        projectArea.classList.add('active');
        projectArea.innerHTML = selected.map(project=>jsonToHTML(project));
    })
})
document.body.animate({
    opacity:['0%','50%','100%'],
},{
    duration:1000,
    easing:'ease',
    fill:'forwards',
})};
link.addEventListener('click',toAbout)



function jsonToHTML (project){
    const {name,languages,SourceCode,DemoLink,description} = project

    return `
    <strong>
    <br>
        <span class='green'>${name}</span>:{
            <br>
            &nbsp;&nbsp;&nbsp;
            <span class='green'>"Languages"</span>:<span class="purple">[${languages}]</span>,
            <br>
            &nbsp;&nbsp;&nbsp;
            <span class='green'>"SourceCode"</span>:<span class="purple">'<a href='${SourceCode}'>View Me!</a>'</span>,
            <br>
            &nbsp;&nbsp;&nbsp;
            <span class='green'>"DemoLink"</span>:<span class="purple">'<a href='${DemoLink}'>Try Me!</a>'</span>,
            <details>
                <summary>
                <span class='green'>"Description"</span>:{
                </summary>
                <span class="purple">"${description}"</span>
            </details>
            }
            </strong>         
    
    `
}


