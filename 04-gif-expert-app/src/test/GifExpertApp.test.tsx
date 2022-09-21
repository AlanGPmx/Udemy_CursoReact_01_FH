import {fireEvent, render, screen} from '@testing-library/react';
import {GifExpertApp} from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
	test('Deberá renderizar el componente y compararlo con el Snapshot', () => {
		const {container} = render(<GifExpertApp />);
		expect(container).toMatchSnapshot();
	});

	test('Debe agregar una categoria a la colección', () => {
		render(<GifExpertApp />);

		const newCategoryToAdd = 'Hola Mundo';
		const input = screen.getByRole('textbox') as HTMLInputElement;
		const form = screen.getByRole('form');

		fireEvent.change(input, {target: {value: newCategoryToAdd}});
		fireEvent.submit(form);

		const titlesH3 = screen.getAllByRole('heading', {level: 3});

		expect(titlesH3.length).toBe(2);
	});

	test('No debe agregar una categoria a la colección, pues "Gatos" ya existe precargada', () => {
		render(<GifExpertApp />);

		const newCategoryToAdd = 'Gatos';
		const input = screen.getByRole('textbox') as HTMLInputElement;
		const form = screen.getByRole('form');

		fireEvent.change(input, {target: {value: newCategoryToAdd}});
		fireEvent.submit(form);

		const titlesH3 = screen.getAllByRole('heading', {level: 3});

		expect(titlesH3.length).toBe(1);
	});
});
