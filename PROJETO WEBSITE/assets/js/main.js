console.log('JS ok');

var hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function () {
	document.querySelector('.container').classList.toggle('show-menu');
});
