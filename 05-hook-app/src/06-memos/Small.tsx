import {memo} from 'react';

export const Small = memo((props: any) => {
	const {value} = props;

	console.info('Componente redibujado');
	return <small>{value}</small>;
});
