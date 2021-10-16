let menu = document.querySelector('.header__menu')
let burger = document.querySelector('.burger--active')

burger.addEventListener('click', function(){
    menu.classList.toggle('menuactive')
})