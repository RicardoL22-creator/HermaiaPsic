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

const inputTelefone = document.getElementById('tel');

inputTelefone.addEventListener('input',(event) =>{
    let telefone = event.target.value;

    telefone = telefone.replace(/\D/g, '');
    
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');

    event.target.value = telefone;


});

function initMap() {
    const location = { lat: -23.5505, lng: -46.6333 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

