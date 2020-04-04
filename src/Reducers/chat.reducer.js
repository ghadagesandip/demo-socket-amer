import {
    OPEN_CHAT_WINDOW,
    CLOSE_CHAT_WINDOW
} from '../Actions/chat.actions';

const initialState = localStorage.getItem('chat_windows') 
    ? {chat_windows: JSON.parse(localStorage.getItem('chat_windows'))} 
    : {chat_windows:[]};

export default function contactReducer(state = initialState, {type, payload}){

	switch(type){
	
        case OPEN_CHAT_WINDOW:
            return {...state, ...payload}

        case CLOSE_CHAT_WINDOW:
            return {...state, ...payload}

        default:
            return state
	}
}
