import { Word } from '../types/Word'

export const sortByInitialOrder = (a: Word, b: Word) => a.initialOrder - b.initialOrder
