export const positionStyle = (index: number | undefined) => {
	if (index === undefined) return
	const wordsInRow = 4
	const shift = Math.floor(index / (wordsInRow - 0.25))
	return {top: `${10 + shift * 50}px`, left: `${index * 190 - shift * wordsInRow * 190 + 10}px`}
}