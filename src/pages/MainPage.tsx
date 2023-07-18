import React, { useEffect } from 'react'
import Title from '../components/MainPage/Title'
import NeedToTranslateBlock from '../components/MainPage/NeedToTranslateBlock'
import * as S from '../styles/mainPageStyles'
import { phrasesStub } from '../stubs/phrasesStub'
import { usePhrasesStore } from '../store/initialPhrasesStore'
import { convertStringPhraseToWordsArray } from '../lib/convertStringPhraseToWordsArray'
import { useWorkplaceStore } from '../store/workplaceStore'
import ConstructorBlock from '../components/MainPage/ConstructorBlock'
import { shuffleWords } from '../lib/shuffleWords'
import WorksheetBlock from '../components/MainPage/WorksheetBlock'
import UIButton from "../components/UI/UIButton";

const MainPage = () => {
  const { dispatchEnglishPhraseArray } = usePhrasesStore(({ dispatchEnglishPhraseArray }) => ({
    dispatchEnglishPhraseArray
  }))
  const { dispatchConstructorArray } = useWorkplaceStore(({ dispatchConstructorArray }) => ({
    dispatchConstructorArray
  }))

  const fetchEnAndRusPhrases = async () => {
    const data = phrasesStub
    const englishWordsArray = convertStringPhraseToWordsArray(data.en)
    const russianWordsArray = convertStringPhraseToWordsArray(data.ru)
    shuffleWords(russianWordsArray)
    dispatchEnglishPhraseArray(englishWordsArray)
    dispatchConstructorArray(russianWordsArray)
  }

  useEffect(() => {
    fetchEnAndRusPhrases()
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <Title />
        <NeedToTranslateBlock />
        <WorksheetBlock />
        <ConstructorBlock />
        <UIButton/>
      </S.Container>
    </S.Wrapper>
  )
}

export default MainPage
