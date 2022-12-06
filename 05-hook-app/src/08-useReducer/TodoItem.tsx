import {
	faTrashCan,
	faCircleCheck,
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
				<span className='align-self-center'>
					<FontAwesomeIcon
						icon={done ? faCircleCheck : faTriangleExclamation}
						size='xs'
						className={`${done ? 'text-success' : 'text-warning'} `}
					/>{' '}
					{description}
				</span>
				<button className='btn btn-danger btn-sm'>
					<FontAwesomeIcon icon={faTrashCan} size='xs' />
				</button>
			</li>
		</>
	);
};
