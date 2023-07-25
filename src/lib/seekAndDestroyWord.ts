import { WordType } from '../types/WordType'

export const seekAndDestroyWord = (
  word: WordType,
  wordsArray: WordType[],
  dispatchWordsArray: (words: WordType[]) => void
) => {
  if (wordsArray.includes(word)) {
    const index = wordsArray.indexOf(word)
    wordsArray.splice(index, 1)
    dispatchWordsArray(wordsArray)
  } else {
    console.error('функиця seekAndDestroyWord не нашла слово')
  }
}
