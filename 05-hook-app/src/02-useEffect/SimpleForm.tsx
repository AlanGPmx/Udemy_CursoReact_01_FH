import {ChangeEvent, useEffect, useState} from 'react';
import {Message} from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
	});

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormState({...formState, [name]: value});
	};

	useEffect(() => {
		console.info(
			'Este Hook, llamado useEffect, sin arreglo de dependencias como segundo argumento, se ejecuta cada vez que se renderiza el componente SimpleForm, o por así decirlo, una sola vez'
		);
	}, []);

	useEffect(() => {
		console.info(
			'Este Hook, llamado useEffect, se lanzará cada vez que su dependencia cambie, en este caso, el valor de formState'
		);
	}, [formState]);

	useEffect(() => {
		console.info(
			'Este Hook, llamado useEffect, se lanzará cada vez que su dependencia cambie, en este caso, el valor de formState.email'
		);
	}, [formState.email]);

	return (
		<>
			<h2 className='text-center mb-5'>3-. Simple Form - useEffect</h2>

			<input
				type='text'
				className='form-control w-75 mx-auto'
				placeholder='Username'
				name='username'
				value={formState.username}
				onChange={onInputChange}
			/>

			<input
				type='email'
				className='form-control w-75 mx-auto mt-3'
				placeholder='contacto@elektra.com.mx'
				name='email'
				value={formState.email}
				onChange={onInputChange}
			/>

			{formState.username === 'alansgp' && <Message />}
		</>
	);
};
