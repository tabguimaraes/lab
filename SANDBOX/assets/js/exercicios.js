// console.log("ok");

// let color = document.querySelector("#color");

// color.addEventListener("input", function () {
//   let body = document.querySelector("body");
//   body.style.background = color.value;
// });

/* 
Exercício: Calculadora de Cálculo de Férias
Descrição
Crie uma aplicação de console em JavaScript que calcula o valor das férias de um funcionário com base no salário mensal, tempo de serviço e o número de dias de férias a que o funcionário tem direito.

Requisitos

Entrada de Dados:
Salário mensal do funcionário.
Tempo de serviço do funcionário (em anos).
Número de dias de férias a que o funcionário tem direito.

Cálculo:
O cálculo das férias deve levar em consideração o adicional de 1/3 sobre o valor das férias, conforme a legislação brasileira.
O tempo de serviço influencia no cálculo, concedendo 3 dias adicionais de férias para cada 5 anos completos de serviço.

Saída:
O valor bruto das férias.
O valor do adicional de 1/3.
O valor total a ser recebido pelo funcionário (valor bruto + adicional de 1/3).

Dicas
Utilize funções para organizar o código e facilitar a leitura.
Considere o uso de estruturas de controle como condicionais e loops, se necessário.
Certifique-se de validar as entradas do usuário para evitar erros.
*/

// let salarioMensal, anosDeEmpresa, diasDeFerias, valorTotal, adicionalFerias, diasAdicionais;

// salarioMensal = 2000;
// adicionalFerias = salarioMensal * (1 / 3);
// valorTotal = salarioMensal + adicionalFerias;
// diasDeFerias = 30;
// anosDeEmpresa = 5;

// console.log(`O valor bruto das férias é de ${salarioMensal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
// console.log(`O valor adicional de 1/3 sobre as férias é de ${adicionalFerias.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
// console.log(`O valor total a ser recebido é de ${valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
// if (anosDeEmpresa >= 5) {
//   diasAdicionais = Math.floor(anosDeEmpresa / 5) * 3;
//   console.log(
//     `O funcionário terá direito a ${diasAdicionais} dias adicionais de férias, totalizando ${diasDeFerias + diasAdicionais} dias de férias.`
//   );
// } else {
//   console.log("O funcionário tem menos de 5 anos de empresa e não possui direito a dias adicionais de férias");
// }

/*
Exercício: Analisador de Notas de Alunos
Descrição
Crie uma aplicação em JavaScript que receba as notas de vários alunos, calcule a média de cada aluno e determine qual é a maior média, a menor média e a média geral da turma.

Requisitos
Entrada de Dados:

Um array contendo objetos, onde cada objeto representa um aluno e possui uma propriedade nome e uma propriedade notas (um array de números representando as notas).
Funções a Implementar:

Uma função para calcular a média de um array de notas.
Uma função para encontrar a maior média e a menor média.
Uma função para calcular a média geral da turma.
Saída:

A média de cada aluno.
A maior média e a menor média.
A média geral da turma.
*/

let alunos = [
  { nome: "João", notas: [5, 8, 6, 9.5] },
  { nome: "Maria", notas: [8, 8, 5, 7.5] },
  { nome: "Gabriel", notas: [5, 6, 6, 10] },
  { nome: "Lucia", notas: [7.5, 8, 6, 8] },
];

// console.log(alunos[0].nome);

let notaMedia = 0;
/*
alunos.forEach((aluno) => {
  // console.log(aluno.notas);
  aluno.notas.forEach((nota) => {
    notaMedia = notaMedia + nota;
    console.log(notaMedia);
    // console.log(`${aluno} ${Math.round(media)}`);
  });
});
*/
