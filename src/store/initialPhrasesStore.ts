import { create } from 'zustand'
import { Word } from '../types/Word'

type InitialPhrasesStore = {
  englishPhraseArray: Word[]
  dispatchEnglishPhraseArray: (englishPhraseArray: Word[]) => void
  russianPhraseArray: Word[]
  dispatchRussianPhraseArray: (russianPhraseArray: Word[]) => void
  constructorArrayLength: number
  dispatchConstructorArrayLength: (constructorArrayLength: number) => void
}

export const usePhrasesStore = create<InitialPhrasesStore>((set) => ({
  englishPhraseArray: [],
  dispatchEnglishPhraseArray: (englishPhraseArray: Word[]) =>
    set((state) => ({
      ...state,
      englishPhraseArray
    })),
  russianPhraseArray: [],
  dispatchRussianPhraseArray: (russianPhraseArray: Word[]) =>
    set((state) => ({
      ...state,
      russianPhraseArray
    })),
  constructorArrayLength: 0,
  dispatchConstructorArrayLength: (constructorArrayLength: number) =>
    set((state) => ({
      ...state,
      constructorArrayLength
    }))
}))
