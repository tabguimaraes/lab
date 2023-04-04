console.log("conexão ok");

const tabuleiro = document.querySelectorAll(".tabuleiro");
console.log(tabuleiro);
// tabuleiro.addEventListener("click", mostrarClick);

// document.querySelectorAll(".tabuleiro").addEventListener("click", mostrarClick);

tabuleiro.forEach((item) => {
  item.addEventListener("click", function mostrarClick(evento) {
    console.log(evento);
    console.log(item);
    let jogadaX = "<p>X</p>";
    let jogada0 = "<p>0</p>";
    item.innerHTML = jogadaX;
    let jogadaAtual = item.innerHTML;

    let primeiraJogada = "<p>X</p>";

    if (item.innerText === "") {
      if (jogadaAtual === jogadaX) {
        item.innerHTML = jogada0;
        jogadaAtual = jogada0;
        console.log(jogadaAtual);
      }
      if (jogadaAtual === jogada0) {
        item.innerHTML = jogadaX;
        jogadaAtual = jogadaX;
        console.log(jogadaAtual);
      }
      //   let jogadaAtual = "";
    }
  });
});
