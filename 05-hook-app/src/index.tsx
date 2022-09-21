import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HooksApp} from './HooksApp';
import reportWebVitals from './reportWebVitals';
import {CounterApp} from './01-useState/CounterApp';
import {CounterWithCustomHook} from './01-useState/CounterWithCustomHook';
import {SimpleForm} from './02-useEffect/SimpleForm';
import {Separador} from './Separador';
import {FormWithCustomHook} from './02-useEffect/FormWithCustomHook';
import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks';
import {FocusScreen} from './04-useRef/FocusScreen';
import {Layout} from './05-useLayoutEffect/Layout';
import {Memorize} from './06-memos/Memorize';
import {MemoHook} from './06-memos/MemoHook';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<div className='row'>
			<div className='col-12'>
				<HooksApp />
			</div>
			<div className='col-md-6'>
				<MemoHook />
			</div>
			<div className='col-12'>
				<Separador />
			</div>
			<div className='col-md-6'>
				<Memorize />
			</div>
			<div className='col-md-6'>
				<Layout />
			</div>
			<div className='col-12'>
				<Separador />
			</div>
			<div className='col-md-6'>
				<FocusScreen />
			</div>
			<div className='col-md-6'>
				<MultipleCustomHooks />
			</div>
			<div className='col-12'>
				<Separador />
			</div>
			<div className='col-md-6'>
				<FormWithCustomHook />
			</div>
			<div className='col-md-6'>
				<SimpleForm />
			</div>
			<div className='col-12'>
				<Separador />
			</div>
			<div className='col-md-6'>
				<CounterWithCustomHook />
			</div>
			<div className='col-md-6'>
				<CounterApp />
			</div>
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
