import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

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
import {CallbackHook} from './06-memos/CallbackHook';
import {Padre} from './07-tarea-memo/Padre';

import './08-useReducer/intro-reducer';
import {TodoApp} from './08-useReducer/TodoApp';
import {MainApp} from './09-useContext/MainApp';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<React.StrictMode>
			{/**
			 *                             SECCIÓN:
			 *                               09-useContext
			 **/}
			<div className='row'>
				<div className='col-12'>
					<MainApp />
				</div>
			</div>
			{/**
			 *                             SECCIÓN:
			 *                                01-useState, 02-useEffect, 03-examples, 04-useRef, 05-useLayoutEffect, 06-memos, 07-tarea-memo, 08-useReducer
			 **/}

			{/*
		<div className='row'>
			<div className='col-12'>
				<HooksApp />
			</div>
			<div className='col-md-6'>
				<TodoApp />
			</div>
			<div className='col-md-6'>
				<Padre />
			</div>
			<div className='col-12'>
				<Separador />
			</div>
			<div className='col-md-6'>
				<CallbackHook />
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
			<div className='col-md-6'>{<Layout />}</div>
			<div className='col-12'>
				<Separador />
			</div>
			<div className='col-md-6'>
				<FocusScreen />
			</div>
			<div className='col-md-6'>{<MultipleCustomHooks />}</div>
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
		*/}
		</React.StrictMode>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
