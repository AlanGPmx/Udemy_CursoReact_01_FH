import {useForm} from '../hooks';

export const TodoAdd = (props: any) => {
	const {onNewTodo} = props;

	const {
		formState: {description},
		onInputChange,
		onResetForm,
	} = useForm({
		description: '',
	});

	const onFormSubmit = (e: any) => {
		e.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description,
		};

		onNewTodo && onNewTodo(newTodo);
		onResetForm();
	};

	return (
		<>
			<form onSubmit={onFormSubmit}>
				<input
					type='text'
					placeholder='Nueva tarea...'
					className='form-control'
					name='description'
					value={description}
					onChange={onInputChange}
				/>

				<div className='d-grid gap-2 d-md-block'>
					<button
						type='submit'
						className='btn mx-auto w-50 btn-outline-primary'>
						Agregar
					</button>
				</div>
			</form>
		</>
	);
};
