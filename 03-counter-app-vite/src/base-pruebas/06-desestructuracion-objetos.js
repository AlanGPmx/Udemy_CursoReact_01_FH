const persona = {
	nombre: 'Alan',
	edad: 23,
	noEmpleado: 1050912,
};

const { nombre: nombrePersona, noEmpleado: noEmp } = persona;

console.log(nombrePersona, noEmp);

const _useContext = ({
	nombre,
	edad,
	noEmpleado,
	puesto = 'Desarrollador',
}) => {
	return {
		nombrePila: nombre,
		anios: edad,
		noEmp: noEmpleado,
		cargo: puesto,
		latlng: {
			lat: 12.13245,
			lng: -131.13242,
		},
	};
};

const { nombrePila, anios, latlng } = _useContext(persona);
const { lat, lng } = latlng;

console.log(nombrePila, anios);
console.log(lat, lng);
