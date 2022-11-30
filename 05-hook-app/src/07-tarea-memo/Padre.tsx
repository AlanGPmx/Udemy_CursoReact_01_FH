import {Hijo} from './Hijo';
import {useState, useCallback} from 'react';

export const Padre = () => {
	const numeros = [2, 4, 6, 8, 10];
	const [valor, setValor] = useState(0);

	const incrementFather = useCallback((n: number) => {
		setValor((valor) => valor + n);
	}, []);

	const incrementar = (num: number) => {
		setValor(valor + num);
	};

	return (
		<div>
			<h2 className='text-center mb-5'>10.-Padre</h2>
			<p> Total: {valor} </p>

			<hr />

			{numeros.map((n) => (
				<Hijo key={n} numero={n} incrementar={incrementFather} />
			))}
			{/* <Hijo /> */}
		</div>
	);
};
