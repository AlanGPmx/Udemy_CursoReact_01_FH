import { useState } from 'react';
import PropTypes from 'prop-types';
import { IPropsCounterApp } from './interfaces/global.interface';

export const CounterApp = (prop: IPropsCounterApp) => {
	const { valueInitial } = prop;
	const [count, setCount] = useState(valueInitial);

	const handleAdd = () => setCount(count + 1);

	const handleSubstract = () => {
		setCount((counter) => counter - 1);
	};

	const handleReset = () => {
		setCount(valueInitial);
	};

	return (
		<>
			<h1>CounterAPP</h1>
			<h2>{count}</h2>
			<button data-testid="btnIncrementarUno" onClick={handleAdd}>
				+1
			</button>{' '}
			<button data-testid="btnDecrementarUno" onClick={handleSubstract}>
				-1
			</button>
			<button aria-label="btnResetearValor" onClick={handleReset}>
				Reset
			</button>
		</>
	);
};

// Es la alternativa en JS y React al tipado que TS ofrece
CounterApp.propTypes = {
	valueInitial: PropTypes.number.isRequired,
};

//La alternativa para asignar un valor por defecto a las Props y no hacerlo en crudo en los argumentos del componente
CounterApp.defaultProps = {
	valueInitial: 0,
};
