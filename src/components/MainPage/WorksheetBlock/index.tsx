import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import {useWorkplaceStore} from '../../../store/workplaceStore'
import ConstructorWord from '../ConstructorBlock/ConstructorWord'
import {Word} from "../../../types/Word";
import {useDragDropStore} from "../../../store/dragDropStore";
import {seekAndDestroyWord} from "../../../lib/seekAndDestroyWord";

const WorksheetBlock = () => {
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
	const {currentWord} = useDragDropStore(({currentWord}) => ({currentWord}))

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		if (currentWord && worksheetArray.includes(currentWord)) return
		if (currentWord) {
			worksheetArray.push(currentWord)
			seekAndDestroyWord(currentWord, constructorArray, dispatchConstructorArray)
		}
		dispatchWorksheetArray(worksheetArray)
	}

	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		return
	}

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}


	return (
		<S.WorksheetBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}
											onDragEnd={(e) => dragEndHandler(e)}>
			{worksheetArray.map((el) => (
				<ConstructorWord key={el.id} word={el}/>
			))}
		</S.WorksheetBlock>
	)
}

export default WorksheetBlock
