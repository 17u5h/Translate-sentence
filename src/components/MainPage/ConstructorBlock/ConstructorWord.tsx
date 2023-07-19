import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import {Word} from "../../../types/Word";
import {useDragDropStore} from "../../../store/dragDropStore";
import {useWorkplaceStore} from "../../../store/workplaceStore";
import {seekAndDestroyWord} from "../../../lib/seekAndDestroyWord";

type Props = {
	word: Word
}

const ConstructorWord = ({word}: Props) => {
	const {
		constructorArray,
		dispatchConstructorArray,
		worksheetArray,
		dispatchWorksheetArray
	} = useWorkplaceStore(({
													 constructorArray,
													 dispatchConstructorArray,
													 worksheetArray,
													 dispatchWorksheetArray
												 }) => ({constructorArray, dispatchConstructorArray, worksheetArray, dispatchWorksheetArray}))

	const {dispatchCurrentWord} = useDragDropStore(({dispatchCurrentWord}) => ({dispatchCurrentWord}))


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
	}

	return <S.ConstructorWord draggable={true}
														onDragStart={(e) => dragStartHandler(e, word)}
														onDragLeave={(e) => dragLeaveHandler(e)}
														onDragEnd={(e) => dragEndHandler(e)}
														onDragOver={(e) => dragOverHandler(e)}
														onDrop={(e) => dropHandler(e, word)}
	>{word.word}</S.ConstructorWord>
}

export default ConstructorWord
