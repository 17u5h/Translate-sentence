import { create } from 'zustand'
import { WordType } from '../types/WordType'

type InitialPhrasesStore = {
  englishPhraseArray: WordType[]
  dispatchEnglishPhraseArray: (englishPhraseArray: WordType[]) => void
  initialRussianPhraseArray: WordType[]
  dispatchInitialRussianPhraseArray: (russianPhraseArray: WordType[]) => void
  constructorArrayInitialLength: number
  dispatchConstructorArrayInitialLength: (constructorArrayLength: number) => void
}

export const usePhrasesStore = create<InitialPhrasesStore>((set) => ({
  englishPhraseArray: [],
  dispatchEnglishPhraseArray: (englishPhraseArray: WordType[]) =>
    set((state) => ({
      ...state,
      englishPhraseArray
    })),
  initialRussianPhraseArray: [],
  dispatchInitialRussianPhraseArray: (initialRussianPhraseArray: WordType[]) =>
    set((state) => ({
      ...state,
      initialRussianPhraseArray
    })),
  constructorArrayInitialLength: 0,
  dispatchConstructorArrayInitialLength: (constructorArrayLength: number) =>
    set((state) => ({
      ...state,
      constructorArrayInitialLength: constructorArrayLength
    }))
}))
