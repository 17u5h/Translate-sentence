import React, { useEffect, useState } from 'react'
import * as S from '../../../styles/mainPageStyles'
import { WordType } from '../../../types/WordType'
import { useDragDropStore } from '../../../store/dragDropStore'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import { changeOrderOfWordsInWorksheet } from '../../../lib/changeOrderOfWordsInWorksheet'
import { PositionStylesType } from '../../../types/PositionStylesType'
import { keyframePositionStyle } from '../../../lib/keyframePositionStyle'
import { insertKeyframesElement } from '../../../lib/insertKeyframesElement'
import { removeKeyframesElement } from '../../../lib/removeKeyframesElement'
import { usePreviousIndexesStore } from '../../../store/previousIndexesStore'
import {managePrevIndexesWhenMoveFromConstructor} from "../../../lib/managePrevIndexesWhenMoveFromConstructor";

type Props = {
  word: WordType
  isWorksheet: boolean
  index: number
  previousIndex: number
}

const DraggableWord = ({ word, isWorksheet, index, previousIndex }: Props) => {
  const initialPosition = { top: '-20000px', left: '-20000px' }
  const [positionStyles, setPositionStyles] = useState<PositionStylesType>(initialPosition)

  const { worksheetArray, dispatchWorksheetArray, constructorArray } =
    useWorkplaceStore(
      ({ worksheetArray, dispatchWorksheetArray, constructorArray }) => ({
        worksheetArray,
        dispatchWorksheetArray,
        constructorArray
      })
    )

  const { currentWord, dispatchCurrentWord } = useDragDropStore(
    ({ currentWord, dispatchCurrentWord }) => ({currentWord, dispatchCurrentWord})
  )

  const { dispatchPreviousIndexes } = usePreviousIndexesStore(({ dispatchPreviousIndexes }) => ({dispatchPreviousIndexes}))

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, word: WordType) => {
    dispatchCurrentWord(word)
    if (!isWorksheet) managePrevIndexesWhenMoveFromConstructor(constructorArray, word, dispatchPreviousIndexes)
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, word: WordType) => {
    e.preventDefault()
    if (isWorksheet) changeOrderOfWordsInWorksheet(currentWord, word, worksheetArray, dispatchWorksheetArray)
  }

  useEffect(() => {
    const keyframe = keyframePositionStyle(index, previousIndex)
    const styleElement = insertKeyframesElement(keyframe)
    const style = { WebkitAnimation: `moveIt${index} 1s forwards` }

    setPositionStyles(style)

    return () => removeKeyframesElement(styleElement)
  }, [previousIndex, index])

  return (
    <S.ConstructorWord
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, word)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, word)}
      $isWorksheet={isWorksheet}
      style={positionStyles}
    >
      {word.word}
    </S.ConstructorWord>
  )
}

export default DraggableWord
