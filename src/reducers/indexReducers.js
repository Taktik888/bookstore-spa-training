import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';



const rootReducer = combineReducers({
	books: booksReducer,
	cart: cartReducer,
	filter: filterReducer
})
export default rootReducer;
