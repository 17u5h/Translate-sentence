import { WordType } from '../types/WordType'

export const convertStringPhraseToWordsArray = (phrase: string) => {
  const phraseArray = phrase.split(' ')
  const wordsArray: WordType[] = []

  phraseArray.forEach((el, index) =>
    wordsArray.push({ id: index + 1, initialOrder: index + 1, order: index + 1, word: el })
  )

  return wordsArray
}
