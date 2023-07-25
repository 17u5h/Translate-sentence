import { WordType } from '../types/WordType'

export const getInitialIndexes = (words: WordType[]) => {
  const indexes: number[] = []
  words.forEach((el, index) => indexes.push(index))
  return indexes
}
