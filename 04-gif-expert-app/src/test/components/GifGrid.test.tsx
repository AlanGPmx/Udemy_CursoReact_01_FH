import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../components';
import {useFetchGifs} from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const categoryTxt = 'React';

	test('Debe de mostrar el loading inicialmente', () => {
		(useFetchGifs as unknown as jest.Mock).mockReturnValue({
			gifs: [],
			isLoading: true,
		});

		render(<GifGrid category={categoryTxt} />);

		const elementByText = screen.getByText('Cargando...');
		const elementByRole = screen.getByRole('heading', {level: 2});
		const category = screen.getByRole('heading', {level: 3});

		expect(elementByText).toBeInTheDocument();
		expect(elementByRole).toBeInTheDocument();
		expect(category).toBeInTheDocument();
	});

	test('Debe mostrar los items cuando se cargan las imagenes desde el useFetchGifs', () => {
		const gifsData = [
			{
				id: 'Gif_01',
				title: 'Gif 01',
				url: 'https://localhost:3000/Gif_01.jpg',
			},
			{
				id: 'Gif_02',
				title: 'Gif 02',
				url: 'https://localhost:3000/Gif_02.jpg',
			},
		];
		(useFetchGifs as unknown as jest.Mock).mockReturnValue({
			gifs: gifsData,
			isLoading: false,
		});

		render(<GifGrid category={categoryTxt} />);

		const imgsLength = screen.getAllByRole('img').length;
		expect(imgsLength).toBeGreaterThan(0);
	});
});
