import { Word } from '../types/Word'
import { sortByInitialOrder } from './sortByInitialOrder'

export const deleteExcessEmptySlots = (
  constructorArrayInitialLength: number,
  constructorArray: Word[],
  dispatchConstructorArray: (words: Word[]) => void
) => {
  constructorArray.sort(sortByInitialOrder)
  constructorArray.length = constructorArrayInitialLength
  dispatchConstructorArray(constructorArray)
}
