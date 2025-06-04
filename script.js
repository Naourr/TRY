const menu = document.querySelector('.menu')
const menulist = document.querySelector('.menulist')

menu.addEventListener('click', function () {
    menulist.classList.toggle('active');
});