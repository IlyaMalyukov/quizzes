import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fake-api.com',
})

export default instance;