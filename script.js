// Toggle burger menu
document.getElementById('burger').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

function copyToClipboard() {
    const copyText = "0x...00000";
    navigator.clipboard.writeText(copyText).then(function () {
        alert("Copied the CA: " + copyText);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const carouselContent = document.getElementById('carousel-content');
    const speed = 1;

    carouselContent.innerHTML += carouselContent.innerHTML;

    let currentPosition = 0;

    function scrollCarousel() {
        currentPosition -= speed;

        if (Math.abs(currentPosition) >= carouselContent.scrollWidth / 2) {
            currentPosition = 0;
        }

        carouselContent.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scrollCarousel);
    }

    scrollCarousel();
});

window.addEventListener('scroll', function () {
    const parallaxSection = document.querySelector('.parallax-image');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        parallaxSection.classList.add('scrolled');
    } else {
        parallaxSection.classList.remove('scrolled');
    }
});
