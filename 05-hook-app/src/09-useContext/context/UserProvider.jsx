import {useState} from 'react';
import {UserContext} from './UserContext';

export const UserProvider = (props) => {
	const [user, setUser] = useState();

	const {children} = props;
	return (
		<UserContext.Provider value={{user, setUser}}>
			{' '}
			{children}
		</UserContext.Provider>
	);
};
