import axios from 'axios';
let config;

config = {
    $api_url: "http://localhost:8000/api/",
    timeoutDuration: 30000
  };

const api = axios.create({
    baseURL: config.$api_url,
    timeout: 1000,
    headers: {'X-Custom-Header': 'CustomHeader1'}
});

export default api
export { config }
