export const TodoItem = (props: any) => {
	const {
		todo: {description, done},
	} = props;

	return (
		<>
			<li
				className={`list-group-item d-flex justify-content-between ${
					done ? 'list-group-item-success' : 'list-group-item-warning'
				} `}>
				<span className='align-self-center'>{description}</span>
				<button className='btn btn-danger'>Borrar</button>
			</li>
		</>
	);
};
