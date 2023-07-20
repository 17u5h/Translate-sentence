import { Word } from '../types/Word'

export const isArraysEqual = (worksheetArray: Word[], englishPhraseArray: Word[]) => {
  const worksheetIds = worksheetArray.map((el) => el.id)
  const englishPhraseIds = englishPhraseArray.map((el) => el.id)

  return JSON.stringify(worksheetIds) === JSON.stringify(englishPhraseIds)
}
