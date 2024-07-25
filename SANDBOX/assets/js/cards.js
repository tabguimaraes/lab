console.log("ok");

function cardSoma() {
  let form1, numero1, numero2, btnResposta, resultado, respostaCard1;
  numero1 = document.querySelector("#numero1");
  numero2 = document.querySelector("#numero2");
  btnResposta = document.querySelector("#btnResposta");
  form1 = document.querySelector("#form1");
  respostaCard1 = document.querySelector("#respostaCard1");

  form1.addEventListener("submit", function (evento) {
    evento.preventDefault();
  });

  btnResposta.addEventListener("click", function () {
    entrada1 = Number(numero1.value);
    entrada2 = Number(numero2.value);
    resultado = entrada1 + entrada2;
    respostaCard1.innerHTML = ` `;
    respostaCard1.innerHTML = `Resposta ${resultado}`;
    console.log(resultado);
  });
}

cardSoma();
