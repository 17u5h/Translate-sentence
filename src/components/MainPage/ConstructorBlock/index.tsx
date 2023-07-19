import React from 'react'
import * as S from '../../../styles/mainPageStyles'
import {useWorkplaceStore} from '../../../store/workplaceStore'
import ConstructorWord from './ConstructorWord'
import {useDragDropStore} from "../../../store/dragDropStore";
import {seekAndDestroyWord} from "../../../lib/seekAndDestroyWord";

const ConstructorBlock = () => {
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
		if (currentWord && constructorArray.includes(currentWord)) return
		if (currentWord) {
			constructorArray.push(currentWord)
			seekAndDestroyWord(currentWord, worksheetArray, dispatchWorksheetArray)
		}
		dispatchConstructorArray(constructorArray)
	}
	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	return (
		<S.ConstructorBlock onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}>
			{constructorArray.map((el) => (
				<ConstructorWord key={el.id} word={el}/>
			))}
		</S.ConstructorBlock>
	)
}

export default ConstructorBlock
