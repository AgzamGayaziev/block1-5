
 if(document.body.clientWidth>750) {
const listBrands = document.querySelector('.section__list');
const btnShowHide = document.querySelector('.show-all');
const nameButtonShow = btnShowHide.querySelector('.show-all__title-show');
const nameButtonHide = btnShowHide.querySelector('.show-all__title-hide');
const imageArrowButton = btnShowHide.querySelector('.show-all__arrow')
let click1 = 0;

listBrands.classList.remove("swiper-wrapper");

btnShowHide.addEventListener('click',function(){  
   listBrands.classList.toggle('section__list--opened');
   nameButtonShow.classList.toggle('show-all__title-show--hide');
   nameButtonHide.classList.toggle('show-all__title-show');
   imageArrowButton.classList.toggle('show-all__arrow--rotate');
})

}