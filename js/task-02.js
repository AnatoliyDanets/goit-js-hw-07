const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Вариант -1
// const ulEl = document.querySelector('#ingredients');
//  ingredients.map(ingredient => {
//     const ulNewLi = document.createElement('li');
//     ulNewLi.append(ingredient);
//    ulEl.append(ulNewLi);

//  });
// console.log(ulEl);


// Вариант -2 
const ulEl = document.querySelector('#ingredients');
const createList = item => {
  const ulNewLi = document.createElement('li');
  ulNewLi.textContent = item;
  return ulNewLi;
}
const addLi = ingredients.map(ingredient => createList(ingredient));
ulEl.append(...addLi);
console.log(ulEl);