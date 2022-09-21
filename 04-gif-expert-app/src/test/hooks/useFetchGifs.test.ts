import {renderHook, waitFor} from '@testing-library/react';
import {useFetchGifs} from '../../hooks/useFetchGifs';
describe('Pruebas en el Hook de useFetchGifs', () => {
	test('Debe regresar el estado inicial', () => {
		const {
			result: {
				current: {gifs, isLoading},
			},
		} = renderHook(() => useFetchGifs('Developer'));

		expect(gifs.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('Debe regresar un arreglo de imagenes y el isLoading en false', async () => {
		const {result} = renderHook(() => useFetchGifs('Developer'));

		await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

		const {gifs, isLoading} = result.current;

		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
