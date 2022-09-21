const saludar = function (nombre) {
	return `Hola ${nombre}`;
};

/* const despedir = (nombre) => {
	return `Adios ${nombre}`;
}; */

const despedir = (nombre) => `Adios ${nombre}`;

console.log(saludar('Alan'));
console.log(despedir('Alan'));

const getUser = () => ({
	uid: 1050912,
	nombre: 'Alan',
});

console.log(getUser());

const getUsuarioActivo = (nombre) => ({
	uid: 1050912,
	nombre: nombre,
});

const usuarioActivo = getUsuarioActivo('Dania');
console.log(usuarioActivo);
