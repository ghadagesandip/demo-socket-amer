
export const CLOSE_CHAT_WINDOW = "CLOSE_CHAT_WINDOW";
export const OPEN_CHAT_WINDOW = "OPEN_CHAT_WINDOW";


export function openChatWindow(user){
	const chatWindos = localStorage.getItem('chat_windows') ? JSON.parse(localStorage.getItem('chat_windows')) : [];
	console.log('chatWindos', chatWindos)
	chatWindos.push(user);
	console.log('newChats', chatWindos)
	localStorage.setItem('chat_windows', JSON.stringify(chatWindos));
	
    return {
		type:OPEN_CHAT_WINDOW,
		payload: {chat_windows : chatWindos}
	}
}

export function closeChatWindow(user){


    return {
		type:CLOSE_CHAT_WINDOW,
		payload: user
	}
}
