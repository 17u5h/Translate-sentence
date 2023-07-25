import React, { useEffect } from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../atoms/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { keepConstructorArrayFilled } from '../../../lib/keepConstructorArrayFilled'
import { usePhrasesStore } from '../../../store/initialPhrasesStore'
import { usePreviousIndexesStore } from '../../../store/previousIndexesStore'
import { moveWordToWorksheet } from '../../../lib/moveWordToWorksheet'
import {WordType} from "../../../types/WordType";

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
  const { previousIndexes} = usePreviousIndexesStore(({ previousIndexes}) => ({previousIndexes}))

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    moveWordToWorksheet(
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

  const sortByOrder = (a: WordType, b: WordType) => a.order - b.order

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
        .sort(sortByOrder)
        .map((el, index) => (
          <DraggableWord
            key={el.id}
            word={el}
            isWorksheet={true}
            index={index}
            previousIndex={previousIndexes[index]}
          />
        ))}
    </S.WorksheetBlock>
  )
}

export default WorksheetBlock
