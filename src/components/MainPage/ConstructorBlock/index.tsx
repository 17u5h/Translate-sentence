import React, {useEffect, useState} from 'react'
import * as S from '../../../styles/mainPageStyles'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import DraggableWord from '../atoms/DraggableWord'
import { useDragDropStore } from '../../../store/dragDropStore'
import { moveWordFromTo } from '../../../lib/moveWordFromTo'
import EmptySlot from '../atoms/EmptySlot'
import {placeWordToEmptySlot} from "../../../lib/placeWordToEmptySlot";
import {placeWordToFirstEmptySlot} from "../../../lib/placeWordToFirstEmptySlot";
import {Word} from "../../../types/Word";

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
  const { visibleConstructorArray,dispatchVisibleConstructorArray } = useWorkplaceStore(({ visibleConstructorArray,dispatchVisibleConstructorArray }) => ({
    visibleConstructorArray,dispatchVisibleConstructorArray
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
      dispatchConstructorArray,
      dispatchVisibleConstructorArray
    )
    console.log('constr', constructorArray)
    console.log('visib', visibleConstructorArray)
    // placeWordToFirstEmptySlot(
    //   currentWord,
    //   visibleConstructorArray,
    //   dispatchVisibleConstructorArray
    // )
  }
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  useEffect(() => {
    return
  },[visibleConstructorArray])

  return (
    <S.ConstructorBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
      {visibleConstructorArray.sort((a, b) => a.initialOrder - b.initialOrder).map((el, index) => {
        if (el.word !== 'emptySlot') return <DraggableWord key={el.id} word={el} isWorksheet={false} index={index}/>
        else return <EmptySlot key={el.id} emptySlot={el} isWorksheet={false} index={index}/>
      })}
    </S.ConstructorBlock>
  )
}

export default ConstructorBlock
