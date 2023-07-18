import {create} from "zustand";
import {Word} from "../types/Word";


type PhrasesStore = {
	englishPhraseArray: Word[]
	dispatchEnglishPhraseArray: (englishPhraseArray: Word[]) => void
	russianPhraseArray: Word[]
	dispatchRussianPhraseArray: (russianPhraseArray: Word[]) => void
}

export const usePhrasesStore = create<PhrasesStore>((set) => ({
	englishPhraseArray: [],
	dispatchEnglishPhraseArray: (englishPhraseArray: Word[]) => set((state) => ({
		...state,
		englishPhraseArray
	})),
	russianPhraseArray: [],
	dispatchRussianPhraseArray: (russianPhraseArray: Word[]) => set((state) => ({
		...state,
		russianPhraseArray
	})),
}))