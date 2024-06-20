import AxiosConnector from '@/utils/axios';

const fetchAllAnalyse = async () => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.get(`/analyse/all`)
        return response.data
    }
    catch (error) {
        console.log(`Error while fetching all analyse data. Error: ${error}`)
    }
}

const fetchAnalyse = async (id) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.get(`/analyse?id=${id}`)

        return response.data
    }
    catch (error) {
        console.log(`Error while fetching analyse data [${id}]. Error: ${error}`)
    }
}

const startAnalyse = async (id) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.put(`/analyse?id=${id}`)
        return response.data
    }
    catch (error) {
        console.log(`Error while starting analyse [${id}]. Error: ${error}`)
    }
}

export {
    fetchAllAnalyse,
    fetchAnalyse,
    startAnalyse
}