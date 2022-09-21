import {useLayoutEffect, useRef, MutableRefObject, useState} from 'react';

export const Quote = (props: any) => {
	const {quote, author} = props;

	const pRef = useRef() as MutableRefObject<HTMLInputElement>;

	const [boxSize, setBoxSize] = useState({width: 0, height: 0});

	useLayoutEffect(() => {
		const {width, height} = pRef.current.getBoundingClientRect();

		setBoxSize({width, height});
	}, []);

	return (
		<>
			<blockquote className='blockquote row' style={{display: 'flex'}}>
				<p ref={pRef} className='mb-2 col-auto'>
					{quote}
				</p>
				<footer className='blockquote-footer col-12'>{author}</footer>
			</blockquote>

			<hr />

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
