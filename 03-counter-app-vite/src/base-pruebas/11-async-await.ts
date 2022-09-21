// Fetch API
export const getImagen = async () => {
	const api_key = 'PRtDNkyadKfctsTjyAN8yx2j3tDN8D3B';

	try {
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=dog`
		);

		const { url } = await resp.json().then(({ data }) => data.images.original);
		return url;
	} catch (error) {
		return 'No se pudo cargar la imagen';
	}
};
