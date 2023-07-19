import React, {useState} from 'react'
import UICheckButton from '../../UI/UICheckButton'
import * as S from '../../../styles/confirmStyles'
import ConfirmSign from './ConfirmSign'
import {useWorkplaceStore} from "../../../store/workplaceStore";
import {isArraysEqual} from "../../../lib/isArraysEqual";
import {usePhrasesStore} from "../../../store/initialPhrasesStore";

const ConfirmBlock = () => {
	const [isConfirmSignVisible, setIsConfirmSignVisible] = useState<boolean>(false)
	const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false)
	const {worksheetArray} = useWorkplaceStore(({worksheetArray}) => ({worksheetArray}))
	const {englishPhraseArray} = usePhrasesStore(({englishPhraseArray}) => ({englishPhraseArray}))

	const confirmHandler = () => {
		const verdict = isArraysEqual(worksheetArray, englishPhraseArray)
		setIsAnswerCorrect(verdict)
		setIsConfirmSignVisible((prevState) => !prevState)
	}

	return (
		<S.ConfirmBlock>
			{isConfirmSignVisible && <ConfirmSign isAnswerCorrect={isAnswerCorrect}/>}
			<UICheckButton onClick={confirmHandler} isConfirmSignVisible={isConfirmSignVisible}>
				Check
			</UICheckButton>
		</S.ConfirmBlock>
	)
}

export default ConfirmBlock
