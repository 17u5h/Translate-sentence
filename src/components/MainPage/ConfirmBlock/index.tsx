import React, {useState} from 'react'
import UICheckButton from '../../UI/UICheckButton'
import * as S from '../../../styles/confirmStyles'
import ConfirmSign from './ConfirmSign'
import {useWorkplaceStore} from "../../../store/workplaceStore";
import {isArraysEqual} from "../../../lib/isArraysEqual";
import {usePhrasesStore} from "../../../store/initialPhrasesStore";
import {useSpeechSynthesis} from 'react-speech-kit'
import {usePlayAgainStore} from "../../../store/playAgainStore";

const ConfirmBlock = () => {
	const [isConfirmSignVisible, setIsConfirmSignVisible] = useState<boolean>(false)
	const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false)
	const {worksheetArray,dispatchWorksheetArray} = useWorkplaceStore(({worksheetArray,dispatchWorksheetArray}) => ({worksheetArray,dispatchWorksheetArray}))
	const {englishPhraseArray} = usePhrasesStore(({englishPhraseArray}) => ({englishPhraseArray}))
	const {playAgain, dispatchPlayAgain} = usePlayAgainStore(({playAgain, dispatchPlayAgain}) => ({
		playAgain,
		dispatchPlayAgain
	}))
	const {speak} = useSpeechSynthesis()

	const confirmHandler = () => {
		const verdict = isArraysEqual(worksheetArray, englishPhraseArray)
		setIsAnswerCorrect(verdict)
		const textToSpeech = englishPhraseArray.map(el => (el.word)).join(' ')
		setIsConfirmSignVisible(prevState => !prevState)
		if (verdict) {
			speak({text: textToSpeech})
			setIsAnswerCorrect(true)
			setIsConfirmSignVisible(true)
			dispatchWorksheetArray([])
			dispatchPlayAgain(playAgain + 1)
			setTimeout(() => setIsConfirmSignVisible(false), 5000)
		}
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
