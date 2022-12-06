import {useReducer, useEffect} from 'react';
import {
	ActionsInterface,
	TodoInterface,
	todoReducer,
} from '../08-useReducer/todoReducer';

export const useToDo = (initialState: TodoInterface[]) => {
	const init = () => {
		return JSON.parse(localStorage.getItem('todos') || '[]');
	};

	const [state, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state) || JSON.stringify([]));
	}, [state]);

	const handleNewTodo = (todo: TodoInterface) => {
		const action: ActionsInterface = {
			type: '[TODO] add todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (id: number) => {
		const action: ActionsInterface = {
			type: '[TODO] delete todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleToggleTodo = (id: number) => {
		const action: ActionsInterface = {
			type: '[TODO] update todo',
			payload: id,
		};

		dispatch(action);
	};

	const pendingTodosCount = state.filter((todo) => !todo.done).length;
	const allTodosCount = state.filter((todo) => !todo.done).length;

	return {
		state,
		allTodosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
