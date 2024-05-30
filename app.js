document.addEventListener("DOMContentLoaded", evt => {
    const header = document.getElementById('navbar');
    const navbarLogo = document.getElementById('navbar-logo');

    window.onscroll = () => {
        if(window.scrollY > 0) {
            header.classList.add('scrolled');
            navbarLogo.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            navbarLogo.classList.remove('scrolled');
        }
    }
});