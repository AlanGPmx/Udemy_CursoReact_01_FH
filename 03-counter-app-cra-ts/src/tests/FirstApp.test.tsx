import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
	const title = 'Desestructurando con TS';
	const name = 'Alan';
	const noEmp = 999999;

	// Pruebas con Snapshot solo al final del desarrollo
	/* 	test('Debe parecerce al snapshot', () => {
		const title = 'Desestructurando con TS';
		const noEmp = 999999;
		const { container } = render(<FirstApp title={title} noEmpleado={noEmp} />);
		expect(container).toMatchSnapshot();
	}); */

	test('Debe mostrar el título en un H2', () => {
		render(<FirstApp title={title} noEmpleado={noEmp} />);
		const testTitle = screen.getByRole('heading', { level: 2 });
		expect(testTitle).toBeTruthy();
		expect(testTitle.innerHTML).toBe(title);
	});

	test('Debe mostrar el saludo en un parrafo', () => {
		render(<FirstApp title={title} noEmpleado={noEmp} />);
		const saludo = `Hola ${name}, tu Número de Empleado es ${noEmp}`;

		const testSaludo = screen.getAllByTestId('test-saludo');
		expect(screen.getAllByText(saludo)).toBeTruthy();
		expect(testSaludo).toBeTruthy();
		expect(testSaludo.length).toBe(1);
	});
});
