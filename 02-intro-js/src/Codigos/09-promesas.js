// Promesas

import { getHeroeById } from './08-imp-exp';

const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const heroe = getHeroeById(id);
			typeof heroe === 'undefined'
				? reject('No se encontraron datos...')
				: resolve(heroe);
		}, 3000);
	});
};

getHeroeByIdAsync(2).then(console.log).catch(console.error);
