// document.addEventListener("DOMContentLoaded", function() {
//     const conteudos = [
//         {
//             imagemabout:"/src/images/homemmulher.jpg"
//         },
//         {
//             imagemabout:"/src/images/funcionariosrack.jpg"
//         }
//     ];

//     let index = 0;

//     function atualizarConteudo() {
//         const imagem = document.getElementById("imagemabout");

//         //Adiciona classe
//         imagem.classList.add("fade-out");

//         //atualiza o conteudo

//         setTimeout(() => {
//             imagem.src = conteudos[index].imagemabout;

//             //remove fade-out
//             imagem.classList.remove("fade-out");

//             imagem.classList.add("fade-in");

//         //remove fade-in apos a animaçao
//         setTimeout(() => {
//             imagem.classList.remove("fade-in");
//         }, 1000);
//         //atualiza o indice
//         index = (index + 1) % conteudos.length;
//         }, 1000); // tempo ddeve corresponder a o fade-out
//     }

//     setInterval(atualizarConteudo, 6300); // intervalo na img
// })