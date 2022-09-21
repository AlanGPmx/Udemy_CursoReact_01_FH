import {memo} from 'react';

export const Hijo = memo((props: any) => {
	const {numero, incrementar} = props;

	console.log('  Me volví a generar :(  ');

	return (
		<button
			className='btn btn-primary mr-3'
			onClick={() => incrementar(numero)}>
			{numero}
		</button>
	);
});
