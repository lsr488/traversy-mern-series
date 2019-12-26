// where the actual state is going to go
// where we check our actions
import uuid from 'uuid';

const initialState = {
	items: [
		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Steak' },
		{ id: uuid(), name: 'Water' },
	]	
}