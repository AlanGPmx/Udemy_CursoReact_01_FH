export interface AddCategoryInterface {
	//onNewCategory: (categories: (categories: string[]) => string[]) => void;          =>Callback
	onNewCategory: (newCategory: string) => void;
}
