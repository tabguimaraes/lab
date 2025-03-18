let base = 11;
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
