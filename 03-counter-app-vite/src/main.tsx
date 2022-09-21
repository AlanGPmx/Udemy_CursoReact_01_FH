import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './global.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HelloWorldApp />
		<FirstApp title="Desestructurando con TS" noEmpleado={1050912} />
		<CounterApp valueInitial={0} />
	</React.StrictMode>
);
