import { create } from 'zustand'
import { Word } from '../types/Word'

type dragDropStore = {
  currentWord: Word | null
  dispatchCurrentWord: (currentWord: Word) => void
}

export const useDragDropStore = create<dragDropStore>((set) => ({
  currentWord: null,
  dispatchCurrentWord: (currentWord: Word) =>
    set((state) => ({
      ...state,
      currentWord
    }))
}))
