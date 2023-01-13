import {render, screen, fireEvent} from '@testing-library/react';
import {MultipleCustomHooks} from '../../03-examples/MultipleCustomHooks';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
	const mockIncrement = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		useCounter.mockReturnValue({
			counter: 1,
			incrementCounter: mockIncrement,
			decrementCounter: mockIncrement,
			resetCounter: mockIncrement,
		});
	});

	/* Testing the default state of the component. */
	test('Debe mostrar el componente por defecto sin snapshot', () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Cargando...')).toBeInTheDocument();
		expect(screen.getByText('5.- Breaking Bad Quotes')).toBeInTheDocument();
		const boton: HTMLInputElement = screen.getByRole('button', {
			name: 'Siguiente frase...',
		});
		expect(boton.disabled).toBeTruthy();
	});

	/* Testing the default state of the component. */
	test('Debe mostrar el componente por defecto con snapshot', () => {
		useFetch.mockReturnValue({data: null, isLoading: true, hasError: null});
		const {container} = render(<MultipleCustomHooks />);
		expect(container).toMatchSnapshot();
	});

	/* Testing the component when the data is loaded. */
	test('Debe de mostrar una frase', () => {
		useFetch.mockReturnValue({
			data: [{author: 'Alan Garduño', quote: 'Ya me quiero ir'}],
			isLoading: false,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Ya me quiero ir')).toBeInTheDocument();
		expect(screen.getByText('Alan Garduño')).toBeInTheDocument();
		const boton: HTMLInputElement = screen.getByRole('button', {
			name: 'Siguiente frase...',
		});
		expect(boton.disabled).toBeFalsy();
	});

	/* Testing if the function is called. */
	test('Debe de llamar la función de incrementar', () => {
		useFetch.mockReturnValue({
			data: [{author: 'Alan Garduño', quote: 'Ya me quiero ir'}],
			isLoading: false,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		const boton: HTMLInputElement = screen.getByRole('button', {
			name: 'Siguiente frase...',
		});
		fireEvent.click(boton);
		expect(mockIncrement).toHaveBeenCalled();
	});
});
