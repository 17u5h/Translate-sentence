import { WordType } from '../types/WordType'
import { sortByInitialOrder } from './sortByInitialOrder'

export const deleteExcessEmptySlots = (
  constructorArrayInitialLength: number,
  constructorArray: WordType[],
  dispatchConstructorArray: (words: WordType[]) => void
) => {
  constructorArray.sort(sortByInitialOrder)
  constructorArray.length = constructorArrayInitialLength
  dispatchConstructorArray(constructorArray)
}
