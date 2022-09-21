export const getGifsByCategory = async (category: string) => {
	const apiKey = 'PRtDNkyadKfctsTjyAN8yx2j3tDN8D3B';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
	const resp = await fetch(url);
	const {data = []} = await resp.json();
	return data.map((img: any) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
};
