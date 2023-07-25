import { sortByInitialOrder } from './sortByInitialOrder'
import { WordType } from '../types/WordType'

export const calculateNewPreviousIndexes = (
  constructorArray: WordType[],
  currentWord: WordType | null,
  indexOfEmptySlot: number,
  dispatchPreviousIndexes: (indexes: number[]) => void
) => {
  const arrayWithoutEmptySlots = constructorArray.filter((el) => el.word !== 'emptySlot')
  const previousIndexes: number[] = []

  if (!currentWord) throw new Error('потерялось перетаскиваемое слово в компоненте EmptySlot')

  arrayWithoutEmptySlots.push(currentWord)
  arrayWithoutEmptySlots.forEach((el, index) => previousIndexes.push(index))
  arrayWithoutEmptySlots.sort(sortByInitialOrder)

  const indexOfCurrentWord = arrayWithoutEmptySlots.indexOf(currentWord)

  previousIndexes.splice(indexOfCurrentWord, 1, indexOfEmptySlot + 1)
  const newPreviousIndexes = previousIndexes.map((el) =>
    el > indexOfCurrentWord ? el - 1 : el
  )
  dispatchPreviousIndexes(newPreviousIndexes)
}
