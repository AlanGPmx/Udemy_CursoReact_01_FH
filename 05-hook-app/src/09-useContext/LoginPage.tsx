import {useContext} from 'react';
import {UserContext} from './context/UserContext';

export const LoginPage = () => {
	const {setUser} = useContext(UserContext);

	return (
		<>
			<h1>LoginPage</h1>
			<button
				className='btn btn-primary'
				onClick={() =>
					setUser({
						id: 123,
						name: 'Alan',
						lastname: 'Garduño',
						email: 'alansgp@outlook.com',
					})
				}>
				Change Name User
			</button>
		</>
	);
};
