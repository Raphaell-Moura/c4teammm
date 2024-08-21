// let currentIndex = 1;
// const items = document.querySelectorAll('.carrossel-item');
// const totalItems = items.length;

// // Função que avança para o próximo slide
// function nextSlide() {
//     currentIndex = (currentIndex + 1) % totalItems;
//     updateCarousel();
// }

// // Função que volta para o slide anterior
// function prevSlide() {
//     currentIndex = (currentIndex  -1 + totalItems) % totalItems;
//     updateCarousel();
// }

// // Atualiza a posição do carrossel
// function updateCarousel() {
//     items.forEach((item, index) => {
//         const offset = (index - currentIndex) * 100;
//         item.style.transform = `translateX(${offset}%)`;
//         item.style.transition = 'transform 0.5s ease-in-out';
//     });
// }




// // Controle dos botões de próximo e anterior
// document.querySelector('.next').addEventListener('click', nextSlide);
// document.querySelector('.prev').addEventListener('click', prevSlide);

// // Auto-scroll: alterna para o próximo slide a cada 3 segundos
// setInterval(nextSlide, 3000);
const toggleButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.items-menu');

toggleButton.addEventListener('click', function () {
    menuItems.classList.toggle('show');

    // Verifica se o menu está aberto e muda o ícone do botão
    if (menuItems.classList.contains('show')) {
        toggleButton.textContent = '✕';  // Ícone de fechar
    } else {
        toggleButton.textContent = '☰';  // Ícone de menu hambúrguer
    }
});
