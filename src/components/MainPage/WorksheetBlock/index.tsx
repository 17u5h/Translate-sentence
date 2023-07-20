import React, { useEffect } from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../atoms/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { moveWordFromTo } from '../../../lib/moveWordFromTo'
import { keepConstructorArrayFilled } from '../../../lib/keepConstructorArrayFilled'
import { usePhrasesStore } from '../../../store/initialPhrasesStore'

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
  const { constructorArrayInitialLength } = usePhrasesStore(
    ({ constructorArrayInitialLength }) => ({
      constructorArrayInitialLength
    })
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
      constructorArrayInitialLength,
      constructorArray,
      dispatchConstructorArray
    )
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    keepConstructorArrayFilled(
      constructorArrayInitialLength,
      constructorArray,
      dispatchConstructorArray
    )
  }, [constructorArray])

  return (
    <S.WorksheetBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
      {worksheetArray
        .sort((a, b) => a.order - b.order)
        .map((el) => (
          <DraggableWord key={el.id} word={el} isWorksheet={true} />
        ))}
    </S.WorksheetBlock>
  )
}

export default WorksheetBlock
