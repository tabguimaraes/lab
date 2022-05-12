console.log('JS ok');

document
	.querySelector('.hamburguer')
	.addEventListener('click', () => document.querySelector('.container').classList.toggle('show-menu'));
//
