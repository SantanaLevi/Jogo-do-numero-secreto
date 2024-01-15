let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumero();
console.log(numeroAleatorio)
let tentativas = 1;

function exibir(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirTextoInicial() {
    exibir('h1', 'Numero Secreto');
    exibir('p', 'escolha um numero entre 1 e 10');
}

exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        let tentativaFormatada = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `voce acertou o numero secreto com ${tentativas} ${tentativaFormatada}`;

        exibir('h1', 'acertou cagorelhote');
        exibir('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibir('p', `o numero secreto e menor que ${chute}`);
        } else {
            exibir('p', `o numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let limiteLista = listaDeNumerosSorteados.length;

    if (limiteLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    exibirTextoInicial();
    tentativas = 1;
    numeroAleatorio = gerarNumero();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}