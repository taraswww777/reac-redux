import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

// import * as serviceWorker from './serviceWorker';

function playlist(state = ['1 fe','2 fsfd'], action) { // reducer
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

const store = createStore(playlist,	composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


// store.dispatch({type: 'ADD_TRACK', payload: 'wewwe'});
