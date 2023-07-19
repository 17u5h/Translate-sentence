import { seekAndDestroyWord } from './seekAndDestroyWord'
import { Word } from '../types/Word'

export const moveWordFromTo = (
  currentWord: Word | null,
  arrayFrom: Word[],
  arrayTo: Word[],
  dispatchArrayFrom: (words: Word[]) => void,
  dispatchArrayTo: (words: Word[]) => void
) => {
  if (currentWord && arrayTo.includes(currentWord)) return
  if (currentWord) {
    arrayTo.push(currentWord)
    seekAndDestroyWord(currentWord, arrayFrom, dispatchArrayFrom)
  }
  dispatchArrayTo(arrayTo)
}
