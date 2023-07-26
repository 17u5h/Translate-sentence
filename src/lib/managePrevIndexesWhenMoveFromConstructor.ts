import {WordType} from "../types/WordType";
import {EmptySlotType} from "../enum/EmptySlotType";

export const managePrevIndexesWhenMoveFromConstructor = (constructorArray: WordType[], currentWord: WordType, dispatchPreviousIndexes: (indexes: number[]) => void) => {
	const indexOfWord = constructorArray.indexOf(currentWord)
	const arrayWithoutEmptySlots = constructorArray.filter((el) => el.word !== EmptySlotType.emptySlot)
	const newPreviousIndexes: number[] = []

	arrayWithoutEmptySlots.forEach((el, index) => newPreviousIndexes.push(index))
	newPreviousIndexes.splice(indexOfWord, 1)

	dispatchPreviousIndexes(newPreviousIndexes)
}