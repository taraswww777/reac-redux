// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import {createStore} from 'redux';

function playlist(state = [], action) {
	console.log('action: ', action);
	switch (action.type) {
		case 'ADD_TRACK':
			return [
				...state,
				action.payload
			];
	}

	return state;
}

const store = createStore(playlist);

store.subscribe(() => {
	console.log('store subscribe: ', store.getState());
});

store.dispatch({type: 'ADD_TRACK', payload: 'wewwe'});
store.dispatch({type: 'ADD_TRACK', payload: 'wewwe3'});