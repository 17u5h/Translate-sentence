import { WordType } from '../types/WordType'

export const changeOrderOfWordsInWorksheet = (
  currentWord: WordType | null,
  onDropWord: WordType,
  worksheetArray: WordType[],
  dispatchWorksheetArray: (words: WordType[]) => void
) => {
  if (!currentWord) return

  const sortedArray = worksheetArray.map((el) => {
    if (el.id === onDropWord.id) {
      return { ...el, order: currentWord.order }
    }
    if (el.id === currentWord.id) {
      return { ...el, order: onDropWord.order }
    }
    return el
  })

  dispatchWorksheetArray(sortedArray)
}
