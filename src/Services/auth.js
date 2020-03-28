import apiFactory from './api';

export const login = (data) => {
    return apiFactory().post('/login', data);
}