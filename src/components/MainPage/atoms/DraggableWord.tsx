import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import { Word } from '../../../types/Word'
import { useDragDropStore } from '../../../store/dragDropStore'
import { useWorkplaceStore } from '../../../store/workplaceStore'
import { changeOrderOfWordsInWorksheet } from '../../../lib/changeOrderOfWordsInWorksheet'

type Props = {
  word: Word
  isWorksheet: boolean
}

const DraggableWord = ({ word, isWorksheet }: Props) => {
  const { worksheetArray, dispatchWorksheetArray } = useWorkplaceStore(
    ({ worksheetArray, dispatchWorksheetArray }) => ({
      worksheetArray,
      dispatchWorksheetArray
    })
  )

  const { currentWord, dispatchCurrentWord } = useDragDropStore(
    ({ currentWord, dispatchCurrentWord }) => ({
      currentWord,
      dispatchCurrentWord
    })
  )

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, word: Word) => {
    dispatchCurrentWord(word)
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    return
  }

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    return
  }

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, word: Word) => {
    e.preventDefault()
    if (isWorksheet)
      changeOrderOfWordsInWorksheet(currentWord, word, worksheetArray, dispatchWorksheetArray)
  }

  return (
    <S.ConstructorWord
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, word)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, word)}
    >
      {word.word}
    </S.ConstructorWord>
  )
}

export default DraggableWord
