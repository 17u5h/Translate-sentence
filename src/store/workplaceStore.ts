import { create } from 'zustand'
import { WordType } from '../types/WordType'

type PhrasesStore = {
  worksheetArray: WordType[]
  dispatchWorksheetArray: (englishPhraseArray: WordType[]) => void
  constructorArray: WordType[]
  dispatchConstructorArray: (russianPhraseArray: WordType[]) => void
}

export const useWorkplaceStore = create<PhrasesStore>((set) => ({
  worksheetArray: [],
  dispatchWorksheetArray: (worksheetArray: WordType[]) =>
    set((state) => ({
      ...state,
      worksheetArray
    })),
  constructorArray: [],
  dispatchConstructorArray: (constructorArray: WordType[]) =>
    set((state) => ({
      ...state,
      constructorArray
    }))
}))
