import heroes from './data/heroes.js';

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroeByOwner = (owner) =>
	heroes.filter((heroe) => heroe.owner === owner);

export { getHeroeById, getHeroeByOwner };
