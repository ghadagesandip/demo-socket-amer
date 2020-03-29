import apiFactory from './api';

export const getContacts = (userId) => {
    // if(data.userName=="Sandipghadge" && data.password =="Sandipghadge123"){
    //     return Promise.resolve({
    //         data: {
    //             data: [
    //                 {
    //                     id:1,
    //                     username: 'Sandipghadge'
    //                 }
    //             ]
    //         }
    //     })
    // } else{
    //     return Promise.reject(new Error('Error occurred.'))
    // }
    return apiFactory().get(`/contact/getContacts/${userId}`);
}