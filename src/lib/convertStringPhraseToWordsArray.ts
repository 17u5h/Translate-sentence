import { Word } from '../types/Word'

export const convertStringPhraseToWordsArray = (phrase: string) => {
  const wordsArray = phrase.split(' ')
  const phraseArray: Word[] = []
  wordsArray.forEach((el, index) => phraseArray.push({ id: index + 1, initialOrder: index + 1, order: index + 1, word: el }))
  return phraseArray
}
