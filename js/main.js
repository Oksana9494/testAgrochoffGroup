// открытие подменю
let btnSubMenu = document.querySelector('.open-submenu');
let subMenu = document.querySelector('.submenu');

function openSubMenu() {
    if(subMenu.classList.contains('submenu_active')) {
        subMenu.classList.remove('submenu_active');
        btnSubMenu.classList.remove('open-submenu_active');
    } else {
        subMenu.classList.add('submenu_active');
        btnSubMenu.classList.add('open-submenu_active');
    }    
}

btnSubMenu.addEventListener('click', openSubMenu);


//открытие и закрытие мобильного меню
let btnMobMenuOpen = document.querySelector('.open-mobile-menu');
let btnMobMenuClose = document.querySelector('.close-mobile-menu');
let mobMenu = document.querySelector('.mobile-menu');
let anchor = mobMenu.querySelectorAll('a');

function openMobMenu() {
    mobMenu.classList.add('mobile-menu_active');
}
function closeMobMenu() {
    mobMenu.classList.remove('mobile-menu_active');
}

btnMobMenuOpen.addEventListener('click', openMobMenu);
btnMobMenuClose.addEventListener('click', closeMobMenu);
anchor.forEach(function(el){
    el.addEventListener('click', closeMobMenu);
});
