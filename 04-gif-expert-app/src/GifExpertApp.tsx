import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const arregloInicial: string[] = ['Gatos'];
	const [categories, setCategories] = useState(arregloInicial);

	//Agregar un elemento al inicio del arreglo de categorias
	const onAddCategory = (newCategory: string) => {
		if (
			categories.some(
				(item) => item.toLowerCase() === newCategory.toLowerCase()
			)
		)
			return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={onAddCategory} />
			<hr />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
