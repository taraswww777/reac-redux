const defaultState = [];

export default function (state = defaultState, action) { // reducer
	// console.log('state: ', state, 'action: ', action);

	if (action.type === 'ADD_PLAYLIST') {
		return [...state, action.payload];
	} else {
		return state;
	}

}
