/** INTERFACES */
interface TodosInterface {
	state: Array<TodosInterface>;
	action: ActionsInterface;
}

interface ActionsInterface {
	type: string;
	payload: any;
}
/** FIN DE INTERFACES */

/** DATOS INICIALES */
const initialState: any = [
	{
		id: 1,
		todo: 'Comprar el curso de React',
		done: false,
	},
];

const actionInitial: ActionsInterface = {type: '', payload: ''};

/** INICIO DE LA LÓGICA DEL PROGRAMA */

const todoReducer = (
	args: TodosInterface = {state: initialState, action: actionInitial}
): Array<TodosInterface> => {
	const {state, action} = args;
	console.log(state);

	if (action?.type === '[TODO] add todo') {
		return [...state, action.payload];
	}
	return state;
};

let todos: Array<TodosInterface> = todoReducer({
	state: initialState,
	action: actionInitial,
});

const newTodo: any = {
	id: 2,
	todo: 'Aprender a usar el Reducer',
	done: false,
};

const addToDoAction: ActionsInterface = {
	type: '[TODO] add todo',
	payload: newTodo, // Opcional solo si se manje informacion en la accion
};

todos = todoReducer({state: todos, action: addToDoAction});

console.log(todos);

export {};
