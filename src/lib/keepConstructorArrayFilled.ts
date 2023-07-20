import { Word } from '../types/Word'

export const keepConstructorArrayFilled = (
  constructorArrayLength: number,
  constructorArray: Word[],
  dispatchConstructorArray: (words: Word[]) => void
) => {
  const visibleArray = [...constructorArray]
  if (visibleArray.length >= constructorArrayLength) return
  while (visibleArray.length < constructorArrayLength) {
    const emptySlotId = Math.round(Date.now() * Math.random())
    const emptySlot = { id: emptySlotId, initialOrder: 1000, order: 0, word: 'emptySlot' }
    visibleArray.push(emptySlot)
  }

  dispatchConstructorArray(visibleArray)
}
