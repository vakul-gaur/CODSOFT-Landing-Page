document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function slideTo(index) {
        const width = cards[0].clientWidth;
        slider.style.transform = `translateX(${-width * index}px)`;
        currentIndex = index;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(cards.length - 1); // Loop back to the last image
        }
    });

    document.querySelector('.next').addEventListener('click', function() {
        if (currentIndex < cards.length - 1) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0); // Loop back to the first image
        }
    });
});