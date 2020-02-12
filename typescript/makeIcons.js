import iconLibrary from "./icons.js";
function createIcon(icon) {
    const span = document.createElement('span');
    span.innerHTML = icon.code;
    const SVG = span.children[0];
    SVG.style.fill = `#${icon.color}`;
    return span;
}
export default function makeIcons(elementList) {
    var _a;
    let icons = [];
    for (let child of elementList) {
        let icon = (_a = iconLibrary[child.id], (_a !== null && _a !== void 0 ? _a : iconLibrary[child.className]));
        const span = createIcon(icon);
        icons.push(span);
        child.append(span);
    }
    return icons;
}
//# sourceMappingURL=makeIcons.js.map