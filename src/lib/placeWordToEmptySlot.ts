import { Word } from '../types/Word'
import { seekAndDestroyWord } from './seekAndDestroyWord'

export const placeWordToEmptySlot = (
  currentWord: Word | null,
  emptySlot: Word,
  constructorArray: Word[],
  dispatchConstructorArray: (words: Word[]) => void,
  worksheetArray: Word[],
  dispatchWorksheetArray: (words: Word[]) => void
) => {
  if (!currentWord) return
  const indexOfCurrentWord = constructorArray.indexOf(currentWord)
  if (indexOfCurrentWord >= 0) return
  const indexOfEmptySlot = constructorArray.indexOf(emptySlot)
  if (!indexOfEmptySlot) console.error('не нашёл пустой слот в блоке конструктора слов')
  constructorArray.splice(indexOfEmptySlot, 1, currentWord)
  dispatchConstructorArray(constructorArray)
  seekAndDestroyWord(currentWord, worksheetArray, dispatchWorksheetArray)
}
