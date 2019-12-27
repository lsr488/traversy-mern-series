import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = (id) => {
	console.log("Action deleteItem id:", id);
  return {
    type: DELETE_ITEM,
    payload: id
  };
};