console.log('OK');

document.querySelector('#gerar').addEventListener('click', somar);
let resultado = 0;

function somar(min, max) {
	// min = Math.ceil(1);
	// max = Math.floor(60);
	min = 1;
	max = 60;
	console.log(Math.floor(Math.random() * (max - min + 1)) + min); //adicionar esse resultado dentro de um array e limitar ele a 6 números diferentes e em ordem crescente
}
