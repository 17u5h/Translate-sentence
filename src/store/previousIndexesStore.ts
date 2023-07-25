import { create } from 'zustand'

type PreviousIndexesStore = {
  previousIndexes: number[]
  dispatchPreviousIndexes: (previousIndexes: number[]) => void
}

export const usePreviousIndexesStore = create<PreviousIndexesStore>((set) => ({
  previousIndexes: [],
  dispatchPreviousIndexes: (previousIndexes: number[]) =>
    set((state) => ({
      ...state,
      previousIndexes
    }))
}))
