console.log('Conexão ok');

document.addEventListener('click', function (getEvent) {
	const elemento = getEvent.target;

	console.log(elemento);

	let numero = document.getElementById('numero');
	let valor = 0;
	if (elemento === document.getElementById('adicionar')) {
		valor = valor + 1;
		numero.innerHTML = valor;
	}
});
