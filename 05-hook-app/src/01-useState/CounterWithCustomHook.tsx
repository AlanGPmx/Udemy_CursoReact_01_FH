import {useCounter} from '../hooks/useCounter';
export const CounterWithCustomHook = () => {
	const {counter, incrementCounter, resetCounter, decrementCounter} =
		useCounter();

	return (
		<>
			<h2 className='text-center mb-5'>2.- Counter with custom Hook</h2>

			<div className='row'>
				<div className='col-md-4'>
					<button
						className='btn btn-danger float-end'
						onClick={() => decrementCounter(-5)}>
						-1
					</button>
				</div>
				<div className='col-md-4 text-center'>
					<h3>Counter: {counter} </h3>
					<button
						className='btn btn-secondary float-start w-100 h-50'
						onClick={resetCounter}>
						Reset
					</button>
				</div>
				<div className='col-md-4 '>
					<button
						className='btn btn-success float-start'
						onClick={() => incrementCounter(-5)}>
						+1
					</button>
				</div>
			</div>
		</>
	);
};
