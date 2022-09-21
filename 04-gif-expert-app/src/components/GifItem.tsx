import {GifItemInterface} from '../interfaces/GiftItem.interface';
import PropTypes from 'prop-types';

export const GifItem = (props: GifItemInterface) => {
	const {title, url} = props;
	return (
		<div className='card'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

// Es la alternativa en JS y React al tipado que TS ofrece
GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

//La alternativa para asignar un valor por defecto a las Props y no hacerlo en crudo en los argumentos del componente
GifItem.defaultProps = {
	url: 'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg',
	title: 'Imagen no encontrada',
};
