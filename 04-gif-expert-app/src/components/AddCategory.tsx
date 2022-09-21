import {useState} from 'react';
import {AddCategoryInterface} from '../interfaces/AddCategory.interface';
import PropTypes from 'prop-types';

export const AddCategory = (props: AddCategoryInterface) => {
	const {onNewCategory} = props;
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event: any) => {
		const {target} = event;
		const {value} = target;
		setInputValue(value);
	};

	const onSubmit = (event: any) => {
		event.preventDefault();
		const newValue = inputValue.trim();

		if (newValue.length <= 1) return;

		setInputValue('');
		onNewCategory(newValue);
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input
				type='text'
				placeholder='Busca un GIF...'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
};
