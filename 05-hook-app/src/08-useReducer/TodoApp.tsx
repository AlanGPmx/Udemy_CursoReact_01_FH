import {useReducer} from 'react';
import {
	ActionsInterface,
	TodoInterface,
	todoReducer,
	TodosInterface,
} from './todoReducer';
import {TodoList} from './TodoList';
import {TodoAdd} from './TodoAdd';

export const TodoApp = () => {
	const initialState: TodoInterface[] = [
		{
			id: 1,
			description: 'Comprar el curso de React',
			done: false,
		},
		{
			id: 2,
			description: 'Empezar el curso de React1',
			done: false,
		},
	];

	const [state, dispatch] = useReducer(todoReducer, initialState);

	const handleNewTodo = (todo: TodoInterface) => {
		const action: ActionsInterface = {
			type: '[TODO] add todo',
			payload: todo,
		};

		dispatch(action);
	};

	return (
		<>
			<span className='text-center mb-5'>
				<h2>11.-Todo App (1)</h2>
				<h6>
					<small className='text-center'>Pendientes: 0</small>
				</h6>
			</span>
			<hr />
			<div className='row'>
				<div className='col-7'>
					<TodoList todos={state} />
				</div>
				<div className='col-5'>
					<h5>Agregar tarea</h5>
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
