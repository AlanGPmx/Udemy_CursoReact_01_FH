import {useState} from 'react';

export const useCounter: any = (initialState = 0) => {
	const [counter, setCounter] = useState(initialState);

	const incrementCounter = (value = 1) => {
		value = value < 1 ? -value : value;
		setCounter((current) => current + value);
	};

	const resetCounter = () => {
		setCounter(initialState);
	};

	const decrementCounter = (value = -1) => {
		value = value <= 0 ? -value : value;
		setCounter((current) => current - value);
	};

	return {counter, incrementCounter, decrementCounter, resetCounter};
};
