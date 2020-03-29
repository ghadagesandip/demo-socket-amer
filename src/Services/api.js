import axios from 'axios';
import { API_ENDPOINT } from '../constants';

const apiFactory = () => {
    const data = JSON.parse(localStorage.getItem('user'))
    const token = data &&  data.token ?  data.token : '';
    const service = axios.create({
        baseURL:API_ENDPOINT,
        headers: {'x-access-token':  token}
    })
    return service;
};

export default apiFactory; 