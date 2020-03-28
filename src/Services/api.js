import axios from 'axios';
import { API_ENDPOINT } from '../constants';

const apiFactory = () => {
    const service = axios.create({
        baseURL:API_ENDPOINT
    })
    return service;
};

export default apiFactory; 