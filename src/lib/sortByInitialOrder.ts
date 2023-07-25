import { WordType } from '../types/WordType'

export const sortByInitialOrder = (a: WordType, b: WordType) => a.initialOrder - b.initialOrder
