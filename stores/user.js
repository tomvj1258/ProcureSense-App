import { create } from 'zustand'

const userStore = create((set) => ({
    userData: {},
    setUserData: (data) => set({ userData: data }),
}))

export { userStore };