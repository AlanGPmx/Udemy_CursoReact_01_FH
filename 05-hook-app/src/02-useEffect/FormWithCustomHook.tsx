import {useForm} from '../hooks/useForm';

export const FormWithCustomHook = () => {
	const {formState, onInputChange, onResetForm} = useForm({
		username: '',
		email: '',
		password: '',
	});

	return (
		<>
			<h2 className='text-center mb-5'>4.- Form With Custom Hook</h2>

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

			<input
				type='password'
				className='form-control w-75 mx-auto mt-3'
				placeholder='contraseña segura'
				name='password'
				value={formState.password}
				onChange={onInputChange}
			/>

			<span className='row'>
				<button
					className='btn btn-sm btn-danger w-50 mx-auto mt-3'
					onClick={onResetForm}>
					Limpiar Formulario
				</button>
			</span>
		</>
	);
};
