import {TodoItem} from './TodoItem';

export const TodoList = (props: any) => {
	const {todos, onDeleteTodo} = props;

	return (
		<>
			<ul className='list-group'>
				{todos.map((todo: any) => (
					<TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
				))}
			</ul>
		</>
	);
};
