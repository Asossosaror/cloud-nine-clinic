const checkScrollStatus = (header, navbarLogo, bookBtn) => {
    if(window.scrollY > 0) {
        header.classList.add('scrolled');
        navbarLogo.classList.add('scrolled');
        bookBtn.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        navbarLogo.classList.remove('scrolled');
        bookBtn.classList.remove('scrolled');
    }
}

document.addEventListener("DOMContentLoaded", evt => {
    const header = document.getElementById('navbar');
    const navbarLogo = document.getElementById('navbar-logo');
    const bookBtn = document.getElementById('book-btn-container');

    checkScrollStatus(header, navbarLogo, bookBtn);

    window.onscroll = () => {
        checkScrollStatus(header, navbarLogo, bookBtn);
    }
});