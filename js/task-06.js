const inputEl = document.querySelector('#validation-input');
const inputLength =Number(inputEl.getAttribute('data-length'));
inputEl.addEventListener('blur', inputFocusLength);
function inputFocusLength(e){
    inputEl.textContent = e.currentTarget.value;
    if (e.currentTarget.value.length===inputLength) {
        inputEl.classList.add('valid');
       inputEl.classList.remove('invalid');
    }
    else  {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
        
     }
}
console.log(inputEl);

