import {combineReducers} from 'redux';
import  authReducer  from './auth.reducer';
import  contactReducer  from './contact.reducer';
import  chatReducers  from './chat.reducer';

export default  combineReducers({
	authReducer,
	contactReducer,
	chatReducers
});