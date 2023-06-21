console.log("OK");

document.querySelector("#gerar").addEventListener("click", executar);
document.querySelector("#jogos").addEventListener("change", atualizar);
const jogos = document.querySelector("#jogos");
const exibir = document.querySelector("#exibir");
let qtde;

function atualizar() {
  qtde = jogos.value;
  // Verificar se qtde de jogos é maior que zero e menor que 3 jogos:

  // switch (true) {
  //   case qtde <= 0:
  //     exibir.innerHTML = "Quantidade não pode ser menor ou igual a zero";
  //     break;
  //   case qtde > 3:
  //     exibir.innerHTML = "Quantidade não pode ser maior que 3 jogos";
  //     break;
  //   // case qtde === "":
  //   //   exibir.innerHTML = "Escolha a quantidade de jogos";
  //   //   break;
  //   default:
  //     // exibir.innerHTML = "Escolha a quantidade de jogos";
  //     break;
  // }

  if (qtde <= 0) {
    exibir.innerHTML = "Quantidade não pode ser menor ou igual a zero";
  }
  if (qtde > 3) {
    exibir.innerHTML = "Quantidade não pode ser maior que 3 jogos";
  }
}

function executar() {
  atualizar();

  if (qtde > 0 && qtde <= 3) {
    exibir.innerText = "";
    i = 0;
    while (i < qtde) {
      // Função para gerar números aleatórios
      function gerarNumero(min, max) {
        const r = Math.random() * (max - min) + min;
        // Método para arredondar o resultado para baixo, transformando o número em inteiro
        return Math.floor(r);
      }

      // Chamar a função e gerar de numeros de 01 a 60
      let numeroAleatorio = gerarNumero(1, 61);

      //Array para salvar os números
      let listaDeNumeros = [];

      // laço para salvar 6 números únicos dentro do array 'ListaDeNumeros'
      while (listaDeNumeros.length < 6) {
        listaDeNumeros.includes(numeroAleatorio)
          ? (numeroAleatorio = gerarNumero(1, 61))
          : listaDeNumeros.push(numeroAleatorio);
      }

      // Organizar o array por ordem crescente
      const resultado = listaDeNumeros.sort(function (a, b) {
        return a - b;
      });

      // console.log("##########################");
      // console.log(resultado);
      // console.log("##########################");
      const inserirResultado = document.createElement("p");
      inserirResultado.innerText = resultado;
      exibir.appendChild(inserirResultado);
      i++;
    }
    console.log(i);
  }
}
