import {Word} from "../types/Word";

export const placeWordToFirstEmptySlot = (currentWord: Word | null,
																					visibleConstructorArray: Word[],
																					dispatchVisibleConstructorArray: (words: Word[]) => void) => {
	if (!currentWord) throw new Error('куда-то подевалось перетягиваемое слово')
	const firstEmptySlot = visibleConstructorArray.find(el => el.word === 'emptySlot')
	if (!firstEmptySlot) return
	const indexOfFirstEmptySlot = visibleConstructorArray.indexOf(firstEmptySlot)
	visibleConstructorArray.splice(indexOfFirstEmptySlot, 1, currentWord)
	dispatchVisibleConstructorArray(visibleConstructorArray)
}