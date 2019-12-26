// where the actual state is going to go
// where we check our actions
import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM }, from '../actions/types.js'

const initialState = {
	items: [
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Steak' },
		{ id: uuid(), name: 'Water' },
	]	
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_ITEMS: 
			return {
				...state
			}
			default:
				return state;
	}
}