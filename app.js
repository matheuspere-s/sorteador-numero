let botaoReiniciarAtivo = false;

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


    if (!botaoReiniciarAtivo) {
        
        alteraStatusBotaoReiniciar();
        botaoReiniciarAtivo = true; // Atualiza o estado do botão
        console.log(botaoReiniciarAtivo);
    }
}




function alteraStatusBotaoReiniciar(){
    let alteraBotaoReiniciar = document.getElementById('btn-reiniciar');
    if ( alteraBotaoReiniciar.classList.contains("container__botao-desabilitado")){
        alteraBotaoReiniciar.classList.remove("container__botao-desabilitado");
        alteraBotaoReiniciar.classList.add("container__botao"); 
        alteraBotaoReiniciar.removeAttribute('disabled');
    }else{
        alteraBotaoReiniciar.classList.remove("container__botao");
        alteraBotaoReiniciar.classList.add("container__botao-desabilitado");
        alteraBotaoReiniciar.setAttribute('disabled', 'true');
    }
    
}


function reiniciar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById("resultado").textContent = "Números sorteados:  nenhum até agora";
    
    alteraStatusBotaoReiniciar();
    botaoReiniciarAtivo = false;
}