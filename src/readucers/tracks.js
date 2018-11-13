const defaultState = ['1 fe', '2 fsfd'];

export default function (state = defaultState, action) { // reducer
	console.log('state: ', state, 'action: ', action);

	if (action.type === 'ADD_TRACK') {
		return [...state, action.payload];
	} else {
		return [state];
	}

}
