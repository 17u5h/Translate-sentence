import { Word } from '../types/Word'

export const shuffleWords = (arr: Word[]) => {
  arr.sort(() => Math.random() - 0.5)
}
