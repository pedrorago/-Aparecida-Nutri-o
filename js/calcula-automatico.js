var titulo = document.querySelector(".titulo");
titulo.textContent ="Aparecida Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length ; i++) {

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");
var pesoEValido = true;
var alturaValida = true;

if (peso <=0 || peso >=1000 ) {
  console.log("Peso invalido");
  pesoEValido = false;
  tdImc.textContent ="Peso invalido!"
  paciente.classList.add("paciente-invalido");
}
if (altura <=0 || altura >=3.00) {
  console.log("Altura invalida");
  alturaValida = false;
  tdImc.textContent ="Altura invalida!"
  paciente.classList.add("paciente-invalido");
}

if (pesoEValido && alturaValida) {
var imc = peso / (altura * altura);
tdImc.textContent = imc.toFixed (2);
}
function calcular() {
    var peso6 = Number(document.getElementById("peso6").value);
    var altura6 = Number(document.getElementById("altura6").value);
    var elemResult = document.getElementById("resultado");
    var imc6 = peso6 / (altura6 * altura6);

    if (elemResult.textContent === undefined) {
       elemResult.textContent = imc6.toFixed (2);
    }
    else { // IE
       elemResult.innerText = imc6.toFixed (2);
    }
}


}

function calcular() {
    var peso6 = Number(document.getElementById("peso6").value);
    var altura6 = Number(document.getElementById("altura6").value);
    var elemResult = document.getElementById("resultado");
    var imc6 = peso6 / (altura6 * altura6);

    if (elemResult.textContent === undefined) {
       elemResult.textContent = imc6.toFixed (2);
    }
    else { // IE
       elemResult.innerText = imc6.toFixed (2);
    }

}
