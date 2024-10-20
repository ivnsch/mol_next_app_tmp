import { create } from "zustand"

interface MyStoreState {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useMyStore = create<MyStoreState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
