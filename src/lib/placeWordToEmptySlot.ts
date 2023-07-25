import { WordType } from '../types/WordType'
import { seekAndDestroyWord } from './seekAndDestroyWord'

export const placeWordToEmptySlot = (
  currentWord: WordType | null,
  emptySlot: WordType,
  constructorArray: WordType[],
  dispatchConstructorArray: (words: WordType[]) => void,
  worksheetArray: WordType[],
  dispatchWorksheetArray: (words: WordType[]) => void
) => {
  if (!currentWord) return

  const indexOfCurrentWord = constructorArray.indexOf(currentWord)
  if (indexOfCurrentWord >= 0) return

  const indexOfEmptySlot = constructorArray.indexOf(emptySlot)
  if (!indexOfEmptySlot) console.error('куда-то подевался пустой слот в который ложим слово')

  const constructorArrayClone = structuredClone(constructorArray)
  constructorArrayClone.splice(indexOfEmptySlot, 1, currentWord)

  dispatchConstructorArray(constructorArrayClone)

  seekAndDestroyWord(currentWord, worksheetArray, dispatchWorksheetArray)
}
