// Fetch API
const api_key = 'PRtDNkyadKfctsTjyAN8yx2j3tDN8D3B';

const getImagen = async () => {
	try {
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=dog`
		);

		const { url } = await resp.json().then(({ data }) => data.images.original);

		const img = document.createElement('img');
		console.log(url);
		img.src = url;
		document.body.append(img);
	} catch (error) {
		console.log(error);
	}
};

getImagen();
