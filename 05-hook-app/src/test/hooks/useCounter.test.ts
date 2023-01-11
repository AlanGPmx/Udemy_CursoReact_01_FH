import {act, renderHook} from '@testing-library/react';
import {useCounter} from '../../hooks/useCounter';

describe('Pruebas en el useCounter', () => {
	test('Debe retornar los valores por defecto', () => {
		const {result} = renderHook(() => useCounter());
		const {counter, incrementCounter, decrementCounter, resetCounter} =
			result.current;

		expect(counter).toBe(0);
		expect(typeof incrementCounter).toBe('function');
		expect(typeof decrementCounter).toBe('function');
		expect(typeof resetCounter).toEqual('function');
	});

	test('Debe retornar el counter con el valor de 500', () => {
		const {result} = renderHook(() => useCounter(500));
		const {counter} = result.current;

		expect(counter).toBe(500);
	});

	test('Debe retornar el counter con el valor menos 1', () => {
		const {result} = renderHook(() => useCounter(500));
		const {decrementCounter} = result.current;

		act(() => {
			decrementCounter();
		});

		expect(result.current.counter).toBe(499);
	});

	test('Debe retornar el counter con el valor mas 100 llamando dos veces la función de manera conjunta', () => {
		const {result} = renderHook(() => useCounter(500));
		const {incrementCounter} = result.current;

		act(() => {
			incrementCounter();
			incrementCounter(99);
		});

		expect(result.current.counter).toBe(600);
	});

	test('Debe resetear el valor del counter', () => {
		const {result} = renderHook(() => useCounter());
		const {incrementCounter, resetCounter} = result.current;

		act(() => {
			incrementCounter();
			resetCounter();
		});

		expect(result.current.counter).toBe(0);
	});
});
