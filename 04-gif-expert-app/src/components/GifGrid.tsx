import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridInterface} from '../interfaces/GifGridInterface';
import {GifItem} from './GifItem';
import PropTypes from 'prop-types';

export const GifGrid = (props: GifGridInterface) => {
	const {category} = props;

	const {gifs, isLoading} = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h2>Cargando...</h2>}
			<div className='card-grid'>
				{gifs.map((_gif: any) => (
					<GifItem key={_gif.id} {..._gif} />
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
