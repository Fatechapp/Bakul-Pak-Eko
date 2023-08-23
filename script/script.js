const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('a[href="#Menu"]').addEventListener('click', function(eventScrollKeBawah) {
    eventScrollKeBawah.preventDefault();
    const TPkeBagian = document.getElementById('Menu');
    TPkeBagian.scrollIntoView({ behavior: 'smooth' });
});

// Scroll To Top button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollButton = document.getElementById("scroll-up-button");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
