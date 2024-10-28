let index = 0;
const slides = document.querySelectorAll('.slides > .slide');
const totalSlides = slides.length;
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');

// Função para mostrar o slide atual
function showSlide() {
    const marginLeft = -index * 100; // Calcula a margem com base no índice
    document.querySelector('.slides').style.marginLeft = `${marginLeft}%`;
}

// Configura a transição automática de slides
setInterval(() => {
    index = (index + 1) % totalSlides; // Avança para o próximo slide
    showSlide();
}, 5000); // Troca a imagem a cada 5 segundos

// Adiciona event listeners para os botões manuais
radioButtons.forEach((radioButton, idx) => {
    radioButton.addEventListener('change', () => {
        index = idx; // Atualiza o índice com base no botão selecionado
        showSlide(); // Mostra o slide correspondente
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById('curiosidade1');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Adiciona a classe que ativa a animação
                observer.unobserve(entry.target); // Para de observar após ativar
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% da div estiver visível

    observer.observe(target);
});

