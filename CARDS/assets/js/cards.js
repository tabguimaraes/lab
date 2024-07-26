function cardSoma() {
  let formCardSoma, inputSoma1, inputSoma2, btnSomaSoma, resultado, linhaRespostaSoma;
  inputSoma1 = document.querySelector("#inputSoma1");
  inputSoma2 = document.querySelector("#inputSoma2");
  btnSomaSoma = document.querySelector("#btnSoma");
  formCardSoma = document.querySelector("#formCardSoma");
  linhaRespostaSoma = document.querySelector("#linhaRespostaSoma");

  formCardSoma.addEventListener("submit", function (evento) {
    evento.preventDefault();
    entrada1 = +inputSoma1.value;
    entrada2 = +inputSoma2.value;
    resultado = entrada1 + entrada2;
    linhaRespostaSoma.innerHTML = ` `;
    linhaRespostaSoma.innerHTML = `Resposta ${resultado}`;
    console.log(resultado);
  });
}

cardSoma();

function switchColor() {
  let card2, mudarCor, formSwitchColor;
  card2 = document.querySelector("#card2");
  formSwitchColor = document.querySelector("#formSwitchColor");
  mudarCor = document.querySelector("#mudarCor");

  formSwitchColor.addEventListener("submit", function (evento) {
    evento.preventDefault();
    card2.classList.toggle("cardVermelho");
  });
}

switchColor();

function calculoMedia() {
  let formCardMedia, inputMedia, btnMedia, linhaRespostaMedia;
  formCardMedia = document.querySelector("#formCardMedia");
  inputMedia = document.querySelector("#inputMedia");
  btnMedia = document.querySelector("#btnMedia");
  linhaRespostaMedia = document.querySelector("#linhaRespostaMedia");

  formCardMedia.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let media = +inputMedia.value;
    if (media >= 6) {
      linhaRespostaMedia.innerHTML = "";
      linhaRespostaMedia.innerHTML = `Aprovado`;
    } else {
      linhaRespostaMedia.innerHTML = "";
      linhaRespostaMedia.innerHTML = `Reprovado`;
    }
  });
}

calculoMedia();

function switchBG() {
  let card4, formSwitchBG, pInsertBG, btnSwitchBG;

  card4 = document.querySelector("#card4");
  formSwitchBG = document.querySelector("#formSwitchBG");
  pInsertBG = document.querySelector("#pInsertBG");
  btnSwitchBG = document.querySelector("#btnSwitchBG");

  formSwitchBG.addEventListener("submit", (evento) => {
    evento.preventDefault();
    card4.classList.toggle("insertBG");
    pInsertBG.classList.toggle("pInsertBG");
  });
}
switchBG();
