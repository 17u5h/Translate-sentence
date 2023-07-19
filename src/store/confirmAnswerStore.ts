import { create } from 'zustand'

type confirmAnswerStore = {
	isAnswerCorrect: boolean
}

export const useConfirmAnswerStore = create<confirmAnswerStore>((set) => ({
	isAnswerCorrect: false,
	dispatchIsAnswerCorrect: (isAnswerCorrect: boolean) =>
		set((state) => ({
			...state,
			isAnswerCorrect
		})),
}))
