import { create } from 'zustand'

const dashboardStore = create((set) => ({
    selectedAnalyseId: '',
    setSelectedAnalyseId: (id) => set({ setSelectedAnalyseId: id }),
    analyseList: [],
    setAnalyseList: (data) => set({ analyseList: data }),
    selectedAnalyseData: analyseList.map((analyse) => analyse.id === selectedAnalyseId),
}))

export { dashboardStore };