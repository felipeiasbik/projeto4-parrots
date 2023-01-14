let contacliques = 0;
const elementos = ['bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'fiestaparrot', 'fiestaparrot', 'metalparrot', 'metalparrot', 'revertitparrot', 'revertitparrot', 'tripletsparrot', 'tripletsparrot', 'unicornparrot', 'unicornparrot']
let carta1;
let carta2;
let ArrayGlobal = [];
let acertou = 0;
let numCartas = 0;
let segundos = 0;
let marcatempo = 0;

function tempo(){
marcatempo = setInterval(timeron,1000);
}
tempo();

function timeron(){
    segundos++;
    document.querySelector('.relogio').innerHTML = segundos;

    if (acertou === numCartas / 2){
        clearInterval(marcatempo);
    }
}

function comparador() { 
    return Math.random() - 0.5; 
}

function fim(){
    alert(`Você ganhou em ${contacliques} jogadas! A duração do jogo foi de ${segundos} segundos!`);
}

function virar(){
    carta1.parentNode.classList.remove('revelar');
    carta2.parentNode.classList.remove('revelar');
}

function turnCard(giro) {
    let girar = giro.querySelector('.front');
    girar.parentNode.classList.add('revelar');
    contacliques++;
    if (contacliques % 2 !== 0 ){
        carta1 = giro.querySelector('.front');
        carta1.parentNode.removeAttribute('onclick');
    } else if( contacliques % 2 === 0 ){
        carta2 = giro.querySelector('.front');
        carta2.parentNode.removeAttribute('onclick');
        if (carta1.innerHTML === carta2.innerHTML) {
            acertou++;
        } else if (carta1 !== carta2) {
            setTimeout(virar,1000);
            carta1.parentNode.setAttribute('onclick', 'turnCard(this)');
            carta2.parentNode.setAttribute('onclick', 'turnCard(this)');
        }
        if (acertou === numCartas / 2){
            setTimeout(fim,50);
        }
    }

}

numCartas = prompt('Com quantas cartas quer jogar?');

while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14){
    alert ('Valor inválido. Coloque um número par entre 4 e 14.')
    numCartas = prompt('Com quantas cartas quer jogar?');
}

const arrCartas = [];
while (arrCartas.length < numCartas ){
    arrCartas[arrCartas.length] = arrCartas.length;
}

let novaArray = [];
while (novaArray.length < numCartas ){
    novaArray.push(elementos[novaArray.length]);
}

novaArray.sort(comparador);
ArrayGlobal = novaArray;
console.log(ArrayGlobal);

contar = 0;
while (contar < numCartas){
    let criarCartas = document.querySelector('.area-cartas');
    criarCartas.innerHTML = criarCartas.innerHTML + `
        <div class="card" data-test="card" onclick="turnCard(this)">
            <div class="front face">
                <img data-test="face-up-image" alt="Parte de trás da carta com imagem de um papagaio" src="img/${novaArray[contar]}.gif">
            </div>
            <div class="back face">
                <img data-test="face-down-image" alt="Parte da frente da carta com um papagaio animado" src="img/back.png">
            </div>
        </div>
        `;
    contar++;
}   
