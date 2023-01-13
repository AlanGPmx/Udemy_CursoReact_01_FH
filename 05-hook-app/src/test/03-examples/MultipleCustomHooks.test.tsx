import {render, screen} from '@testing-library/react';
import {MultipleCustomHooks} from '../../03-examples/MultipleCustomHooks';

describe('Pruebas en <MultipleCustomHooks />', () => {
	test('Debe mostrar el componente por defecto sin snapshot', () => {
		render(<MultipleCustomHooks />);
		expect(screen.getByText('Cargando...')).toBeInTheDocument();
		expect(screen.getByText('5.- Breaking Bad Quotes')).toBeInTheDocument();
		const boton = screen.getByRole('button', {
			name: 'Siguiente frase...',
		}) as HTMLInputElement;
		expect(boton.disabled).toBeTruthy();
	});

	test('Debe mostrar el componente por defecto con snapshot', () => {
		const {container} = render(<MultipleCustomHooks />);
		expect(container).toMatchSnapshot();
	});
});
