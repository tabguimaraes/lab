console.log("ok");

const cep = document.querySelector("#cep");
const btn = document.querySelector("#btn");

function buscarCEP() {
  btn.addEventListener("click", () => {
    // if( )

    const cepDigitado = `https://viacep.com.br/ws/${cep.value}/json`;
    console.log(cepDigitado);
  });
}

buscarCEP();
