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

// const display = document.getElementById("display");

// function inputValue(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

/* const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
[15, 10, 20, 25];
console.log(tempoAulas);

const puxarNomes = (aula) => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
 */

/* const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },

  teste: "Adicionado",
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);
console.log(moto);
 */

// Retorne o valor total das compras
// const compras = [
//   {
//     item: "Banana",
//     preco: "R$ 4,99",
//   },
//   {
//     item: "Ovo",
//     preco: "R$ 2,99",
//   },
//   {
//     item: "Carne",
//     preco: "R$ 25,49",
//   },
//   {
//     item: "Refrigerante",
//     preco: "R$ 5,35",
//   },
//   {
//     item: "Quejo",
//     preco: "R$ 10,60",
//   },
// ];

// let precoItem = 0;
// compras.forEach((item) => {
//   precoItem += +item.preco.replace("R$ ", "").replace(",", ".");
// });
// console.log(`A soma total dos itens da lista é de ${precoItem.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}.`);

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// function descricaoCarro(marca, ano) {
//   console.log(marca + " " + ano);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro(carro.marca, carro.ano);
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro) // Ford 2018

// const listaCaracteres = `<section>
// <p>Lobo-cinzento (nome científico:Canis lupus) é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.</p>
// <p>Os lobos-cinzentos são tipicamente predadores ápice nos ecossistemas que ocupam. Embora não sejam tão adaptáveis à presença humana como geralmente ocorre com as demais.</p>
// <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude.</p>
// <p>Os lobos são capazes de percorrer longas distâncias com uma velocidade média de 10 quilômetros por hora e são conhecidos por.</p>
// </section>
// `;

// let ArrayList = listaCaracteres.replaceAll(" ", "").split("");
// console.log(ArrayList.length);

// console.log(listaCaracteres);

// const paragrafos = document.querySelectorAll("p");

// let listaParagrafos = 0;

// paragrafos.forEach((item) => {
//   listaParagrafos += item.innerText.length;
// });
// console.log(listaParagrafos);
/* 
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => {
  console.log(respostas); // Array com ambas respostas
}); */

let pokeID = 2;

const pokeAPI = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`;

const opcoes = {
  body: '{"name":}',
};

fetch(pokeAPI);

console.log(pokeAPI);
