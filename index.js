let index = 0;
const slides = document.querySelectorAll('.slides > .slide');
const totalSlides = slides.length;
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');

function showSlide() {
    const marginLeft = -index * 100; 
    document.querySelector('.slides').style.marginLeft = `${marginLeft}%`;
}

setInterval(() => {
    index = (index + 1) % totalSlides; 
    showSlide();
}, 5000); 

radioButtons.forEach((radioButton, idx) => {
    radioButton.addEventListener('change', () => {
        index = idx; 
        showSlide(); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById('curiosidade1');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    observer.observe(target);
});

