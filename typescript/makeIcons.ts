import iconLibrary,{icon} from "./icons.js";

function createIcon(icon:icon){
    const span = document.createElement('span');
    span.innerHTML = icon.code;
    const SVG = span.children[0] as unknown as HTMLOrSVGImageElement;
    SVG.style.fill = `#${icon.color}`;
    return span
}

export default function makeIcons(elementList:HTMLCollectionOf<HTMLLIElement>){
    let icons = [];
    for (let child of elementList ) {
        let icon = iconLibrary[child.id] ?? iconLibrary[child.className];
        const span = createIcon(icon);
        icons.push(span);
        child.append(span);
    }
    return icons;
}