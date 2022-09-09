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