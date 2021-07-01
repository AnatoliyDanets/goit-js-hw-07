const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl);
inputEl.addEventListener('input', (e) => {
    e.currentTarget.value
        ? spanEl.textContent = e.currentTarget.value
        : spanEl.textContent = 'незнакомец'
    
})