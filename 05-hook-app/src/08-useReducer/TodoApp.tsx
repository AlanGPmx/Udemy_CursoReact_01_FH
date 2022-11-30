import {useReducer} from 'react';
import {TodoInterface, todoReducer} from './todoReducer';
import {TodoList} from './TodoList';

export const TodoApp = () => {
	const initialState: TodoInterface[] = [
		{
			id: 1,
			description: 'Comprar el curso de React',
			done: false,
		},
		{
			id: 2,
			description: 'Empezar el curso de React',
			done: false,
		},
	];

	const [state, dispatch] = useReducer<any>(todoReducer, initialState);

	return (
		<>
			<h2 className='text-center mb-5'>
				11.-Todo App (1) <hr /> <small>Pendientes: 0</small>
			</h2>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={state} />
				</div>
				<div className='col-5'>
					<h5>Agregar tarea</h5>
					<hr />
					<form>
						<input
							type='text'
							placeholder='Nueva tarea...'
							className='form-control'
						/>

						<button type='submit' className='btn btn-outline-primary'></button>
					</form>
				</div>
			</div>
		</>
	);
};
