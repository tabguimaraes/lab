console.log("conexão ok");

let posicoes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const tabuleiro = document.querySelectorAll(".tabuleiro");
console.log(tabuleiro);
// tabuleiro.addEventListener("click", mostrarClick);

// document.querySelectorAll(".tabuleiro").addEventListener("click", mostrarClick);

tabuleiro.forEach((item) => {
  item.addEventListener("click", function mostrarClick(evento) {
    console.log(evento);
    console.log(item);
    let jogadorX = "<p>X</p>";
    let jogador0 = "<p>0</p>";
    item.innerHTML = jogadorX;
    let jogadaAtual = item.innerHTML;

    let primeiraJogada = "<p>X</p>";

    if (item.innerText === "") {
      if (jogadaAtual === jogadorX) {
        item.innerHTML = jogador0;
        jogadaAtual = jogador0;
        console.log(jogadaAtual);
      }
      if (jogadaAtual === jogador0) {
        item.innerHTML = jogadorX;
        jogadaAtual = jogadorX;
        console.log(jogadaAtual);
      }
      //   let jogadaAtual = "";
    }
  });
});
