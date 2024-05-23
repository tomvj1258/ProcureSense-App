import axios from 'axios';

class AxiosInstance {
    constructor(headers = null) {
        this.baseURL = `http://localhost:5023`
        this.headers = headers;
    }
    async initialize() {
        try {
            this.axiosInstance = axios.create({
                baseURL: this.baseURL,
                headers: this.headers ? this.headers : {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
        }
        catch (error) {
            throw error;
        }
    }

    async post(url, payload) {
        try {
            const response = await this.axiosInstance.post(url, payload);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}

export { AxiosInstance }