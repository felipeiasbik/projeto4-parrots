let contacliques = 0;
const elementos = ['bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'fiestaparrot', 'fiestaparrot', 'metalparrot', 'metalparrot', 'revertitparrot', 'revertitparrot', 'tripletsparrot', 'tripletsparrot', 'unicornparrot', 'unicornparrot']
let carta1;
let carta2;
let ArrayGlobal = [];
let acertou = 0;
let numCartas = 0;

function comparador() { 
    return Math.random() - 0.5; 
}

function fim(){
    alert(`Você ganhou em ${contacliques} jogadas!`);
}

function virar(){
    carta1.parentNode.classList.remove('revelar');
    carta2.parentNode.classList.remove('revelar');
}

// Girar a imagem ao clicar
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




/*let cartaselec1;
let cartaselec2;

contacliques++;

if (contacliques % 2 !== 0){  
    carta1 = turnCard().innerHTML;
    console.log(carta1.parentNode);
} else {
    cartaselec2 = giro.querySelector('.front');
    carta2 = cartaselec2.innerHTML;
    cartaselec2.parentNode.classList.add('revelar');
    console.log(carta2);
    if (carta1 == carta2){
        acertou++;
        cartaselec1.parentNode.removeAttribute('onclick');
        cartaselec2.parentNode.removeAttribute('onclick');
        if (acertou * 2 == numCartas){
            setTimeout(fim,50);
        }
    } else if (carta1 !== carta2) {
        cartaselec1 = giro.querySelector('.front');
        cartaselec1.parentNode.classList.remove('revelar');
        //cartaselec2 = giro.querySelector('.front');
        //cartaselec2.parentNode.classList.remove('revelar');
        console.log(cartaselec1.parentNode);
        console.log(cartaselec2.parentNode);
    }
}*/
    

//embaralhar array
// Perguntar quantas cartas quer jogar
numCartas = prompt('Com quantas cartas quer jogar?');

// enquanto valor for menor que 4 ou maior que 14, não for par ou não for número,
while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14){
    //retornar para colocar outro valor dentro dos parêmtros necessários
    alert ('Valor inválido. Coloque um número par entre 4 e 14.')
    //colocar prompt novamente com variável para armazenar número de cartas
    numCartas = prompt('Com quantas cartas quer jogar?');
}

//se número for par e estiver entre 4 e 14, seguir para próxima etapa
// criar uma array (com os elementos  de imagens) que terá o tamanho limitado ao número do usuário * 2 (duas cartas)
const arrCartas = [];
while (arrCartas.length < numCartas ){
    arrCartas[arrCartas.length] = arrCartas.length;
}

// criar array com elementos e tamanho definido por usuário
let novaArray = [];
while (novaArray.length < numCartas ){
    novaArray.push(elementos[novaArray.length]);
}

// embaralhar os elementos dentro da array
novaArray.sort(comparador);
ArrayGlobal = novaArray;
console.log(ArrayGlobal);
// criar cartas para o usuário com quantidade definida por ele

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


//codigo antigo cartas
/*<div class="card" onclick="turnCard(this)">
    <div class="front-face face">
        <img alt="Parte de trás da carta com imagem de um papagaio" src="img/back.png">
    </div>
    <div class="back-face face">
        <img alt="Parte da frente da carta com um papagaio animado" src="img/${novaArray[contar]}.gif">
    </div>
</div>
*/


//Verificar se duas cartas são iguais




/*if (contacliques % 2 !== 0){
    let cartaimpar = novaArray[aumenta];
    aumenta++;
    if (cartaimpar !== novaArray[aumenta]){
        carta = giro.querySelector('.front-face');
        carta.classList.remove('girarPfrente');
    
        carta = giro.querySelector('.back-face');
        carta.classList.remove('girarPtras');
    }
}else{

}*/
   
