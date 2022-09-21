import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Se realizan pruebas en el Componente <CounterAPP />', () => {
	const valueInitialTest: number = 0;
	const actualValue: number = valueInitialTest;

	test('Debe hacer match con el Snapshot', () => {
		const { container } = render(
			<CounterApp valueInitial={valueInitialTest} />
		);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el valor inicial de 0', () => {
		render(<CounterApp valueInitial={valueInitialTest} />);
		const counter = screen.getByRole('heading', { level: 2 });
		expect(screen.getByText(0)).toBeTruthy();
		expect(counter.innerHTML).toBe(`${valueInitialTest}`);
	});

	test('Debe incrementar el contador en +1', () => {
		render(<CounterApp valueInitial={valueInitialTest} />);
		const button = screen.getByTestId('btnIncrementarUno');
		fireEvent.click(button);

		const counter = screen.getByRole('heading', { level: 2 });
		expect(counter.innerHTML).toBeTruthy();
		expect(counter.innerHTML).toBe(`${actualValue + 1}`);
	});

	test('Debe decrementar el contador en -1', () => {
		render(<CounterApp valueInitial={valueInitialTest} />);
		const button = screen.getByTestId('btnDecrementarUno');
		fireEvent.click(button);

		const counter = screen.getByRole('heading', { level: 2 });
		expect(counter.innerHTML).toBeTruthy();
		expect(counter.innerHTML).toBe(`${actualValue - 1}`);
	});

	test('Debe resetear el contador al valor incial', () => {
		render(<CounterApp valueInitial={99} />);
		const valueInitialComponent = screen.getByRole('heading', { level: 2 });

		const btnIncrementar = screen.getByTestId('btnIncrementarUno');
		fireEvent.click(btnIncrementar);

		const btnResetear = screen.getByRole('button', {
			name: 'btnResetearValor',
		});
		fireEvent.click(btnResetear);

		const counter = screen.getByRole('heading', { level: 2 });

		expect(counter.innerHTML).toBeTruthy();
		expect(counter.innerHTML).toBe(`${valueInitialComponent.innerHTML}`);
	});
});
