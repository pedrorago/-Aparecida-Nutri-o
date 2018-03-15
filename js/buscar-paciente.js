var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando...");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    var erro = document.querySelector("#erro-ajax");

    if( xhr.status == 200) {
      erro.classList.add("invisivel");

      var resposta = xhr.responseText;

      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });


    }else {

      erro.classList.remove("invisivel");
      console.log( xhr.status);
      console.log( xhr.responseText);
    }


  });
  xhr.send();
});
