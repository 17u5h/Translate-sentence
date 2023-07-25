import React, { useEffect } from 'react'
import Title from '../components/MainPage/atoms/Title'
import NeedToTranslateBlock from '../components/MainPage/molecules/NeedToTranslateBlock'
import * as S from '../styles/mainPageStyles'
import { phrasesStub } from '../stubs/phrasesStub'
import { usePhrasesStore } from '../store/initialPhrasesStore'
import { convertStringPhraseToWordsArray } from '../lib/convertStringPhraseToWordsArray'
import { useWorkplaceStore } from '../store/workplaceStore'
import ConstructorBlock from '../components/MainPage/molecules/ConstructorBlock'
import { shuffleWords } from '../lib/shuffleWords'
import WorksheetBlock from '../components/MainPage/molecules/WorksheetBlock'
import ConfirmBlock from '../components/MainPage/molecules/ConfirmBlock'
import { usePlayAgainStore } from '../store/playAgainStore'
import { getInitialIndexes } from '../lib/getInitialIndexes'
import { usePreviousIndexesStore } from '../store/previousIndexesStore'

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
  const { dispatchPreviousIndexes } = usePreviousIndexesStore(({ dispatchPreviousIndexes }) => ({
    dispatchPreviousIndexes
  }))

  const fetchEnAndRusPhrases = async () => {
    try {
      const data = phrasesStub
      const englishWordsArray = convertStringPhraseToWordsArray(data.en)
      const russianWordsArray = convertStringPhraseToWordsArray(data.ru)
      shuffleWords(russianWordsArray)
      const initialIndexes = getInitialIndexes(russianWordsArray)
      dispatchPreviousIndexes(initialIndexes)
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
