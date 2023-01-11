// Girar a imagem ao clicar
function turnCard(giro) {

    carta = giro.querySelector('.front-face');
    carta.classList.add('girarPfrente');

    carta = giro.querySelector('.back-face');
    carta.classList.add('girarPtras');
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
    const elementos = ['bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'fiestaparrot', 'fiestaparrot', 'metalparrot', 'metalparrot', 'revertitparrot', 'revertitparrot', 'tripletsparrot', 'tripletsparrot', 'unicornparrot', 'unicornparrot']
    const arrCartas = [];
    while (arrCartas.length < numCartas * 2){
        arrCartas[arrCartas.length] = arrCartas.length;
    }

    // criar array com elementos e tamanho definido por usuário
    let novaArray = [];
    while (novaArray.length < numCartas * 2){
        novaArray[novaArray.length] = elementos[novaArray.length];
    }
    // embaralhar os elementos dentro da array
    novaArray.sort(comparador);

    function comparador() { 
	    return Math.random() - 0.5; 
    }

    // criar cartas para o usuário com quantidade definida por ele
    console.log(novaArray);

   
}

embaralhaArray();