export const emptySlotPositionStyle = (index: number) => {
  if (index === undefined) return { top: '0', left: '0' }
  const wordsInRow = 4

  const shift = (index: number) => Math.floor(index / (wordsInRow - 0.25))

  return {
    top: `${10 + shift(index) * 50}px`,
    left: `${10 + index * 190 - shift(index) * wordsInRow * 190}px`
  }
}
