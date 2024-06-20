import { create } from 'zustand'

const dashboardStore = create((set) => ({
    analyseList: [],
    setAnalyseList: (data) => set({ analyseList: data }),
    totalAnalyse: 0,
    setTotalAnalyse: (total) => set({ totalAnalyse: total }),
    selectedAnalyseId: null,
    setSelectedAnalyseId: (id) => set({ selectedAnalyseId: id }),
}))

export { dashboardStore };