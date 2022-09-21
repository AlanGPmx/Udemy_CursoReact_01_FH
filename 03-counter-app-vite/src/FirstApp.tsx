//PropTypes no se instala con Vite, pero si con Create-React-App
import PropTypes from 'prop-types';
import { IPropsFirstApp } from './interfaces/global.interface';

// React maneja como regla indispensable que el Componente Funcionaltenga un nodo padre
const newMessage = {
	to: 'Alan',
	from: 'System',
	message: 'Hello World',
};

// En medida de lo posible se debedejar las funciones fuera del componente
const Saludo = (nombre: string, noEmpleado: number) => {
	return `Hola ${nombre}, tu Número de Empleado es ${getNumeroEmpleado(
		noEmpleado
	)}`;
};

const getNumeroEmpleado = (noEmpleado: number) => {
	return `${noEmpleado}`;
};

export const FirstApp = (props: IPropsFirstApp) => {
	const { title, noEmpleado } = props;
	return (
		<>
			<h2>{title}</h2>
			<p>{Saludo('Alan', noEmpleado)} </p>
			<code>{JSON.stringify(newMessage)}</code>
		</>
	);
};

// Es la alternativa en JS y React al tipado que TS ofrece
FirstApp.propTypes = {
	noEmpleado: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
};

//La alternativa para asignar un valor por defecto a las Props y no hacerlo en crudo en los argumentos del componente
FirstApp.defaultProps = {
	fechaIngreso: '2020-01-01',
	noEmpleado: 0,
	title: 'La desestructuración con TS y alternativa con PropTypes',
};
