import {useState} from 'react';

export const CounterApp = () => {
	const [state, setState] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const {counter1, counter2, counter3} = state;

	return (
		<>
			<h2 className='text-center mb-5'>1.- Hook: useState</h2>

			<div className='row'>
				<div className='col-md-4'>
					<button
						className='btn btn-danger float-end'
						onClick={() => setState({...state, counter1: counter1 - 1})}>
						-1
					</button>
				</div>
				<div className='col-md-4 text-center'>
					<h3>Counter1: {counter1} </h3>
				</div>
				<div className='col-md-4 '>
					<button
						className='btn btn-success float-start'
						onClick={() => setState({...state, counter1: counter1 + 1})}>
						+1
					</button>
				</div>
			</div>

			<hr className='border border-primary border-1 w-50 mx-auto opacity-50' />

			<div className='row'>
				<div className='col-md-4'>
					<button
						className='btn btn-danger float-end'
						onClick={() => setState({...state, counter2: counter2 - 1})}>
						-1
					</button>
				</div>
				<div className='col-md-4 text-center'>
					<h3>Counter2: {counter2} </h3>
				</div>
				<div className='col-md-4 '>
					<button
						className='btn btn-success float-start'
						onClick={() => setState({...state, counter2: counter2 + 1})}>
						+1
					</button>
				</div>
			</div>

			<hr className='border border-primary border-1 w-50 mx-auto opacity-50' />

			<div className='row'>
				<div className='col-md-4'>
					<button
						className='btn btn-danger float-end'
						onClick={() => setState({...state, counter3: counter3 - 1})}>
						-1
					</button>
				</div>
				<div className='col-md-4 text-center'>
					<h3>Counter3: {counter3} </h3>
				</div>
				<div className='col-md-4 '>
					<button
						className='btn btn-success float-start'
						onClick={() => setState({...state, counter3: counter3 + 1})}>
						+1
					</button>
				</div>
			</div>
		</>
	);
};
