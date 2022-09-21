import {useEffect, useState} from 'react';

export const Message = () => {
	const [coords, setCoords] = useState({x: 0, y: 0});

	useEffect(() => {
		const onMouseMove = (event: any) => {
			const coords = {x: event.x, y: event.y};
			setCoords(coords);
		};

		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	});

	return (
		<>
			<span className='text-center mt-2'>
				<h6>El Usuario ya existe </h6>
				<h6>{JSON.stringify(coords)}</h6>
			</span>
		</>
	);
};
