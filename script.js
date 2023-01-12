let contacliques = 0;
const elementos = ['bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'fiestaparrot', 'fiestaparrot', 'metalparrot', 'metalparrot', 'revertitparrot', 'revertitparrot', 'tripletsparrot', 'tripletsparrot', 'unicornparrot', 'unicornparrot']
let carta1;
let carta2;
let ArrayGlobal = [];

// Girar a imagem ao clicar
function turnCard(giro) {

    carta = giro.querySelector('.front-face');
    carta.classList.add('girarPfrente');

    carta = giro.querySelector('.back-face');
    carta.classList.add('girarPtras');

    contacliques++;
    console.log(contacliques);

}


//função para embaralhar array
function embaralhaArray() {
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

    function comparador() { 
	    return Math.random() - 0.5; 
    }
    ArrayGlobal = novaArray;
    console.log(ArrayGlobal);
    // criar cartas para o usuário com quantidade definida por ele

    contar = 0;
    while (contar < numCartas){
        let criarCartas = document.querySelector('.area-cartas');
        criarCartas.innerHTML = criarCartas.innerHTML + `
            <div class="card" onclick="turnCard(this)">
                <div class="front-face face">
                    <img alt="Parte de trás da carta com imagem de um papagaio" src="img/back.png">
                </div>
                <div class="back-face face">
                    <img alt="Parte da frant da carta com um papagaio animado" src="img/${novaArray[contar]}.gif">
                </div>
            </div>
            `;
        contar++;
    }

    //Verificar se duas cartas são iguais
    /*for (let aumenta = 0; aumenta < ArrayGlobal.length; aumenta++){
        carta1 = ArrayGlobal[aumenta];
        carta2 = ArrayGlobal[aumenta + 1];
        console.log(carta1, carta2);
        if (carta1 != carta2){
            document.querySelectorAll('.front-face').classList.remove('girarPfrente');
            document.querySelectorAll('.back-face').classList.remove('girarPtras');
        }else{
            console.log('oi', carta1, carta2);
            carta1 = "";
            carta2 = "";
        }
    }*/


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
   
}

embaralhaArray();