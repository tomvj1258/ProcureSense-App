import AxiosConnector from '@/utils/axios';


const ingestResquestForProposal = async (payload) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'multipart/form-data')
        const response = await axios_instance.post(`/ingest/rp`, payload)
        return response.data
    }
    catch (error) {
        console.log(`Error while uploading request for proposal. Error: ${error}`)
    }
}

const ingestProposal = async (data) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'multipart/form-data')
        const response = await axios_instance.post(`/ingest/p`, data)
        return response.data
    }
    catch (error) {
        console.log(`Error while uploading proposals. Error: ${error}`)
    }
}

const fetchResquestForProposal = async (id) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.get(`/analyse/rp?id=${id}`)
        return response.data
    }
    catch (error) {
        console.log(`Error while uploading request for proposal. Error: ${error}`)
    }
}

const fetchProposal = async (id) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.get(`/analyse/p?id=${id}`)
        return response.data
    }
    catch (error) {
        console.log(`Error while uploading request for proposal. Error: ${error}`)
    }
}

const editResquestForProposal = async (data) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.post(`/analyse/edit/rp`, data)
        return response.data
    }
    catch (error) {
        console.log(`Error while updating request for proposal. Error: ${error}`)
    }
}

const editAnalyse = async (data) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.post(`/analyse/edit`, data)
        return response.data
    }
    catch (error) {
        console.log(`Error while updating analyse. Error: ${error}`)
    }
}

const editProposal = async (data) => {
    try {
        const axios_instance = new AxiosConnector(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, 'application/json')
        const response = await axios_instance.post(`/analyse/edit/p`, data)
        return response.data
    }
    catch (error) {
        console.log(`Error while updating proposal. Error: ${error}`)
    }
}

export {
    ingestResquestForProposal,
    ingestProposal,
    editResquestForProposal,
    editAnalyse,
    editProposal,
    fetchResquestForProposal,
    fetchProposal
}