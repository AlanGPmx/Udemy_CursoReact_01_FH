import {renderHook} from '@testing-library/react';
import {useCounter} from '../../hooks/useCounter';

describe('Pruebas en el useCounter', () => {
	test('Debe retornar los valores por defecto', () => {
		const {result} = renderHook(() => useCounter());
	});
});
