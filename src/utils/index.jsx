export default function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function parseHtml(html) {
    const el = document.createElement('textarea')
    el.innerHTML = html
    let parsedText = el.value
    el.remove()
    return parsedText
}
