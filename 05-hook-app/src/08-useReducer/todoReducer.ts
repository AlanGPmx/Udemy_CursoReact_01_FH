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

/** DATOS INICIALES */
const initialState: TodoInterface[] = [];

const actionInitial: ActionsInterface = {type: '', payload: ''};

/** INICIO DE LA LÓGICA DEL PROGRAMA */
export const todoReducer = (
	args: TodosInterface = {state: initialState, action: actionInitial}
): TodoInterface[] => {
	const {state, action} = args;
	console.log(state);

	if (action?.type === '[TODO] add todo') {
		return [...state, action.payload];
	}
	return state;
};
