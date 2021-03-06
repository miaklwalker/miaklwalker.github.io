export interface project {
    name:string,
    caption:string,
    imgUrl:string,
    languages:string[],
    SourceCode:string,
    DemoLink:string,
    description:string,
}
const projects:project[] =[
        {
            "name":"The Legend Of Zelda",
            "caption":'Recreated from scratch!',
            "imgUrl":'../../images/LOZ',
            "languages":["TypeScript","JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/thelegendofzelda",
            "DemoLink":"https://codesandbox.io/s/the-legend-of-zelda-web-version-3x8s2",
            "description":`The Legend of Zelda for the Nintendo Entertainment System.<br>It is a genre-defining masterpiece that needs no introduction.<br> My goal while learning to program was to put off using frameworks.<br>You will find that no frameworks where used in the making of this game.<br>I did use a collision library, but I have previously made several collision systems.<br>This game is and was a massive undertaking.<br>From the research to the extensive replaying of the original, to building a custom debug mode.<br>This project is still in need of work.`
        },
        {
            "name":"Tile Mapper",
            "caption":'For Mapping 2D Tile-based games',
            "imgUrl":'../../images/tilemapper',
            "languages":["JavaScript"],
            "SourceCode":"https://github.com/miaklwalker/TileMapper",
            "DemoLink":"https://codesandbox.io/s/tilemapperjs-gimgd",
            "description":"This project was an offshoot of my The Legend Of Zelda remake.<br>The main goal of the project was to speed up the mapping of 2D tile-based games.<br>This project also had ulterior motives.<br>I wanted to use more professional programming practices.<br>Such as clear documentation and examples, helpful comments and <br> eventually publishing it as a package."
        },
        {
            "name":"Brick Breaker",
            "caption":'My first Game!',
            "imgUrl":'../../images/brickbreaker',
            "languages":["JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/BrickBreaker",
            "DemoLink":"https://reverent-poitras-b46a77.netlify.com/",
            "description":"Brick Breaker was my first attempt at making a real video game.<br> It taught me such much about programming.<br> It also cemented that programming was something I wanted to pursue."
        },
        {
            "name":"Magic 8 Ball",
            "caption":'Immutable State and Honest Answers',
            "imgUrl":'../../images/magic8',
            "languages":["JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/Magic8Ball",
            "DemoLink":"https://codesandbox.io/s/magic-8-ball-dgocu",
            "description":"To test my fundamentals before learning Redux.<br>I wanted to implement an immutable state app from scratch.<br>With that goal in mind, I created this take on the classic The Magic 8 Ball."
        },
        {
            "name":"Snake",
            "caption":'2 hour Coding Challenge',
            "imgUrl":'../../images/snake',
            "languages":["JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/Snake",
            "DemoLink":"https://www.imawalkersoyoudonthavetobe.com/Snake/",
            "description":"A 2-hour coding challenge I made in my first year of self-learning."
        },
        {
            "name":"Redux Todo List",
            "caption":'From The Redux Tutorial Site',
            "imgUrl":'../../images/reactTodo',
            "languages":["React","Sass","JavaScript","Redux","Jest"],
            "SourceCode":"https://github.com/miaklwalker/Redux-Todo-List",
            "DemoLink":"https://suspicious-wozniak-174f33.netlify.com/",
            "description":"The React-Redux tutorial project with a bit of extra flair and testing."
        },
        {
            "name":"Dice Roller",
            "caption":'My First App Ever',
            "imgUrl":'../../images/diceRoller',
            "languages":["JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/DiceRollerMyFirstApp",
            "DemoLink":"https://www.imawalkersoyoudonthavetobe.com/DiceRollerMyFirstApp/",
            "description":"My first web app ever!<br> I have left it unchanged to serve as a ruler for how far I come.<br> It is objectively terrible.<br> I'm still proud of it and myself to this day."
        },
        {
            "name":"War",
            "caption":'My first Game , with a light refactor',
            "imgUrl":'../../images/war',
            "languages":["JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/WarTypeScript",
            "DemoLink":"https://www.imawalkersoyoudonthavetobe.com/War-JavaScript-Card-Game/",
            "description":"A classic card game I played as a child.<br> My father would bring out the deck of cards and my and I would play game after game.<br> It will always hold a spot in my heart."
        },
        {
            "name":"BabaIsYou JS",
            "caption":'remade from scratch in JavaScript',
            "imgUrl":'../../images/babaisyou',
            "languages":["JavaScript","HTML","CSS"],
            "SourceCode":"https://github.com/miaklwalker/JavaScriptIsYou",
            "DemoLink":"https://codesandbox.io/s/browserisyou-rzuxw",
            "description":"A remake of the indie smash hit Baba is you.<br> This was done entirely for educational purposes.<br> It is specifically a remake of the itch.io version.<br> This was my second game programmed in Vanilla JavaScript."
        },
        {
            "name":"BKeeper",
            "caption":'My First Full Stack App',
            "imgUrl":'../../images/bkeeper',
            "languages":["JavaScript","Bootstrap","TypeScript","React","Cypress"],
            "SourceCode":"https://github.com/miaklwalker/b-keeper",
            "DemoLink":"http://www.band-keeper.com/",
            "description":"My first Full-Stack Application.<br> It uses Mongoose, Express, React, Node.<br> It's a full-featured CRM.<br> It was designed to help music studios manage artist's while letting the focus on what matters.<br> Making good music."
        },
        {
            "name":"Backend",
            "caption":'My First Rest Api Backend',
            "imgUrl":'../../images/bkeeper',
            "languages":["Node","Postman","Mongoose","MongoDB","Jest"],
            "SourceCode":"https://github.com/miaklwalker/backend",
            "DemoLink":"http://www.band-keeper.com/",
            "description":"My first Full-Stack Application.<br> It uses Mongoose, Express, React, Node.<br> It's a full-featured CRM.<br> It was designed to help music studios manage artist's while letting the focus on what matters.<br> Making good music."
        }
    ];

export default projects
