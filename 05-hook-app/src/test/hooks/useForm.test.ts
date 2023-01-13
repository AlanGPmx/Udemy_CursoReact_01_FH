import {renderHook} from '@testing-library/react';
import {useForm} from '../../hooks';
import {act} from 'react-dom/test-utils';
import {ChangeEvent} from 'react';

describe('Pruebas en el useForm', () => {
	const initialForm = {name: 'Alan', email: 'alansgp@outlook.com'};

	test('Debe retornar los valores por defecto', () => {
		const {result} = renderHook(() => useForm(initialForm));

		expect(result.current).toEqual({
			formState: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test('Debe de cambiar el nombre del formulario', () => {
		const {result} = renderHook(() => useForm(initialForm));
		const {onInputChange} = result.current;
		const nuevoNombre = 'Juan';
		const targetEvent = {
			target: {name: 'name', value: nuevoNombre},
		} as ChangeEvent<HTMLInputElement>;

		act(() => {
			onInputChange(targetEvent);
		});

		expect(result.current.formState.name).toBe(nuevoNombre);
	});

	test('Debe de volver a poner el nombre del formulario del valor inicial', () => {
		const {result} = renderHook(() => useForm(initialForm));
		const {onInputChange, onResetForm} = result.current;
		const nuevoNombre = 'Juan';
		const targetEvent = {
			target: {name: 'name', value: nuevoNombre},
		} as ChangeEvent<HTMLInputElement>;

		act(() => {
			onInputChange(targetEvent);
			onResetForm();
		});

		expect(result.current.formState.name).toBe(initialForm.name);
	});
});
