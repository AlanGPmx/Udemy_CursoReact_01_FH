const _useState = (valor) => {
	return [
		valor,
		() => {
			console.log(`Se asigno el nombre de ${valor}`);
		},
	];
};

const [nombre, setNombre] = _useState('Alan GP');

console.log(nombre);
setNombre();
