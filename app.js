function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaNumeros = [];
    let resultado = document.getElementById("resultado");

    for(var i = 0; i < quantidade; i++){
        numero = gerarNumeroAleatorio(de, ate);

        while(listaNumeros.includes(numero)){
            numero = gerarNumeroAleatorio(de, ate);
        }
        listaNumeros.push(numero);
    }

    resultado.textContent = `Números sorteados: ${listaNumeros}`;
}