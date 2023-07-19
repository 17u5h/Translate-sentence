import {Word} from "../types/Word";

export const seekAndDestroyWord = (word: Word, wordsArray: Word[], dispatchWordsArray: (words: Word[]) => void) => {
	if (wordsArray.includes(word)) {
		const index = wordsArray.indexOf(word)
		wordsArray.splice(index, 1)
		dispatchWordsArray(wordsArray)
	} else {
		console.error('функиця seekAndDestroyWord не нашла слово')
	}
}