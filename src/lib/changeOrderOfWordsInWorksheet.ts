import { Word } from '../types/Word'

export const changeOrderOfWordsInWorksheet = (
  currentWord: Word | null,
  onDropWord: Word,
  worksheetArray: Word[],
  dispatchWorksheetArray: (words: Word[]) => void
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
