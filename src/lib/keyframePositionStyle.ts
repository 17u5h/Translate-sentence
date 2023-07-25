export const keyframePositionStyle = (indexTo: number | undefined, indexFrom: number) => {
  if (indexTo === undefined)
    return '@keyframes moveIt { 0% {top: 0; left: 0;}100% {top: 100px; left: 100px;}}'
  const wordsInRow = 4

  const shift = (index: number) => Math.floor(index / (wordsInRow - 0.25))

  const position = (index: number) =>
    `top: ${10 + shift(index) * 50}px; left: ${
      10 + index * 190 - shift(index) * wordsInRow * 190
    }px;`

  return `
    @keyframes moveIt${indexTo} {
      0% {${position(indexFrom)}}
      100% {${position(indexTo)}
  `
}
