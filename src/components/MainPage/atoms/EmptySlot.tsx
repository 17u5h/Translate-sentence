import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { Word } from '../../../types/Word'
import { placeWordToEmptySlot } from '../../../lib/placeWordToEmptySlot'
import { useDragDropStore } from '../../../store/dragDropStore'
import { useWorkplaceStore } from '../../../store/workplaceStore'

type Props = {
  emptySlot: Word
}

const EmptySlot = ({ emptySlot }: Props) => {
  const { currentWord } = useDragDropStore(({ currentWord }) => ({ currentWord }))
  const { visibleConstructorArray, dispatchVisibleConstructorArray } = useWorkplaceStore(
    ({ visibleConstructorArray, dispatchVisibleConstructorArray }) => ({
      visibleConstructorArray,
      dispatchVisibleConstructorArray
    })
  )
  const { worksheetArray, dispatchWorksheetArray } =
    useWorkplaceStore(
      ({  worksheetArray, dispatchWorksheetArray }) => ({

        worksheetArray,
        dispatchWorksheetArray
      })
    )

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, emptySlot: Word) => {
    e.preventDefault()
    e.stopPropagation()
    placeWordToEmptySlot(
      currentWord,
      emptySlot,
      visibleConstructorArray,
      dispatchVisibleConstructorArray,
      worksheetArray,
      dispatchWorksheetArray
    )
  }
  return (
    <S.ConstructorEmptySlot
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, emptySlot)}
    >
      *******
    </S.ConstructorEmptySlot>
  )
}

export default EmptySlot
