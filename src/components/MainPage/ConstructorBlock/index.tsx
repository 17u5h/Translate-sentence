import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../atoms/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { moveWordFromTo } from '../../../lib/moveWordFromTo'
import EmptySlot from '../atoms/EmptySlot'

const ConstructorBlock = () => {
  const { constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray } =
    useWorkplaceStore(
      ({ constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray }) => ({
        constructorArray,
        dispatchConstructorArray,
        worksheetArray,
        dispatchWorksheetArray
      })
    )
  const { currentWord } = useDragDropStore(({ currentWord }) => ({ currentWord }))
  const { visibleConstructorArray } = useWorkplaceStore(({ visibleConstructorArray }) => ({
    visibleConstructorArray
  }))

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const isToWorksheet = false

    moveWordFromTo(
      isToWorksheet,
      currentWord,
      worksheetArray,
      constructorArray,
      dispatchWorksheetArray,
      dispatchConstructorArray
    )
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <S.ConstructorBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
      {visibleConstructorArray.map((el) => {
        if (el.word !== 'emptySlot')
          return <DraggableWord key={el.id} word={el} isWorksheet={false} />
        else return <EmptySlot key={el.id} emptySlot={el} />
      })}
    </S.ConstructorBlock>
  )
}

export default ConstructorBlock
