import { WordType } from '../types/WordType'

export const shuffleWords = (arr: WordType[]) => {
  arr.sort(() => Math.random() - 0.5)
  arr.forEach((el, index) => {
    el.order = index + 1
    el.initialOrder = index + 1
  })
}
