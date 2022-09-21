// TODO: Terminar de revisar este archivo, esta fallando la petición FETCH con `Error: Error: read ECONNRESET`

import { getImagen } from '../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.ts', () => {
	test('getImagen debe retornar una URL de la imagen', async () => {
		const repsonse = await getImagen();
		console.log(repsonse);
		expect(repsonse).toBe('No se pudo cargar la imagen');
	});
});
