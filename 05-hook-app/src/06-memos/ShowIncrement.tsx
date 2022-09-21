import {memo} from 'react';

export const ShowIncrement = memo((props: any) => {
	const {increment} = props;

	console.log('ShowIncrement: He sido generado');

	return (
		<button
			className='btn btn-success text-center'
			onClick={() => increment(100)}>
			+1
		</button>
	);
});
