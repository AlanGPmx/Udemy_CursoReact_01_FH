const persona = {
	nombre: 'Alan',
	apellido: 'Garduño',
	edad: 45,
	direccion: {
		calle: 'Calle falsa',
		ciudad: 'Ciudad falsa',
		estado: 'Estado falso',
		codigoPostal: '00000',
	},
};

const persona2 = { ...persona };
persona2.nombre = 'Juan';

console.log(persona);
console.log(persona2);
