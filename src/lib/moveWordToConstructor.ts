import { seekAndDestroyWord } from './seekAndDestroyWord'
import { WordType } from '../types/WordType'

export const moveWordToConstructor = (
  currentWord: WordType | null,
  worksheetArray: WordType[],
  constructorArray: WordType[],
  dispatchWorksheetArray: (words: WordType[]) => void,
  dispatchConstructorArray: (words: WordType[]) => void
) => {
  if (!currentWord) return
  if (constructorArray.includes(currentWord)) return
  if (!constructorArray.length) {
    constructorArray.push(currentWord)
    return
  }
  const lastWord = constructorArray.reduce((acc, current) =>
    acc.order > current.order ? acc : current
  )
  constructorArray.push({ ...currentWord, order: lastWord.order + 1 })
  seekAndDestroyWord(currentWord, worksheetArray, dispatchWorksheetArray)

  dispatchConstructorArray(constructorArray)
}
