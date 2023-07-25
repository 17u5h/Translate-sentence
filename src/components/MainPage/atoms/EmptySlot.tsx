import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/mainPageStyles'
import { WordType } from '../../../types/WordType'
import { placeWordToEmptySlot } from '../../../lib/placeWordToEmptySlot'
import { useDragDropStore } from '../../../store/dragDropStore'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import { PositionStylesType } from '../../../types/PositionStylesType'
import { emptySlotPositionStyle } from '../../../lib/emptySlotPositionStyle'
import { usePreviousIndexesStore } from '../../../store/previousIndexesStore'
import { calculateNewPreviousIndexes } from '../../../lib/calculateNewPreviousIndexes'

type Props = {
  emptySlot: WordType
  isWorksheet: boolean
  index: number
}

const EmptySlot = ({ emptySlot, isWorksheet, index }: Props) => {
  const initialPosition = { top: '-20000px', left: '-20000px' }
  const [positionStyles, setPositionStyles] = useState<PositionStylesType>(initialPosition)

  const { currentWord } = useDragDropStore(({ currentWord }) => ({ currentWord }))

  const { constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray } =
    useWorkplaceStore(
      ({ constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray }) => ({
        constructorArray,
        dispatchConstructorArray,

        worksheetArray,
        dispatchWorksheetArray
      })
    )
  const { dispatchPreviousIndexes } = usePreviousIndexesStore(({  dispatchPreviousIndexes }) => ({dispatchPreviousIndexes}))

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, emptySlot: WordType) => {
    e.preventDefault()
    e.stopPropagation()
    const indexOfEmptySlot = constructorArray.indexOf(emptySlot)

    placeWordToEmptySlot(
      currentWord,
      emptySlot,
      constructorArray,
      dispatchConstructorArray,
      worksheetArray,
      dispatchWorksheetArray
    )
    calculateNewPreviousIndexes(
      constructorArray,
      currentWord,
      indexOfEmptySlot,
      dispatchPreviousIndexes
    )
  }

  useEffect(() => {
    setPositionStyles(emptySlotPositionStyle(index))
  }, [index])

  return (
    <S.EmptySlot
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, emptySlot)}
      $isWorksheet={isWorksheet}
      style={positionStyles}
    />
  )
}

export default EmptySlot
