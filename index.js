function chute() {
    var numeroSecreto = parseInt(Math.random() * 11)
    var numeroDigitado = document.getElementById("campo").value
    var resultado = document.getElementById("resultado")
    if (numeroDigitado == numeroSecreto) {
        resultado.innerHTML = "Você acertou o número"
    } else if (numeroDigitado > 10 || numeroDigitado < 0) {
        alert ("O número deve ser entre 0 e 10")
    } else {
        resultado.innerHTML = "Você errou o número secreto era " + numeroSecreto
    }
}

var jogador1 = { nome: "jogador 1", vitórias: 0, derrotas: 0, pontos: 0 }
var jogador2 = { nome: "jogador 2", vitórias: 0, derrotas: 0, pontos: 0 }

function calcularPontos(jogador) {
    var pontos = (jogador.vitórias * 3) - jogador.derrotas
    return pontos 
}

jogador1.pontos = calcularPontos(jogador1)
jogador2.pontos = calcularPontos(jogador2)

var jogadores = [jogador1, jogador2]

function exibirJogadores(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitórias + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onclick='adicionarVitória("+ i +")'>Vitória</button></td>"
    elemento += "<td><button onclick='adicionarDerrota("+ i +")'>Derrota</button></td>"
    elemento += "</tr>"
    } 
    
    var tabelaJogadores = document.getElementById("tabela")
    console.log(tabelaJogadores)
    tabelaJogadores.innerHTML = elemento
    
}

exibirJogadores(jogadores)

function adicionarVitória(i) {
    var jogador = jogadores[i]
    jogador.vitórias++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadores(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadores(jogadores)
}