console.log("OK");

document.querySelector("#gerar").addEventListener("click", executar);

exibir = document.querySelector("#exibir");

function executar() {
  // Função para gerar números aleatórios
  function gerarNumero(min, max) {
    const r = Math.random() * (max - min) + min;
    // Método para arredondar o resultado para baixo, transformando o número em inteiro
    return Math.floor(r);
  }

  // Chamar a função e gerar de numeros de 1 a 60
  let numeroAleatorio = gerarNumero(1, 60);

  //Array para salvar os números
  let listaDeNumeros = [];

  // laço para salvar 6 números únicos dentro do array 'ListaDeNumeros'
  while (listaDeNumeros.length < 6) {
    listaDeNumeros.includes(numeroAleatorio)
      ? (numeroAleatorio = gerarNumero(1, 60))
      : listaDeNumeros.push(numeroAleatorio);
  }

  // Organizar o array por ordem crescente
  resultado = listaDeNumeros.sort(function (a, b) {
    return a - b;
  });

  console.log("##########################");
  console.log(resultado);
  console.log("##########################");
  exibir.innerHTML = resultado;
  // console.log(gerarNumero);
}
