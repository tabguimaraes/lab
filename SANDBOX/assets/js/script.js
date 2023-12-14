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

const isTruthy = "125";

function checkTruthy(isTruthy) {
  // if(!!isTruthy)
  return console.log(!!isTruthy);
}

checkTruthy(isTruthy);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  total: 20,
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.log(quadrado.area(12));

quadrado.total = 25;

console.log(quadrado.total);

console.log(Math.round(7.89333333));
