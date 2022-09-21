import {fireEvent, render, screen} from '@testing-library/react';
import {AddCategory} from '../../components';

describe('Pruebas en <AddCategory />', () => {
	const onNewCategory = jest.fn();

	test('Deberá renderizar el componente y compararlo con el Snapshot', () => {
		const {container} = render(<AddCategory onNewCategory={onNewCategory} />);
		expect(container).toMatchSnapshot();
	});

	test('Deberá cambiar el valor de la caja de texto con nueva categoria', () => {
		render(<AddCategory onNewCategory={onNewCategory} />);
		const newCategoryToAdd = 'Hola Mundo';
		const input = screen.getByRole('textbox') as HTMLInputElement;
		fireEvent.change(input, {target: {value: newCategoryToAdd}});

		expect(input.value).toBe(newCategoryToAdd);
	});

	test('Debe llamar onNewCategory si el input tiene un valor', () => {
		render(<AddCategory onNewCategory={onNewCategory} />);
		const inputValue = 'Hola Mundo';
		const input = screen.getByRole('textbox') as HTMLInputElement;
		const form = screen.getByRole('form');

		fireEvent.change(input, {target: {value: inputValue}});
		fireEvent.submit(form);

		expect(input.value).toBe('');
		expect(onNewCategory).toHaveBeenCalled(); // Puede ser: expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('No debe llamar onNewCategory si el input tiene esta vacio', () => {
		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalledTimes(0);
		expect(onNewCategory).not.toHaveBeenCalled(); // Segunda alternativa
	});
});
