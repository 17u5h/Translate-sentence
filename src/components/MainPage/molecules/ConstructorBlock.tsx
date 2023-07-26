import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../atoms/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import EmptySlot from '../atoms/EmptySlot'
import { sortByInitialOrder } from '../../../lib/sortByInitialOrder'
import { deleteExcessEmptySlots } from '../../../lib/deleteExcessEmptySlots'
import { usePhrasesStore } from '../../../store/initialPhrasesStore'
import { usePreviousIndexesStore } from '../../../store/previousIndexesStore'
import { moveWordToConstructor } from '../../../lib/moveWordToConstructor'
import BackgroundSlots from "./BackgroundSlots";
import {EmptySlotType} from "../../../enum/EmptySlotType";

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
  const { constructorArrayInitialLength } = usePhrasesStore(
    ({ constructorArrayInitialLength }) => ({
      constructorArrayInitialLength
    })
  )
  const { previousIndexes } = usePreviousIndexesStore(({ previousIndexes }) => ({previousIndexes}))

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    moveWordToConstructor(
      currentWord,
      worksheetArray,
      constructorArray,
      dispatchWorksheetArray,
      dispatchConstructorArray
    )
    deleteExcessEmptySlots(
      constructorArrayInitialLength,
      constructorArray,
      dispatchConstructorArray
    )
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  return (
    <S.ConstructorBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
      {constructorArray.sort(sortByInitialOrder).map((el, index) => {
        if (el.word !== EmptySlotType.emptySlot)
          return (
            <DraggableWord
              key={el.id}
              word={el}
              isWorksheet={false}
              index={index}
              previousIndex={previousIndexes[index]}
            />
          )
        else return <EmptySlot key={el.id} emptySlot={el} isWorksheet={false} index={index} />
      })}
      <BackgroundSlots />
    </S.ConstructorBlock>
  )
}

export default ConstructorBlock
