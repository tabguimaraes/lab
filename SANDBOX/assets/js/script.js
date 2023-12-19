console.log("conexão ok");

/*SWITCH
O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão (usando a comparação de igualdade estrita (===)) transferindo assim o controle para a cláusula encontrada e em seguida executando as instruções associadas.
*/

// let valorEntrada = 60,
//   valor1 = 2,
//   valor2 = 4,
//   valor3 = 6,
//   valor4 = 8,
//   valor5 = 10;

// switch (valorEntrada) {
//   case valor1:
//     console.log(`O número ${valor1} pertence a variável valor1`);
//     break;
//   case valor2:
//     console.log(`O número ${valor2} pertence a variável valor2`);
//     break;
//   case valor3:
//     console.log(`O número ${valor3} pertence a variável valor3`);
//     break;
//   case valor4:
//     console.log(`O número ${valor4} pertence a variável valor4`);
//     break;
//   case valor5:
//     console.log(`O número ${valor5} pertence a variável valor5`);
//     break;
//   default:
//     console.log("O número digitado não está em nenhuma variável");
// }

/*
Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

Todo o resto é truthy
*/

// let checarTruthy = "";

// if (!!checarTruthy) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// function imc(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(imc.toFixed(1));
// }

// imc(80, 1.8); // retorna o imc
// console.log(imc(80, 1.8)); // retorna o imc e undefined

// const body = document.body;
// console.log(body);

// body.addEventListener("click", vcClicou);

// function vcClicou() {
//   return console.log("Vc clicou");
// }

// const isTruthy = " ";

// function checkTruthy(isTruthy) {
//   !!isTruthy ? console.log(`É truthy`) : console.log(`Não é truthy`);
// }
// checkTruthy(isTruthy);

// // FORMA RESUMIDA DE FAZER A CHECAGEM, POIS SÓ PODE TER 2 RESULTADOS POSSÍVEIS (VERDADEIRO OU FALSO)
// !!isTruthy ? console.log("teste") : console.log("não é teste");

// isEven = (valor) => {
//   valor % 2 === 0 ? console.log("É par") : console.log("É impar");
// };

// isEven(5);

// let preco = (+"3451545,16".replace(",", ".")).toLocaleString("en-us");
// let valorAjustado = +preco.replaceAll(",", "");

// const formattedNumberPt = preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// console.log(preco, typeof preco);
// console.log(valorAjustado, typeof valorAjustado);

/* const listaInteiros = [-85, 25, 59, 19, -59, -47, 62, -1, 34, -22, -42, 11, -59];

listaInteiros.forEach((item) => {
  item !== 34 ? console.log(`Número ${item}`) : console.log(`Número ${item} encontrado`);
}); */

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

/* function Dom(elements) {
  this.element = document.querySelectorAll(elements);
  this.addClass = (elementClass) => {
    this.element.forEach((itens) => {
      itens.classList.add(elementClass);
    });
  };
  this.removeClass = (elementClass) => {
    this.element.forEach((itens) => {
      itens.classList.remove(elementClass);
    });
  };
}

const listaLi = new Dom("li");
listaLi.addClass("ativo");
listaLi.removeClass("ativo");

listaLi.element.forEach((item) => {
  console.log(item);
});

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = () => {
  return `pessoa andou`;
};

// console.log(Pessoa.andar());
 */
/* let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

console.log(html);

html = html.replaceAll("section", "ul").replaceAll("div", "li");
console.log(html);

let teste = "1111";
console.log(teste);

teste = teste.replaceAll("1", "2");
console.log(teste); */

function inputValue(input) {
  const inputValue = document.querySelector("input");

  inputValue += input;
}
