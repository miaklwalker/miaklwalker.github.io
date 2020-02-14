const makeCard = ({ description, name, languages, DemoLink, SourceCode: source, imgUrl, caption }) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <header><h1>${name}</h1></header>
        <div class="cardBody">
            <div class="imageContainer">
            <picture>
                <source 
                srcset="${imgUrl}.webp" 
                type="image/webp">
                <img
                src="${imgUrl}.jpg" 
                alt="pictureText">
                </picture>
                <br>
                <cite><small> ${caption} </small></cite>
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
                <a href='${DemoLink}' target="_blank">Try Me</a>
                <a href='${source}' target="_blank">View Source Code</a>
            </div>
        </div>
        <footer><small>Michael Walker</small></footer>
`;
    return card;
};
export default makeCard;
//# sourceMappingURL=makeCard.js.map