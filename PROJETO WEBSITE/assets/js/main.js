console.log('JS ok');

document
	.querySelector('.hamburguer')
	.addEventListener('click', () => document.querySelector('.container').classList.toggle('show-menu'));
//

const taxaPagina = 100;
const taxaScript = 1.1;
const taxaLayout = 500;
const taxaUrgencia = 1.1;

document.querySelector('#qtde').addEventListener('change', atualizarPreco);
document.querySelector('#js').addEventListener('change', atualizarPreco);
document.querySelector('#layout-sim').addEventListener('click', atualizarPreco);
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco);

function atualizarPreco() {
	const qtde = document.querySelector('#qtde').value;
	const preco = document.querySelector('#preco');
	const layoutSim = document.querySelector('#layout-sim').checked;
	const layoutNao = document.querySelector('#layout-nao');
	const js = document.querySelector('#js').checked;

	let informaPreco = qtde * taxaPagina;
	preco.innerHTML = `R$ ${informaPreco.toFixed(2)}`;

	if (js) {
		informaPreco *= taxaScript;
		preco.innerHTML = `R$ ${informaPreco.toFixed(2)}`;
	}

	if (layoutSim) {
		informaPreco = informaPreco + taxaLayout;
		preco.innerHTML = `R$ ${informaPreco.toFixed(2)}`;
	}

	if (layoutNao) {
		informaPreco = informaPreco - (taxaLayout - taxaLayout);
		preco.innerHTML = `R$ ${informaPreco.toFixed(2)}`;
	}

	if (qtde < 0) {
		preco.innerHTML = 'Quantidade deve ser maior que 0.';
	}

	console.log(qtde);
}
