const navbarNav = document.querySelector('.navbar-nav');

// Navigation Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



// Scroll To Top button
// script.js
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
    // Menggunakan requestAnimationFrame() untuk animasi scroll
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 5); // Mengurangi perlahan scroll sebelum mencapai atas
    }
}
