
// Slideshow and paginations variables
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides-container");
const pagination = document.querySelector('.pagination');
const totalSlides = slides.length;
 // Showing slides by index
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}
// switching slides
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
    updateDots();
}
// jump to slide 
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    updateDots();
}
// paginaion
function updateDots() {
    const dots = document.querySelectorAll('.pagination .dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}
//DOM for connection of sliders and pagination 
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.pagination .dot');
    updateDots();
});

