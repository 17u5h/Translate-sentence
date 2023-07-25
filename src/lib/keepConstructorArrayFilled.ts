import { WordType } from '../types/WordType'

export const keepConstructorArrayFilled = (
  constructorArrayLength: number,
  constructorArray: WordType[],
  dispatchConstructorArray: (words: WordType[]) => void
) => {
  const visibleArray = [...constructorArray]

  if (visibleArray.length >= constructorArrayLength) return

  while (visibleArray.length < constructorArrayLength) {
    const emptySlotId = Math.round(Date.now() * Math.random()) //по хорошему, так делать не надо
    const emptySlot = {
      id: emptySlotId,
      initialOrder: 1000,
      order: 0,
      word: 'emptySlot'
    }
    visibleArray.push(emptySlot)
  }

  dispatchConstructorArray(visibleArray)
}
