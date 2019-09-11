import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import popupReducer from './reducers/popupReducer';
import fetchedPageReducer from './reducers/fetchedPageReducer';
import pageReducer from './reducers/pageReducer';

export default combineReducers({
  products: productReducer,
  popup: popupReducer,
  pages: fetchedPageReducer,
  page: pageReducer
});