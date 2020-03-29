import {combineReducers} from 'redux';
import  authReducer  from './auth.reducer';
import  contactReducer  from './contact.reducer';
export default  combineReducers({
	authReducer,
	contactReducer
});