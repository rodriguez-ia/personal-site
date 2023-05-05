const mobileMenuToggle = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenuToggle.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
});