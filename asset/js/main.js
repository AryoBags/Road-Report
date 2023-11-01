let menuOpen = document.querySelector('.menu-toggle');
let menuWarp = document.querySelector('.menu-wrapper')
menuOpen.addEventListener('click', function(){
    menuOpen.classList.toggle('bx-x');
    menuWarp.classList.toggle('active')

})

// slider
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 1;
    let slideCount = document.querySelectorAll(".frame-slider").length;

    const slideInterval = 3000;
    let intervalId = setInterval(autoSlide, slideInterval);

    document.querySelectorAll(".navigator a").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            currentSlide = parseInt(event.target.getAttribute("href").substring(7));
            showSlide(currentSlide);
            updateActiveIndicator(currentSlide);

            clearInterval(intervalId);
            intervalId = setInterval(autoSlide, slideInterval);
        });
    });

    function showSlide(slideIndex) {
        if (slideIndex < 1) {
            currentSlide = slideCount;
        } else if (slideIndex > slideCount) {
            currentSlide = 1;
        }

        document.querySelectorAll(".frame-slider").forEach((slide) => {
            slide.classList.remove("active-slide");
        });

        document.getElementById(`slide-${currentSlide}`).classList.add("active-slide");
    }

    function updateActiveIndicator(currentSlide) {
        document.querySelectorAll(".navigator a").forEach((link) => {
            link.classList.remove("active");
        });
        document.querySelector(`a[href="#slide-${currentSlide}"]`).classList.add("active");
    }

    function autoSlide() {
        currentSlide++;
        showSlide(currentSlide);
        updateActiveIndicator(currentSlide);
    }
});



