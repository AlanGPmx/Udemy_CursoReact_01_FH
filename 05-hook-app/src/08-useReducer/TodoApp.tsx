import {useReducer} from 'react';
import {TodoInterface, todoReducer} from './todoReducer';
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
			description: 'Empezar el curso de React',
			done: false,
		},
	];

	const [state, dispatch] = useReducer<any>(todoReducer, initialState);

	const handleNewTodo = (todo: any) => {
		console.log(todo);
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
