console.log("Conexão ok");

const container = document.querySelector(".container");
let novoElemento;

const elementos = [
  { tag: "p", texto: "Esse é um parágrafo" },
  { tag: "div", texto: "Essa é uma div" },
  { tag: "footer", texto: "Esse é um footer" },
  { tag: "section", texto: "Essa é uma section" },
];

elementos.forEach((item) => {
  novoElemento = document.createElement(item.tag);
  novoElemento.innerText = item.texto;
  container.appendChild(novoElemento);
});
