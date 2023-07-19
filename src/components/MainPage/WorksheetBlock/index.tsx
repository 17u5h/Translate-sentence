import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../ConstructorBlock/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { moveWordFromTo } from '../../../lib/moveWordFromTo'

const WorksheetBlock = () => {
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

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const isToWorksheet = true

    moveWordFromTo(
      isToWorksheet,
      currentWord,
      constructorArray,
      worksheetArray,
      dispatchConstructorArray,
      dispatchWorksheetArray
    )
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    return
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <S.WorksheetBlock
      onDrop={(e) => dropHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
    >
      {worksheetArray
        .sort((a, b) => a.order - b.order)
        .map((el) => (
          <DraggableWord key={el.id} word={el} isWorksheet={true} />
        ))}
    </S.WorksheetBlock>
  )
}

export default WorksheetBlock
