import { WordType } from '../types/WordType'

export const moveWordToWorksheet = (
  currentWord: WordType | null,
  constructorArray: WordType[],
  worksheetArray: WordType[],
  dispatchConstructorArray: (words: WordType[]) => void,
  dispatchWorksheetArray: (words: WordType[]) => void
) => {
  if (!currentWord) return
  if (worksheetArray.includes(currentWord)) return

  const initialValue = { id: 0, initialOrder: 0, order: 0, word: '' }
  const lastWordInWorksheet = worksheetArray.reduce(
    (acc, current) => (acc.order > current.order ? acc : current),
    initialValue
  )
  worksheetArray.push({ ...currentWord, order: lastWordInWorksheet.order + 1 })

  const indexOfCurrentWord = constructorArray.indexOf(currentWord)
  constructorArray.splice(indexOfCurrentWord, 1)

  dispatchConstructorArray(constructorArray)
  dispatchWorksheetArray(worksheetArray)
}
