import {Word} from '../types/Word'

export const shuffleWords = (arr: Word[]) => {
	arr.sort(() => Math.random() - 0.5)
	arr.forEach((el, index) => {
		el.order = index + 1
		el.initialOrder = index + 1
	})
}
