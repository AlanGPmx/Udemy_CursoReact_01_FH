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

		case '[TODO] edit todo':
			break;

		case '[TODO] delete todo':
			return state.filter((state) => state.id !== action.payload);

		default:
			return state;
	}

	return state;
};
