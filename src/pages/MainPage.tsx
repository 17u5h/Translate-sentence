import React, { useEffect } from 'react'
import Title from '../components/MainPage/atoms/Title'
import NeedToTranslateBlock from '../components/MainPage/NeedToTranslateBlock'
import * as S from '../styles/mainPageStyles'
import { phrasesStub } from '../stubs/phrasesStub'
import { usePhrasesStore } from '../store/initialPhrasesStore'
import { convertStringPhraseToWordsArray } from '../lib/convertStringPhraseToWordsArray'
import { useWorkplaceStore } from '../store/workplaceStore'
import ConstructorBlock from '../components/MainPage/ConstructorBlock'
import { shuffleWords } from '../lib/shuffleWords'
import WorksheetBlock from '../components/MainPage/WorksheetBlock'
import ConfirmBlock from '../components/MainPage/ConfirmBlock'
import { usePlayAgainStore } from '../store/playAgainStore'

const MainPage = () => {
  const { dispatchEnglishPhraseArray, dispatchConstructorArrayInitialLength } = usePhrasesStore(
    ({ dispatchEnglishPhraseArray, dispatchConstructorArrayInitialLength }) => ({
      dispatchEnglishPhraseArray,
      dispatchConstructorArrayInitialLength: dispatchConstructorArrayInitialLength
    })
  )
  const { dispatchConstructorArray } = useWorkplaceStore(({ dispatchConstructorArray }) => ({
    dispatchConstructorArray
  }))
  const { playAgain } = usePlayAgainStore(({ playAgain }) => ({
    playAgain
  }))

  const fetchEnAndRusPhrases = async () => {
    try {
      const data = phrasesStub
      const englishWordsArray = convertStringPhraseToWordsArray(data.en)
      const russianWordsArray = convertStringPhraseToWordsArray(data.ru)
      shuffleWords(russianWordsArray)
      dispatchConstructorArrayInitialLength(russianWordsArray.length)
      dispatchEnglishPhraseArray(englishWordsArray)
      dispatchConstructorArray(russianWordsArray)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchEnAndRusPhrases()
  }, [playAgain])

  return (
    <S.Wrapper>
      <S.Container>
        <Title />
        <NeedToTranslateBlock />
        <WorksheetBlock />
        <ConstructorBlock />
        <ConfirmBlock />
      </S.Container>
    </S.Wrapper>
  )
}

export default MainPage
