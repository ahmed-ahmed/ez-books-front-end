import axios from 'axios';

const url = `http://localhost:5214/api/`;

const api = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {'X-Custom-Header': 'CustomHeader1'}
});

export default api
