import {TodoList} from './TodoList';
import {TodoAdd} from './TodoAdd';
import {useToDo} from '../hooks/useToDo';

export const TodoApp = () => {
	const {state, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useToDo(
		[]
	);

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
					<TodoList
						todos={state}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>
				<div className='col-5'>
					<h5>Agregar tarea</h5>
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
