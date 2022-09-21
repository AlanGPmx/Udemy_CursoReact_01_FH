import {useFetch, useCounter} from '../hooks';
import {LoadingQuote} from './LoadingQuote';
import {Quote} from './Quote';

export const MultipleCustomHooks = () => {
	const {counter, incrementCounter} = useCounter(1);

	const {data, isLoading} = useFetch(
		'https://www.breakingbadapi.com/api/quotes/' + counter
	);

	const {author = '', quote = ''} = data ? data[0] : {};

	return (
		<>
			<h2 className='text-center mb-5'>5.- Breaking Bad Quotes</h2>

			{isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

			<button
				className='btn btn-primary float-end'
				disabled={isLoading}
				onClick={() => incrementCounter()}>
				Siguiente frase...
			</button>
		</>
	);
};
