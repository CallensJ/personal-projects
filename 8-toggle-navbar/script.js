const OPEN_MENU = document.getElementById('btn__toggle');
const CLOSE_MENU = document.getElementById('btn__close');
let navMenu = document.querySelector(".nav__menu");


OPEN_MENU.addEventListener('click', function(){
navMenu.classList.add('show-me');
console.log(navMenu);
    
})

CLOSE_MENU.addEventListener('click', function(){
navMenu.classList.remove('show-me');

})


