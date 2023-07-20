import { seekAndDestroyWord } from './seekAndDestroyWord'
import { Word } from '../types/Word'

export const moveWordFromTo = (
  isToWorksheet: boolean,
  currentWord: Word | null,
  arrayFrom: Word[],
  arrayTo: Word[],
  dispatchArrayFrom: (words: Word[]) => void,
  dispatchArrayTo: (words: Word[]) => void,
  dispatchVisibleConstructorArray: (words: Word[]) => void
) => {
  if (!currentWord) return
  if (arrayTo.includes(currentWord)) return
  if (isToWorksheet && arrayTo.length) {
    const lastWord = arrayTo.reduce((acc, current) => (acc.order > current.order ? acc : current))
    arrayTo.push({ ...currentWord, order: lastWord.order + 1 })
    seekAndDestroyWord(currentWord, arrayFrom, dispatchArrayFrom)
    dispatchArrayTo(arrayTo)
    return
  }
  arrayTo.push(currentWord)
  seekAndDestroyWord(currentWord, arrayFrom, dispatchArrayFrom)
  dispatchArrayTo(arrayTo)
  dispatchVisibleConstructorArray(arrayTo)
}
