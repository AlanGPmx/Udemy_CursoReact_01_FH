import {render, screen} from '@testing-library/react';
import {GifItem} from '../../components/GifItem';

describe('Evaluando el componente GifItem', () => {
	const title = 'Club América';
	const url = 'https://media.giphy.com/media/3o7TKsQ8U5h3iXWgZK/giphy.gif';
	const id = '14';

	test('Deberá renderizar el componente y compararlo con el Snapshot', () => {
		const {container} = render(<GifItem title={title} url={url} id={id} />);
		expect(container).toMatchSnapshot();
	});

	test('Deberá mostrar el título y la imagen', () => {
		render(<GifItem title={title} url={url} id={id} />);
		//screen.debug();

		// Opcion 1: Menos limpia
		// expect(screen.getByRole('img').src).toBe(url);
		// expect(screen.getByRole('img').alt).toBe(title);

		//Option 2: Más limpia
		const {src, alt} = screen.getByRole('img') as HTMLInputElement;
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Deberá mostrar el título del componente', () => {
		render(<GifItem title={title} url={url} id={id} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
