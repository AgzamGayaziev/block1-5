
 if(document.body.clientWidth>750) {
let list = document.querySelector('.section__list');
let btnShowHide = document.querySelector('.show-all');
let click1 = 0;

list.classList.remove('swiper-wrapper');
let titleButton = btnShowHide.querySelector('.show-all__title-show')

btnShowHide.addEventListener('click',function(){  
     if (click1 == 0){
        list.setAttribute('height','400px');
        click1++;
        titleButton.firstChild.replaceWith("Скрыть");
     }else {
        list.setAttribute('height','160px');
        click1--;
        titleButton.firstChild.replaceWith("Показать все");
     
        }
})
}