import { create } from 'zustand'

type PlayAgainStore = {
  playAgain: number
  dispatchPlayAgain: (playAgain: number) => void
}

export const usePlayAgainStore = create<PlayAgainStore>((set) => ({
  playAgain: 0,
  dispatchPlayAgain: (playAgain: number) =>
    set((state) => ({
      ...state,
      playAgain
    }))
}))
