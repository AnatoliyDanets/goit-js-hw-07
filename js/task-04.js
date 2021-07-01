let counterValue =0;
const increment = () => {
  counterValue +=1;
}
const decrement = () => {
counterValue -= 1;
}
const updateValueUi = () => {
    counterValueUi.textContent=counterValue;
}

const onIncrementBtn = document.querySelector('[data-action="increment"]');
const onDecrementBtn = document.querySelector('[data-action="decrement"]');
const counterValueUi = document.querySelector('#value');
onIncrementBtn.addEventListener('click', () => {
    increment();
    updateValueUi();
    console.log(counterValue);
});


onDecrementBtn.addEventListener('click', () => {
    decrement();
    updateValueUi();
    console.log(counterValue);
});
