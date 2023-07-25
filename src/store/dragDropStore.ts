import { create } from 'zustand'
import { WordType } from '../types/WordType'

type dragDropStore = {
  currentWord: WordType | null
  dispatchCurrentWord: (currentWord: WordType) => void
}

export const useDragDropStore = create<dragDropStore>((set) => ({
  currentWord: null,
  dispatchCurrentWord: (currentWord: WordType) =>
    set((state) => ({
      ...state,
      currentWord
    }))
}))
