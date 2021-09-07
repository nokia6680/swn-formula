var menuOpener = document.querySelector('.js-toggle');
var menu = document.querySelector('.nav');
var menuLayer = document.querySelector('.body');

menuOpener.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuOpener.classList.toggle('active');
    menuLayer.classList.toggle('no-scroll');
});
