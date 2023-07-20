import {Word} from '../types/Word'
import {seekAndDestroyWord} from "./seekAndDestroyWord";

export const placeWordToEmptySlot = (
	currentWord: Word | null,
	emptySlot: Word,
	visibleConstructorArray: Word[],
	dispatchVisibleConstructorArray: (words: Word[]) => void,
	worksheetArray: Word[],
	dispatchWorksheetArray: (words: Word[]) => void,
dispatchConstructorArray: (words: Word[]) => void
) => {
	if (!currentWord) return
	const indexOfEmptySlot = visibleConstructorArray.indexOf(emptySlot)
	if (!indexOfEmptySlot) console.error('не нашёл пустой слот в блоке конструктора слов')
	visibleConstructorArray.splice(indexOfEmptySlot, 1, currentWord)
	dispatchVisibleConstructorArray(visibleConstructorArray)
	dispatchConstructorArray(visibleConstructorArray)    //todo опасности
	seekAndDestroyWord(currentWord, worksheetArray, dispatchWorksheetArray)
}
