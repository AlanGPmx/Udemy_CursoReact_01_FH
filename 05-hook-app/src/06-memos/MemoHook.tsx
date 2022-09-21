import {useCounter} from '../hooks';
import {useState, useMemo} from 'react';

const heavyStuff = (iterations: number) => {
	for (let i = 0; i < iterations; i++) {
		console.log('Here we go...');
	}
	return `${iterations} iterations done.`;
};

export const MemoHook = () => {
	const {counter, incrementCounter} = useCounter(500);
	const [allow, setAllow] = useState({status: true, text: 'Ocultar'});
	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h2 className='text-center mb-5'>9.-Memo Hook</h2>

			<div className='row'>
				<div className='col-md-4 '>
					<button
						style={{width: '50%'}}
						className={
							allow.status
								? 'btn btn-secondary float-end'
								: 'btn btn-primary float-end'
						}
						onClick={() =>
							setAllow({
								status: !allow.status,
								text: allow.status ? 'Mostrar' : 'Ocultar',
							})
						}>
						{allow.text}
					</button>
				</div>
				<div className='col-md-4'>
					<h3>
						Counter: &nbsp;
						<small>{counter}</small>
					</h3>
				</div>
				<div className='col-md-4 '>
					<button
						className='btn btn-success float-start'
						onClick={() => incrementCounter()}>
						+1
					</button>
				</div>
				<div className='col-12 text-center'>
					<div>{memorizedValue}</div>
				</div>
			</div>
		</>
	);
};
