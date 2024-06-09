import axios from 'axios';

class AxiosConnector {

    constructor(baseURL, contectType = 'application/json') {
        this.session_token = ''
        this.baseURL = baseURL;
        this.contectType = contectType;
        this.session_token = sessionStorage.getItem('session_token');

        this.instance = axios.create({ baseURL: this.baseURL }, {
            headers: {
                'Content-Type': this.contectType
            }
        });

        this.instance.interceptors.request.use(
            (config) => {
                this.session_token = sessionStorage.getItem('session_token');
                if (this.session_token) {
                    config.headers.Authorization = `Bearer ${this.session_token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response) => response,
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    post(endpoint, data) {
        return this.instance.post(endpoint, data);
    }

    get(endpoint) {
        return this.instance.get(endpoint);
    }
}

export default AxiosConnector;