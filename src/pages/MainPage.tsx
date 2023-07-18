import React, {useEffect} from 'react'
import Title from '../components/MainPage/Title'
import NeedToTranslateBlock from '../components/MainPage/NeedToTranslateBlock'
import * as S from '../styles/mainPageStyles'
import {phrasesStub} from '../stubs/phrasesStub'
import {usePhrasesStore} from '../store/initialPhrasesStore'
import {convertStringPhraseToWordsArray} from '../lib/convertStringPhraseToWordsArray'
import {useWorkplaceStore} from "../store/workplaceStore";

const MainPage = () => {
	const {dispatchEnglishPhraseArray} = usePhrasesStore(
		({dispatchEnglishPhraseArray}) => ({
			dispatchEnglishPhraseArray
		})
	)
	const {dispatchConstructorArray} = useWorkplaceStore(
		({dispatchConstructorArray}) => ({dispatchConstructorArray})
	)

	const fetchEnAndRusPhrases = async () => {
		const data = phrasesStub
		const englishWordsArray = convertStringPhraseToWordsArray(data.en)
		const russianWordsArray = convertStringPhraseToWordsArray(data.ru)
		dispatchEnglishPhraseArray(englishWordsArray)
		dispatchConstructorArray(russianWordsArray)
	}

	useEffect(() => {
		fetchEnAndRusPhrases()
	}, [])

	return (
		<S.Wrapper>
			<S.Container>
				<Title/>
				<NeedToTranslateBlock/>
			</S.Container>
		</S.Wrapper>
	)
}

export default MainPage
