import {useCounter} from '../hooks';
import {Small} from './Small';
import {useState} from 'react';

export const Memorize = () => {
	const {counter, incrementCounter} = useCounter(10);
	const [allow, setAllow] = useState({status: true, text: 'Ocultar'});

	return (
		<>
			<h2 className='text-center mb-5'>8.-Memorize</h2>

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
						<Small value={counter} />
					</h3>
				</div>
				<div className='col-md-4 '>
					<button
						className='btn btn-success float-start'
						onClick={() => incrementCounter()}>
						+1
					</button>
				</div>
			</div>
		</>
	);
};
