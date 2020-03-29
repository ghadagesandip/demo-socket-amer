import {
	LOGIN_REQ,
	LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
} from './../Actions/auth.actions';

const userInfo = JSON.parse(localStorage.getItem('user'));
const isLoggedIn = userInfo ? true :false;
const initialState = userInfo ? {  userInfo, isLoggedIn } : { isLoggedIn};

export default function authReducer(state = initialState, {type, payload}){

	switch(type){
	
	case LOGIN_REQ:
        return {...state, ...payload}

    case LOGIN_SUCCESS:
        return {...state, ...payload}

    case LOGIN_FAILURE:
        return {...state, ...payload}
        
    case LOGOUT:
        return {};
    default:
        return state
	}
}
