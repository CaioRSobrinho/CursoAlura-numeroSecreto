function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)){

        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>O jogo terminou.</h2>
            <h3>Evite falar Game over da proxima vez u.u</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "red";
            console.log('Deu Certo');
        }
        else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }
    
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}
        </div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `   
    }
    else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-regular fa-horizontal-rule"></i></div>
        `
    }
    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-plus"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})