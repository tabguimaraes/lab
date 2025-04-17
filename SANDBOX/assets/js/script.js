/* let base = 11;
let ladoEsquerdo = 11;
let ladoDireito = 11;
let triangulo;

function validaTriangulo() {
  if (base + ladoEsquerdo > ladoDireito && base + ladoDireito > ladoEsquerdo && ladoEsquerdo + ladoDireito > base) {
    tipoTriangulo();
  } else {
    console.log("Não é possível formar um triângulo");
  }
}

validaTriangulo();

function tipoTriangulo() {
  triangulo =
    base === ladoEsquerdo && base === ladoDireito //if definido por ordem de força de verificação, sendo && mais forte e seguindo para as validações mais fracas
      ? "Equilátero"
      : base === ladoEsquerdo || base === ladoDireito || ladoEsquerdo === ladoDireito
      ? "Isóceles"
      : "Ecaleno";
  console.log(`Triângulo ${triangulo}`);
}

//Menu

let opcaoSelecionada = 2;

switch (opcaoSelecionada) {
  case 1:
    console.log("Quadrado");
    function quadrado() {}
    break;
  case 2:
    console.log("Retangulo");
    function retangulo() {}
    break;
  case 3:
    console.log("Circulo");
    function circulo() {}
    break;
  case 4:
    console.log("Triângulo");
    function callTriangulo() {}
    break;
  case 5:
    console.log("Trapézio");
    function trapézio() {}
    break;

  default:
    console.log("Opção inválida");
    break;
}
 */

//funcao para iniciar o jogo / reiniciar (status 1 ou 0)
//funcao para salvar a escolha do usuario em uma variavel
// funcao para inserir a escolha do player no tabuleiro (verificar se o campo não está ocupado por outra peça)
// funcao para verificar se o player / computador venceu o jogo

let choice = 1;

let tabuleiro = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];


let jogador, adversario;

function novoJogo(iniciar) {
  // inserir função para limpar tabuleiro
  selecionarPeça();
}

function selecionarPeça(peçaSelecionada) {
  jogador = peçaSelecionada;
  jogador === "X" ? (adversario = "O") : (adversario = "X");
}

function selecionarPosicao(choice) {
  tabuleiro.forEach((choice) => {
    tabuleiro.pop(choice);
  });
}

selecionarPosicao(choice);

console.log(tabuleiro);
console.log(tabuleiro.length);
