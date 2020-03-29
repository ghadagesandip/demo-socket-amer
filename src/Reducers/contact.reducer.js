import {
	CONTACT_REQ,
	CONTACT_FAILURE,
    CONTACT_SUCCESS,
} from '../Actions/contact.actions';

const initialState = localStorage.getItem('contacts') ? {contacts: JSON.parse(localStorage.getItem('contacts'))} : {contacts:[]};
console.log('initialState', initialState)
export default function contactReducer(state = initialState, {type, payload}){

	switch(type){
	
	case CONTACT_REQ:
        return {...state, ...payload}

    case CONTACT_SUCCESS:
        return {...state, ...payload}

    case CONTACT_FAILURE:
        return {...state, ...payload}
        
    default:
        return state
	}
}
