import * as contactService from './../Services/contact';

export const CONTACT_REQ = "CONTACT_REQ";
export const CONTACT_FAILURE = "CONTACT_FAILURE";
export const CONTACT_SUCCESS = "CONTACT_SUCCESS";

export function getContacts(userId) {
    
    return dispatch => { 
        
        dispatch(requestContacts(true));
        contactService.getContacts(userId).then(
            res => {
                dispatch(getContactSuccess(res.data.data));
            },
            err => {
                dispatch(getContactFailure(err))
            }
        )
    }
}

export function requestContacts(bool){

    return {
		type:CONTACT_REQ,
		payload: []
	}
}

export function getContactSuccess(contacts) {
    return {
		type: CONTACT_SUCCESS,
		payload:{contacts}
	}
}

export function getContactFailure(error) {
    return {
		type: CONTACT_FAILURE,
		payload:[]
	}
}


