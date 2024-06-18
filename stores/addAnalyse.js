import { create } from 'zustand'

const addAnalyseStore = create((set) => ({
    analyseId: '',
    setAnalyseId: (id) => set({ analyseId: id }),
    analyseData: {},
    setAnalyseData: (data) => set({ analyseData: data }),
    requestForProposalData: {},
    setRequestForProposalData: (data) => set({ requestForProposalData: data }),
    proposalData: {},
    setProposalData: (data) => set({ proposalData: data }),
    requestForProposalFileList: [],
    setRequestForProposalFileList: (files) => set({ requestForProposalFileList: files }),
    proposalFileList: [],
    setProposalFileList: (files) => set({ proposalFileList: files }),
}))

export { addAnalyseStore };