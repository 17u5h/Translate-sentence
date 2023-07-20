import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../atoms/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { moveWordFromTo } from '../../../lib/moveWordFromTo'
import { keepConstructorArrayFilled } from '../../../lib/keepConstructorArrayFilled'
import { usePhrasesStore } from '../../../store/initialPhrasesStore'
import { Word } from '../../../types/Word'

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
  const { constructorArrayLength } = usePhrasesStore(({ constructorArrayLength }) => ({
    constructorArrayLength
  }))
  const { dispatchVisibleConstructorArray } = useWorkplaceStore(
    ({ dispatchVisibleConstructorArray }) => ({ dispatchVisibleConstructorArray })
  )

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
    keepConstructorArrayFilled(
      constructorArrayLength,
      constructorArray,
      dispatchVisibleConstructorArray
    )
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    return
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    keepConstructorArrayFilled(
      constructorArrayLength,
      constructorArray,
      dispatchVisibleConstructorArray
    )
  }, [constructorArray])

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
