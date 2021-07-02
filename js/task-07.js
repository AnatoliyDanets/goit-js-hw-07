const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(spanEl.style)

inputEl.addEventListener('input', getValueInput);

function getValueInput(e) {
    spanEl.style.fontSize = e.currentTarget.value  + 'px';
}