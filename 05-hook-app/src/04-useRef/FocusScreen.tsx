import {MutableRefObject, useRef} from 'react';

export const FocusScreen = () => {
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

	const onClick = () => {
		console.log(inputRef);
		inputRef.current.select();
	};

	return (
		<>
			<h2 className='text-center mb-5'>6.- Focus Screen / useRef</h2>

			<input
				ref={inputRef}
				type='text'
				className='form-control w-75 mx-auto'
				placeholder='Ingrese su nombre'
				name='name'
			/>

			<span className='row'>
				<button
					className='btn btn-sm btn-info w-50 mx-auto mt-3'
					onClick={onClick}>
					Set Focus
				</button>
			</span>
		</>
	);
};
