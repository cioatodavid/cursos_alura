var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(1);
}

for (var i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;
    var imc = paciente[i].querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 500) {
        pesoValido = false;
        imc.textContent = "Peso inválido!";
        paciente[i].classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3) {
        alturaValida = false;
        imc.textContent = "Altura inválida!";
        paciente[i].classList.add("paciente-invalido");
    }
    if (pesoValido && alturaValida) {
        imc.textContent = calculaImc(peso, altura);
    }
}
