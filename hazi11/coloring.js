const fill = (element, color) => {
    element.style.cssText += `background-color: ${color};`
}
const randomFill = element => {
    let random = '#';
    for (let i = 0; i < 6; i++) {
        random += Math.floor(Math.random() * 16) + ' ';
    }
    random = random.replace(/1[0-5]|[ ]/g, n => {
        switch (n) {
            case '10': return 'A';
            case '11': return 'B';
            case '12': return 'C';
            case '13': return 'D';
            case '14': return 'E';
            case '15': return 'F';
            default: return '';
        }
    })    
    fill(element, random);
}
export {
    fill, randomFill
}