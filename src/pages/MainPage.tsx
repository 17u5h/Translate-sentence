import React, { useEffect } from 'react'
import Title from '../components/MainPage/Title'
import NeedToTranslateBlock from '../components/MainPage/NeedToTranslateBlock'
import * as S from '../styles/mainPageStyles'
import { phrasesStub } from '../stubs/phrasesStub'
import { usePhrasesStore } from '../store/phrasesStore'
import { convertStringPhraseToWordsArray } from '../lib/convertStringPhraseToWordsArray'

const MainPage = () => {
  const { dispatchEnglishPhraseArray, dispatchRussianPhraseArray } = usePhrasesStore(
    ({ dispatchEnglishPhraseArray, dispatchRussianPhraseArray }) => ({
      dispatchEnglishPhraseArray,
      dispatchRussianPhraseArray
    })
  )

  const fetchEnAndRusPhrases = async () => {
    const data = phrasesStub
    const englishWordsArray = convertStringPhraseToWordsArray(data.en)
    const russianWordsArray = convertStringPhraseToWordsArray(data.ru)
    dispatchEnglishPhraseArray(englishWordsArray)
    dispatchRussianPhraseArray(russianWordsArray)
  }

  useEffect(() => {
    fetchEnAndRusPhrases()
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <Title />
        <NeedToTranslateBlock />
      </S.Container>
    </S.Wrapper>
  )
}

export default MainPage
