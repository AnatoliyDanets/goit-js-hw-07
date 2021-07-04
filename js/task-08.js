const divEl = document.querySelector('#controls');
const divBoxes=document.querySelector('#boxes')
const onRenderBtn = document.querySelector(' [data-action="render"]');
const onDestroyBtn = document.querySelector(' [data-action="destroy"]');
 const inputEl = divEl.firstElementChild;
 function createBoxes( amount) {
amount = inputEl.value;
const arrDivs = [];
  for (let i = 0; i < amount; i += 1) {
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    newDiv.style.width = `${30+i+10}px`;
    newDiv.style.height = `${30+i+10}px`;
 arrDivs.push(newDiv);
   
    }
 divBoxes.append(...arrDivs)
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
  inputEl.value = '';
}

onRenderBtn.addEventListener("click", createBoxes);
onDestroyBtn.addEventListener("click", destroyBoxes);