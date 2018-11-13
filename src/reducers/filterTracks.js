const defaultState = '';

export default function (state = defaultState, action) { // reducer

	if (action.type === 'FIND_TRACK') return action.payload;
	return state;
}
