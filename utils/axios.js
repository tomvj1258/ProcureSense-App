import axios from 'axios';


class AxiosConnector {
    constructor(baseURL) {
        this.instance = axios.create(
            {
                baseURL: baseURL
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    post(endpoint, data) {
        return this.instance.post(endpoint, data);
    }

    get(endpoint) {
        return this.instance.get(endpoint);
    }
}

export default AxiosConnector;