import { create } from 'zustand'

const dashboardStore = create((set) => ({
    analyseList: [],
    setAnalyseList: (data) => set({ analyseList: data }),
    totalAnalyse: 0,
    setTotalAnalyse: (total) => set({ totalAnalyse: total }),
    selectedAnalyseId: null,
    setSelectedAnalyseId: (id) => set({ selectedAnalyseId: id }),
    selectedGeneralAnalyseData: null,
    setSelectedGeneralAnalyseData: (data) => set({ selectedGeneralAnalyseData: data }),
    selectedFinancialAnalyseData: null,
    setSelectedFinancialAnalyseData: (data) => set({ selectedFinancialAnalyseData: data }),
    selectedRiskAnalyseData: null,
    setSelectedRiskAnalyseData: (data) => set({ selectedRiskAnalyseData: data }),
}))

export { dashboardStore };