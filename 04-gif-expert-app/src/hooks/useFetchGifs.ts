import { useEffect, useState } from 'react';
import { getGifsByCategory } from '../helpers/getGifts';

export const useFetchGifs = (category: string) => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getGifts = async () => {
		const newImages = await getGifsByCategory(category);
		setGifs(newImages);
		setIsLoading(false);
	};

	useEffect(() => {
		getGifts();
	});

	return {
		gifs,
		isLoading
	};
};
