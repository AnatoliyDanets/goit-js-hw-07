const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//  Вариант -1 без шаблонной строки

// const ulNewLi = document.querySelector('#gallery');
// ulNewLi.classList.add('site-nav');
// images.map((image )=> {
//   const newImg = document.createElement('img');
//   newImg.classList.add('site-nav__img')
//   newImg.setAttribute('src', image.url);
//   newImg.setAttribute('alt', image.alt);
//    newImg.setAttribute('width', 450);
//   const newLi = document.createElement('li');
//   newLi.classList.add('site-nav__item')
//   newLi.append(newImg);
//  ulNewLi.insertAdjacentElement('beforeend', newLi)
// });
//  console.log(ulNewLi);


// Вариант -2
const ulNewLi = document.querySelector('#gallery');
ulNewLi.classList.add('site-nav');
const addImgList=images.reduce((acc,image) => {
return acc +`<li class= site-nav__item><img src=${image.url} alt='${image.alt}' width = 450></li>`
},'');
ulNewLi.insertAdjacentHTML('beforeend', addImgList);
console.log(ulNewLi);