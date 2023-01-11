import {NavLink} from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark rounded-3'>
			<div className='container-fluid'>
				<NavLink className={'navbar-brand'} to='/'>
					useContextHome
				</NavLink>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<NavLink className={isActive} to='/login'>
							Login
						</NavLink>
						<NavLink className={isActive} to='/about'>
							About
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

function isActive({isActive}) {
	return `nav-link ${isActive ? 'active' : ''}`;
}
