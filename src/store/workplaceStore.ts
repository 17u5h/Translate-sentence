import { create } from 'zustand'
import { Word } from '../types/Word'

type PhrasesStore = {
	worksheetArray: Word[]
	dispatchWorksheetArray: (englishPhraseArray: Word[]) => void
	constructorArray: Word[]
	dispatchConstructorArray: (russianPhraseArray: Word[]) => void
}

export const useWorkplaceStore = create<PhrasesStore>((set) => ({
	worksheetArray: [],
	dispatchWorksheetArray: (worksheetArray: Word[]) =>
		set((state) => ({
			...state,
			worksheetArray
		})),
	constructorArray: [],
	dispatchConstructorArray: (constructorArray: Word[]) =>
		set((state) => ({
			...state,
			constructorArray
		}))
}))
