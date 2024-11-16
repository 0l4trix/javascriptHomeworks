let containerId = 'outer';
let contentId = 'inner';
let width = 370;
let buttonText = 'Rendben';

const hide = () => document.getElementById(containerId).style.cssText += 'display: none';

function create() {
    let content = document.createElement('div');
    content.setAttribute("id", contentId);
    let button = document.createElement('button');
    button.addEventListener('click', hide);
    button.textContent = buttonText;
    let container = document.getElementById(containerId);
    container.appendChild(content);
    container.appendChild(button);
}

if (!document.getElementById(contentId))
    create();

const show = text => {
    document.getElementById(contentId).textContent = text;
    document.getElementById(containerId).style.cssText += `width: ${width}px; left: ${(window.innerWidth - width)/2-20}px; display: block`;
}

export { show, hide };