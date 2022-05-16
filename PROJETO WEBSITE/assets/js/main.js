console.log('JS ok');

document
	.querySelector('.hamburguer')
	.addEventListener('click', () => document.querySelector('.container').classList.toggle('show-menu'));
//

document.querySelector('#qtde').addEventListener('change', atualizarPreco);

function atualizarPreco() {
	const qtde = document.querySelector('#qtde').value;
	console.log(qtde);
}
