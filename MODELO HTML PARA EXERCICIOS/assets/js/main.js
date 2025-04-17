console.log("Conexão ok");

const container = document.querySelector(".container");
// const btn = document.querySelector("#btn");
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
  container.append(novoElemento);
});

// async function getIP() {
//   const response = await fetch("https://api.myip.com");
//   // response.json();

//   console.log(response.json());
// }

// btn.addEventListener("click", function (event) {
//   event.preventDefault;

//   getIP();
// });

document.getElementById("btn").addEventListener("click", async () => {
  fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((dados) => {
      document.getElementById("ip").textContent = `IP: ${dados.ip}`;
    })
    .catch((erro) => console.error("Erro:", erro));
});
