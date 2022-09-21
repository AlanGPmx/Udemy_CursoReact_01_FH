import {useState, useCallback, useEffect} from 'react';
import {ShowIncrement} from './ShowIncrement';

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	const incrementFather = useCallback((value2Increment: number) => {
		setCounter((counter_local) => counter_local + value2Increment);
	}, []);

	return (
		<>
			{' '}
			<h2 className='text-center mb-5'>10.- useCallback</h2>
			<div className='row'>
				<div className='col-md-6 offset-3 text-center'>
					<h3>Counter: {counter}</h3>
				</div>
				<div className='col-md-6 offset-3 text-center'>
					<ShowIncrement increment={incrementFather} />
				</div>
			</div>
		</>
	);
};
