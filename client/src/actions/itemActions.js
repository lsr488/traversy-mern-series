import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// allows for async requests via axios
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
  	.get('/api/items')
  	.then(res => 
  		dispatch({
  			type: GET_ITEMS,
  			payload: res.data
  		})
		)
};

export const addItem = (item) => dispatch => {
	console.log("Action addItem:", item);
	axios
		.post('/api/items', item)
		.then(res => 
			dispatch({
				type: ADD_ITEM,
				payload: res.data
			})
		)

};

export const deleteItem = (id) => {
	console.log("Action deleteItem id:", id);
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}