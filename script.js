// Girar a imagem ao clicar
function turnCard(giro) {

    carta = giro.querySelector('.front-face');
    carta.classList.toggle('girarPfrente');
    console.log(carta);

    carta = giro.querySelector('.back-face');
    carta.classList.toggle('girarPtras');
    console.log(carta);
}