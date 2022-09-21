import {getGifsByCategory} from '../../helpers/getGifts';

describe('Evaluando el componente GifItem', () => {
	test('Deberá retornar un arrelgo de gifs', async () => {
		const gifs = await getGifsByCategory('Club América');

		expect(typeof gifs).toBe('object');
		expect(gifs.length).toBeGreaterThan(0);

		gifs.forEach((gif: any) => {
			expect(gif).toEqual({
				id: expect.any(String),
				title: expect.any(String),
				url: expect.any(String),
			});
		});
	});
});
