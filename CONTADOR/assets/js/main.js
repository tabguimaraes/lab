console.log('Conexão ok');

document.addEventListener('click', function (getEvent) {
	const elemento = getEvent.target;
	console.log(elemento);

	const numero = document.getElementById('numero');
	let count = 0;

	function increment() {
		count++;
		numero.innerHTML = count;
	}

	function decrement() {
		count--;
		numero.innerHTML = count;
	}

	if (elemento === document.getElementById('adicionar')) {
		increment();
	}

	if (elemento === document.getElementById('subtrair')) {
		decrement();
	}
});
