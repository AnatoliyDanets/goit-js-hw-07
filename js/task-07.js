const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(spanEl.style)

inputEl.addEventListener('input', getValueInput);

function getValueInput(e) {
    let valueSize = parseFloat(getComputedStyle(spanEl).fontSize);
    if (e.currentTarget.value >= valueSize) {
        valueSize += 1;
    }
    else {
        valueSize -= 1;
    }
    spanEl.style.fontSize = valueSize + 'px';
}