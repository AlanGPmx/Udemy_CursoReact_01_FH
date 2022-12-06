/** INTERFACES */
export interface TodosInterface {
	state: TodoInterface[];
	action: ActionsInterface;
}

export interface ActionsInterface {
	type: string;
	payload: any;
}

export interface TodoInterface {
	id: number;
	description: string;
	done: boolean;
}
/** FIN DE INTERFACES */

/** INICIO DE LA LÓGICA DEL PROGRAMA */
export const todoReducer = (
	state: TodoInterface[],
	action: ActionsInterface
): TodoInterface[] => {
	console.log(state);

	switch (action?.type) {
		case '[TODO] add todo':
			return [...state, action.payload];

		case '[TODO] update todo':
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return {
						id: todo.id,
						description: todo.description,
						done: !todo.done,
					};
				}
				return todo;
			});

		case '[TODO] delete todo':
			return state.filter((state) => state.id !== action.payload);

		default:
			return state;
	}
};
