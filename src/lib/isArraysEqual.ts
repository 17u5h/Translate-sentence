import { WordType } from '../types/WordType'

export const isArraysEqual = (worksheetArray: WordType[], englishPhraseArray: WordType[]) => {
  const worksheetIds = worksheetArray.map((el) => el.id)
  const englishPhraseIds = englishPhraseArray.map((el) => el.id)

  return JSON.stringify(worksheetIds) === JSON.stringify(englishPhraseIds)
}
